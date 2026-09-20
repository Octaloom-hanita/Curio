import type { IconName } from './Visuals';
import type { Topic } from './topics';

const SUPABASE_URL = 'https://quxhnwpbrkiisrseaexs.supabase.co';

// Supabase publishable keys are designed for client-side use.
// RLS, not key secrecy, is the authorization boundary.
const SUPABASE_PUBLISHABLE_KEY =
  'sb_publishable_506h_HDrCY7cOpx9WE7tVA_0KztHoaF';

type TopicRow = {
  id: string;
  category_id: string | null;
  title_ru: string;
  title_en: string;
  description_ru: string | null;
  description_en: string | null;
  sort_order: number;
};

type ImmersionRow = {
  id: string;
  topic_id: string | null;
  title_ru: string;
  title_en: string;
  sort_order: number;
};

type Accent = Topic['color'];

const presentationByArea: Record<
  string,
  { icon: IconName; color: Accent }
> = {
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

export async function loadApprovedTopics(): Promise<Topic[]> {
  try {
    const [topicRows, immersionRows] = await Promise.all([
      readApprovedRows<TopicRow>(
        'topics?select=id,category_id,title_ru,title_en,description_ru,description_en,sort_order&order=sort_order.asc'
      ),
      readApprovedRows<ImmersionRow>(
        'immersions?select=id,topic_id,title_ru,title_en,sort_order&order=sort_order.asc'
      ),
    ]);

    if (topicRows.length === 0) return [];

    const firstImmersionByTopic = new Map<string, ImmersionRow>();

    for (const immersion of immersionRows) {
      if (
        immersion.topic_id &&
        !firstImmersionByTopic.has(immersion.topic_id)
      ) {
        firstImmersionByTopic.set(immersion.topic_id, immersion);
      }
    }

    return topicRows.map((row) => {
      const firstImmersion = firstImmersionByTopic.get(row.id);
      const presentation = row.category_id
        ? presentationByArea[row.category_id] ?? fallbackPresentation
        : fallbackPresentation;

      return {
        id: row.id,
        icon: presentation.icon,
        color: presentation.color,
        ready: Boolean(firstImmersion),
        ru: {
          title: row.title_ru,
          description: row.description_ru ?? '',
          first: firstImmersion?.title_ru ?? 'Исследование готовится',
        },
        en: {
          title: row.title_en,
          description: row.description_en ?? '',
          first: firstImmersion?.title_en ?? 'Exploration in preparation',
        },
      };
    });
  } catch (error) {
    console.warn('Could not load approved Curio catalog from Supabase.', error);
    return [];
  }
}
