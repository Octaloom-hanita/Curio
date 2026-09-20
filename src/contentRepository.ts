import type { IconName } from './Visuals';
import type { Topic } from './topics';

const SUPABASE_URL = 'https://quxhnwpbrkiisrseaexs.supabase.co';

// Publishable key: safe for client-side use. RLS is the authorization boundary.
const SUPABASE_PUBLISHABLE_KEY =
  'sb_publishable_506h_HDrCY7cOpx9WE7tVA_0KztHoaF';

type Accent = Topic['color'];

type CategoryRow = {
  id: string;
  title_ru: string;
  title_en: string;
  description_ru: string | null;
  description_en: string | null;
  sort_order: number;
};

type QuestionRow = {
  id: string;
  category_id: string | null;
  prompt_ru: string;
  prompt_en: string;
  difficulty: number;
};

type ImmersionRow = {
  id: string;
  category_id: string | null;
  topic_id: string | null;
  primary_question_id: string | null;
  title_ru: string;
  title_en: string;
  summary_ru: string | null;
  summary_en: string | null;
  sort_order: number;
};

type ImmersionStepRow = {
  id: string;
  position: number;
  step_type: string;
  title_ru: string | null;
  title_en: string | null;
  body_ru: unknown;
  body_en: unknown;
  question_id: string | null;
};

export type LessonStep = {
  id: string;
  kind: 'intro' | 'learn' | 'summary' | 'note' | 'recall' | 'connection' | 'complete';
  questionId?: string;
  ru: {
    eyebrow: string;
    title: string;
    body: string[];
    cta?: string;
  };
  en: {
    eyebrow: string;
    title: string;
    body: string[];
    cta?: string;
  };
};

const presentationByArea: Record<string, { icon: IconName; color: Accent }> = {
  area_earth: { icon: 'atom', color: 'blue' },
  area_life: { icon: 'leaf', color: 'green' },
  area_brain: { icon: 'brain', color: 'purple' },
  area_cognition: { icon: 'bulb', color: 'yellow' },
  area_society: { icon: 'network', color: 'orange' },
  area_body: { icon: 'atom', color: 'orange' },
  area_technology: { icon: 'atom', color: 'blue' },
  area_science: { icon: 'microscope', color: 'purple' },
};

const fallbackPresentation = {
  icon: 'book' as IconName,
  color: 'blue' as Accent,
};

async function readApprovedRows<T>(path: string): Promise<T[]> {
  const response = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
    headers: {
      apikey: SUPABASE_PUBLISHABLE_KEY,
      Authorization: `Bearer ${SUPABASE_PUBLISHABLE_KEY}`,
      Accept: 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`SUPABASE_READ_FAILED_${response.status}`);
  }

  const data = await response.json();
  return Array.isArray(data) ? (data as T[]) : [];
}

function parseStepBody(value: unknown): {
  eyebrow: string;
  paragraphs: string[];
  cta?: string;
} {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    return { eyebrow: '', paragraphs: [] };
  }

  const raw = value as Record<string, unknown>;
  const eyebrow = typeof raw.eyebrow === 'string' ? raw.eyebrow : '';
  const paragraphs = Array.isArray(raw.paragraphs)
    ? raw.paragraphs.filter((item): item is string => typeof item === 'string')
    : [];
  const cta = typeof raw.cta === 'string' ? raw.cta : undefined;

  return { eyebrow, paragraphs, cta };
}

function appKind(stepType: string): LessonStep['kind'] {
  if (stepType === 'orientation') return 'intro';
  if (stepType === 'summary') return 'summary';
  if (stepType === 'debate' || stepType === 'editorial_note') return 'note';
  if (stepType === 'recall' || stepType === 'question') return 'recall';
  if (stepType === 'connection') return 'connection';
  if (stepType === 'completion') return 'complete';
  return 'learn';
}

export async function loadApprovedCatalog(): Promise<Topic[]> {
  try {
    const [categoryRows, questionRows, immersionRows] = await Promise.all([
      readApprovedRows<CategoryRow>(
        'categories?select=id,title_ru,title_en,description_ru,description_en,sort_order&order=sort_order.asc'
      ),
      readApprovedRows<QuestionRow>(
        'questions?is_discoverable=eq.true&select=id,category_id,prompt_ru,prompt_en,difficulty&order=difficulty.asc,id.asc'
      ),
      readApprovedRows<ImmersionRow>(
        'immersions?select=id,category_id,topic_id,primary_question_id,title_ru,title_en,summary_ru,summary_en,sort_order&order=sort_order.asc'
      ),
    ]);

    if (categoryRows.length === 0) return [];

    const firstImmersionByCategory = new Map<string, ImmersionRow>();
    const immersionByQuestion = new Map<string, ImmersionRow>();

    for (const immersion of immersionRows) {
      if (
        immersion.category_id &&
        !firstImmersionByCategory.has(immersion.category_id)
      ) {
        firstImmersionByCategory.set(immersion.category_id, immersion);
      }
      if (immersion.primary_question_id) {
        immersionByQuestion.set(immersion.primary_question_id, immersion);
      }
    }

    return categoryRows.map((row) => {
      const firstImmersion = firstImmersionByCategory.get(row.id);
      const questions = questionRows
        .filter((question) => question.category_id === row.id)
        .map((question) => ({
          id: question.id,
          immersionId: immersionByQuestion.get(question.id)?.id,
          ru: question.prompt_ru,
          en: question.prompt_en,
        }));
      const presentation = presentationByArea[row.id] ?? fallbackPresentation;

      return {
        id: row.id,
        immersionId: firstImmersion?.id,
        questions,
        icon: presentation.icon,
        color: presentation.color,
        ready: Boolean(firstImmersion),
        ru: {
          title: row.title_ru,
          description: row.description_ru ?? '',
          first: firstImmersion?.title_ru ?? 'Новые исследования готовятся',
        },
        en: {
          title: row.title_en,
          description: row.description_en ?? '',
          first: firstImmersion?.title_en ?? 'New explorations are in preparation',
        },
      };
    });
  } catch (error) {
    console.warn('Could not load approved Curio catalog from Supabase.', error);
    return [];
  }
}

export async function loadApprovedImmersionSteps(
  immersionId: string
): Promise<LessonStep[]> {
  try {
    const rows = await readApprovedRows<ImmersionStepRow>(
      `immersion_steps?immersion_id=eq.${encodeURIComponent(
        immersionId
      )}&select=id,position,step_type,title_ru,title_en,body_ru,body_en,question_id&order=position.asc`
    );

    return rows.map((row) => {
      const ru = parseStepBody(row.body_ru);
      const en = parseStepBody(row.body_en);

      return {
        id: row.id,
        kind: appKind(row.step_type),
        questionId: row.question_id ?? undefined,
        ru: {
          eyebrow: ru.eyebrow,
          title: row.title_ru ?? '',
          body: ru.paragraphs,
          cta: ru.cta,
        },
        en: {
          eyebrow: en.eyebrow,
          title: row.title_en ?? '',
          body: en.paragraphs,
          cta: en.cta,
        },
      };
    });
  } catch (error) {
    console.warn('Could not load approved Curio Immersion from Supabase.', error);
    return [];
  }
}
