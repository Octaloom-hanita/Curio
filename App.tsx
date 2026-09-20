import { useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {
  useFonts as useGolosFonts,
  GolosText_400Regular,
  GolosText_600SemiBold,
  GolosText_700Bold,
} from '@expo-google-fonts/golos-text';
import {
  useFonts as useLiterataFonts,
  Literata_600SemiBold,
} from '@expo-google-fonts/literata';
import { AppText, AppTextScaleProvider } from './src/AppText';
import { colors, radius, spacing } from './src/theme';
import { ui, type Locale } from './src/i18n';
import { CurioMark } from './src/BrandSystem';
import { CurioIcon, CurioIconBadge, type IconName } from './src/IconSystem';
import {
  CurioScene,
  CurioTopicVisual,
  type SceneName,
  type TopicVisualName,
} from './src/Visuals';
import { topics as fallbackTopics, type Topic } from './src/topics';
import { loadApprovedCatalog, loadApprovedImmersionSteps, type LessonStep } from './src/contentRepository';

type Accent = 'orange' | 'green' | 'purple' | 'blue' | 'yellow';
type Screen = 'home' | 'category' | 'lesson';

const accentMap: Record<Accent, string> = {
  orange: colors.orange,
  green: colors.green,
  purple: colors.purple,
  blue: colors.blue,
  yellow: colors.yellow,
};

const topicVisualByIcon: Partial<Record<IconName, TopicVisualName>> = {
  earth: 'earth',
  leaf: 'life',
  brain: 'brain',
  bulb: 'cognition',
  network: 'society',
  body: 'body',
  technology: 'technology',
  microscope: 'science',
};

const sceneMap: SceneName[] = [
  'airflow',
  'airflow',
  'temperature',
  'structure',
  'decentralized',
  'cycle',
  'cycle',
  'airflow',
  'recall',
  'connection',
  'complete',
];

const accentByStep: Accent[] = [
  'orange',
  'green',
  'orange',
  'blue',
  'purple',
  'blue',
  'green',
  'orange',
  'purple',
  'purple',
  'green',
];

function LanguageSwitch({
  locale,
  onChange,
}: {
  locale: Locale;
  onChange: (locale: Locale) => void;
}) {
  return (
    <View style={styles.segmented}>
      {(['ru', 'en'] as Locale[]).map((item) => (
        <Pressable
          key={item}
          accessibilityRole="button"
          accessibilityState={{ selected: locale === item }}
          onPress={() => onChange(item)}
          style={[
            styles.segmentedButton,
            locale === item && styles.segmentedButtonActive,
          ]}
        >
          <AppText variant="label">{item.toUpperCase()}</AppText>
        </Pressable>
      ))}
    </View>
  );
}

function TextSizeControl({
  locale,
  scale,
  onChange,
}: {
  locale: Locale;
  scale: number;
  onChange: (scale: number) => void;
}) {
  const copy = ui[locale];
  return (
    <View
      accessibilityLabel={copy.textSize}
      style={styles.textSizeControl}
    >
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={copy.smaller}
        disabled={scale <= 1}
        onPress={() => onChange(1)}
        style={[styles.textSizeButton, scale <= 1 && styles.controlDisabled]}
      >
        <AppText variant="label">A</AppText>
      </Pressable>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={copy.larger}
        disabled={scale >= 1.16}
        onPress={() => onChange(1.16)}
        style={[styles.textSizeButton, scale >= 1.16 && styles.controlDisabled]}
      >
        <AppText variant="title">A</AppText>
      </Pressable>
    </View>
  );
}

function PrimaryButton({
  label,
  onPress,
  accent = 'green',
  secondary = false,
  disabled = false,
}: {
  label: string;
  onPress: () => void;
  accent?: Accent;
  secondary?: boolean;
  disabled?: boolean;
}) {
  return (
    <Pressable
      accessibilityRole="button"
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        secondary
          ? styles.secondaryButton
          : { backgroundColor: accentMap[accent] },
        (pressed || disabled) && { opacity: disabled ? 0.45 : 0.82 },
      ]}
    >
      <AppText variant="label">{label}</AppText>
    </Pressable>
  );
}

function BottomNavigation({
  locale,
  screen,
  onHome,
  onExplore,
}: {
  locale: Locale;
  screen: Screen;
  onHome: () => void;
  onExplore: () => void;
}) {
  const active = screen === 'home' ? 'today' : 'explore';
  const items: {
    key: 'today' | 'explore' | 'review' | 'library' | 'profile';
    icon: IconName;
    ru: string;
    en: string;
    enabled: boolean;
    onPress?: () => void;
    accent: string;
  }[] = [
    { key: 'today', icon: 'today', ru: 'Сегодня', en: 'Today', enabled: true, onPress: onHome, accent: colors.orange },
    { key: 'explore', icon: 'explore', ru: 'Исследовать', en: 'Explore', enabled: true, onPress: onExplore, accent: colors.green },
    { key: 'review', icon: 'review', ru: 'Повторить', en: 'Review', enabled: false, accent: colors.purple },
    { key: 'library', icon: 'library', ru: 'Библиотека', en: 'Library', enabled: false, accent: colors.blue },
    { key: 'profile', icon: 'profile', ru: 'Профиль', en: 'Profile', enabled: false, accent: colors.yellow },
  ];

  return (
    <View style={styles.bottomNavWrap}>
      <View style={styles.bottomNav}>
        {items.map((item) => {
          const selected = active === item.key;
          return (
            <Pressable
              key={item.key}
              accessibilityRole="button"
              accessibilityState={{ selected, disabled: !item.enabled }}
              accessibilityLabel={locale === 'ru' ? item.ru : item.en}
              disabled={!item.enabled}
              onPress={item.onPress}
              style={({ pressed }) => [
                styles.bottomNavItem,
                selected && styles.bottomNavItemActive,
                !item.enabled && styles.bottomNavItemDisabled,
                pressed && item.enabled && { opacity: 0.76 },
              ]}
            >
              <CurioIcon
                name={item.icon}
                size={28}
                color={colors.ink}
                accent={item.accent}
              />
              <AppText variant="meta">
                {locale === 'ru' ? item.ru : item.en}
              </AppText>
              {selected && <View style={styles.bottomNavIndicator} />}
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

function Topbar({
  locale,
  textScale,
  onLocale,
  onTextScale,
  onHome,
  inLesson,
}: {
  locale: Locale;
  textScale: number;
  onLocale: (locale: Locale) => void;
  onTextScale: (scale: number) => void;
  onHome: () => void;
  inLesson: boolean;
}) {
  const copy = ui[locale];

  return (
    <View style={styles.topbar}>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={inLesson ? copy.topics : 'Curio'}
        onPress={onHome}
        style={styles.brand}
      >
        <CurioMark size={30} />
        <AppText variant="title">Curio</AppText>
      </Pressable>

      <View style={styles.topbarActions}>
        <TextSizeControl
          locale={locale}
          scale={textScale}
          onChange={onTextScale}
        />
        <LanguageSwitch locale={locale} onChange={onLocale} />
      </View>
    </View>
  );
}

function TopicCard({
  topic,
  locale,
  onPress,
}: {
  topic: Topic;
  locale: Locale;
  onPress: () => void;
}) {
  const copy = topic[locale];
  const uiCopy = ui[locale];
  const visualName = topicVisualByIcon[topic.icon];

  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [
        styles.topicCard,
        pressed && { opacity: 0.82 },
      ]}
    >
      <View style={styles.topicVisual}>
        {visualName ? (
          <CurioTopicVisual name={visualName} size={88} />
        ) : (
          <CurioIconBadge
            name={topic.icon}
            size={72}
            iconSize={38}
            background={accentMap[topic.color]}
            color={colors.surface}
            accent={colors.surface}
          />
        )}
      </View>

      <View style={styles.topicCopy}>
        <View style={styles.topicHeader}>
          <AppText variant="title">{copy.title}</AppText>
          <View
            style={[
              styles.statusPill,
              topic.ready ? styles.statusReady : styles.statusSoon,
            ]}
          >
            <AppText variant="meta">
              {topic.ready ? uiCopy.ready : uiCopy.soon}
            </AppText>
          </View>
        </View>

        <AppText variant="bodySmall" color="muted">
          {copy.description}
        </AppText>

        <View style={styles.firstLessonRow}>
          <AppText variant="label">
            {locale === 'ru' ? 'Первое исследование:' : 'First exploration:'}
          </AppText>
          <AppText variant="bodySmall">{copy.first}</AppText>
        </View>
      </View>
    </Pressable>
  );
}

function HomeScreen({
  locale,
  topics,
  onSelect,
  hasSession,
  onResume,
}: {
  locale: Locale;
  topics: Topic[];
  onSelect: (topic: Topic) => void;
  hasSession: boolean;
  onResume: () => void;
}) {
  const copy = ui[locale];

  const select = (topic: Topic) => {
    onSelect(topic);
  };

  return (
    <>
      <View style={styles.homeIntro}>
        <AppText variant="display" serif>
          {copy.chooseTopicTitle}
        </AppText>
        <AppText variant="body" color="muted">
          {copy.chooseTopicBody}
        </AppText>
      </View>

      {hasSession && (
        <View style={styles.resumeCard}>
          <View style={styles.resumeCopy}>
            <AppText variant="title">{copy.resumeTitle}</AppText>
            <AppText variant="bodySmall" color="muted">
              {copy.resumeBody}
            </AppText>
          </View>
          <PrimaryButton
            label={copy.resumeAction}
            onPress={onResume}
            accent="green"
          />
        </View>
      )}

      <View style={styles.honestyNote}>
        <CurioIconBadge
          name="bulb"
          size={54}
          iconSize={32}
          background={colors.yellow}
          color={colors.ink}
          accent={colors.orange}
        />
        <View style={styles.honestyCopy}>
          <AppText variant="bodySmall">{copy.onlyOneReady}</AppText>
        </View>
      </View>

      <View style={styles.topicList}>
        {topics.map((topic) => (
          <TopicCard
            key={topic.id}
            topic={topic}
            locale={locale}
            onPress={() => select(topic)}
          />
        ))}
      </View>

    </>
  );
}


function CategoryScreen({
  topic,
  locale,
  onBack,
  onStartImmersion,
}: {
  topic: Topic;
  locale: Locale;
  onBack: () => void;
  onStartImmersion: (immersionId: string) => void;
}) {
  const copy = topic[locale];
  const questions = topic.questions ?? [];
  const visualName = topicVisualByIcon[topic.icon];

  return (
    <>
      <View style={styles.progressRow}>
        <Pressable
          accessibilityRole="button"
          onPress={onBack}
          style={styles.backButton}
        >
          <CurioIcon name="back" size={24} color={colors.ink} />
          <AppText variant="meta">{locale === 'ru' ? 'Назад' : 'Back'}</AppText>
        </Pressable>
      </View>

      <View style={styles.categoryHero}>
        <View style={styles.categoryVisual}>
          {visualName ? (
            <CurioTopicVisual name={visualName} size={104} />
          ) : (
            <CurioIconBadge
              name={topic.icon}
              size={84}
              iconSize={42}
              background={accentMap[topic.color]}
              color={colors.surface}
              accent={colors.surface}
            />
          )}
        </View>
        <View style={styles.categoryHeroCopy}>
          <AppText variant="display" serif>
            {copy.title}
          </AppText>
          <AppText variant="body" color="muted">
            {copy.description}
          </AppText>
        </View>
      </View>

      <View style={styles.categorySectionHeader}>
        <AppText variant="headline">
          {locale === 'ru' ? 'Что можно исследовать' : 'Questions to explore'}
        </AppText>
        <AppText variant="bodySmall" color="muted">
          {locale === 'ru'
            ? 'Вопросы уже входят в карту Curio. Полное исследование открывается только после научной и редакционной проверки.'
            : 'These questions are already part of the Curio map. A full exploration opens only after scientific and editorial review.'}
        </AppText>
      </View>

      <View style={styles.questionList}>
        {questions.map((question) => {
          const ready = Boolean(question.immersionId);
          return (
            <View key={question.id} style={styles.questionCard}>
              <View style={styles.questionCopy}>
                <AppText variant="title">{question[locale]}</AppText>
                <View
                  style={[
                    styles.statusPill,
                    ready ? styles.statusReady : styles.statusSoon,
                  ]}
                >
                  <AppText variant="meta">
                    {ready
                      ? locale === 'ru'
                        ? 'Можно начать'
                        : 'Ready to start'
                      : locale === 'ru'
                      ? 'Готовится'
                      : 'In preparation'}
                  </AppText>
                </View>
              </View>
              {question.immersionId && (
                <PrimaryButton
                  label={locale === 'ru' ? 'Открыть исследование' : 'Open exploration'}
                  onPress={() => onStartImmersion(question.immersionId!)}
                  accent={topic.color}
                />
              )}
            </View>
          );
        })}

        {questions.length === 0 && (
          <View style={styles.honestyNote}>
            <CurioIcon name="bulb" size={42} color={colors.ink} accent={colors.yellow} />
            <AppText variant="bodySmall">
              {locale === 'ru'
                ? 'Карта вопросов для этой области загружается.'
                : 'The question map for this area is loading.'}
            </AppText>
          </View>
        )}
      </View>
    </>
  );
}

function LessonProgress({
  index,
  total,
  locale,
  onBack,
}: {
  index: number;
  total: number;
  locale: Locale;
  onBack: () => void;
}) {
  const copy = ui[locale];
  const current = index + 1;

  return (
    <View style={styles.progressRow}>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={copy.back}
        onPress={onBack}
        style={styles.backButton}
      >
        <CurioIcon name="back" size={24} color={colors.ink} />
        <AppText variant="meta">{copy.back}</AppText>
      </Pressable>

      <View style={styles.progressInfo}>
        <View style={styles.progressTrack}>
          <View
            style={[
              styles.progressFill,
              { width: `${Math.max(8, (current / total) * 100)}%` },
            ]}
          />
        </View>
        <AppText variant="meta" color="muted">
          {current} {locale === 'ru' ? 'из' : 'of'} {total}
        </AppText>
      </View>
    </View>
  );
}

export default function App() {
  const [golosLoaded] = useGolosFonts({
    GolosText_400Regular,
    GolosText_600SemiBold,
    GolosText_700Bold,
  });
  const [literataLoaded] = useLiterataFonts({ Literata_600SemiBold });

  const [locale, setLocale] = useState<Locale>('ru');
  const [textScale, setTextScale] = useState(1);
  const [screen, setScreen] = useState<Screen>('home');
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState('');
  const [hasSession, setHasSession] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const [evaluation, setEvaluation] = useState<any>(null);
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [evaluationError, setEvaluationError] = useState<string | null>(null);
  const [catalogTopics, setCatalogTopics] = useState<Topic[]>(fallbackTopics);
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [lessonSteps, setLessonSteps] = useState<LessonStep[]>([]);
  const [activeImmersionId, setActiveImmersionId] = useState('immersion_termite_reference');
  const [isLessonLoading, setIsLessonLoading] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [isTranscribing, setIsTranscribing] = useState(false);
  const [voiceError, setVoiceError] = useState<string | null>(null);
  const [transcriptNeedsConfirmation, setTranscriptNeedsConfirmation] = useState(false);
  const mediaRecorderRef = useRef<any>(null);
  const audioChunksRef = useRef<any[]>([]);
  const audioStreamRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const raw = window.localStorage.getItem('curio-mvp-state-v1');
        if (raw) {
          const saved = JSON.parse(raw);
          if (saved.locale === 'ru' || saved.locale === 'en') {
            setLocale(saved.locale);
          }
          if (saved.textScale === 1 || saved.textScale === 1.16) {
            setTextScale(saved.textScale);
          }
          if (Number.isInteger(saved.index)) {
            setIndex(Math.max(0, Math.min(ui.ru.steps.length - 1, saved.index)));
          }
          if (typeof saved.answer === 'string') {
            setAnswer(saved.answer.slice(0, 3000));
          }
          setHasSession(Boolean(saved.hasSession));
          if (typeof saved.activeImmersionId === 'string') {
            setActiveImmersionId(saved.activeImmersionId);
          }
        }
      } catch {
        // Corrupt local state should never block learning.
      }
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated || typeof window === 'undefined') return;
    try {
      window.localStorage.setItem(
        'curio-mvp-state-v1',
        JSON.stringify({ locale, textScale, index, answer, hasSession, activeImmersionId })
      );
    } catch {
      // Storage failure should not block the session.
    }
  }, [hydrated, locale, textScale, index, answer, hasSession, activeImmersionId]);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = locale;
    }
  }, [locale]);

  useEffect(() => {
    let cancelled = false;

    loadApprovedCatalog().then((remoteTopics) => {
      if (!cancelled && remoteTopics.length > 0) {
        setCatalogTopics(remoteTopics);
      }
    });

    return () => {
      cancelled = true;
    };
  }, []);

  if (!golosLoaded || !literataLoaded || !hydrated) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color={colors.orange} />
      </View>
    );
  }

  const copy = ui[locale];
  const remoteStep = lessonSteps[index];
  const localizedRemoteStep = remoteStep?.[locale];
  const fallbackStep = copy.steps[index];
  const step: any = localizedRemoteStep
    ? { ...localizedRemoteStep, kind: remoteStep.kind }
    : fallbackStep;
  const kind = step?.kind ?? 'learn';
  const cta = step?.cta;
  const totalSteps = lessonSteps.length > 0 ? lessonSteps.length : copy.steps.length;
  const scene = sceneMap[index] ?? 'airflow';
  const accent = accentByStep[index] ?? 'green';
  const summaryIndex = lessonSteps.length > 0
    ? Math.max(0, lessonSteps.findIndex((item) => item.kind === 'summary'))
    : 6;
  const connectionIndex = lessonSteps.length > 0
    ? Math.max(0, lessonSteps.findIndex((item) => item.kind === 'connection'))
    : 9;

  const resetEvaluation = () => {
    setEvaluation(null);
    setEvaluationError(null);
    setIsEvaluating(false);
  };

  const goHome = () => {
    setScreen('home');
    setSelectedTopic(null);
    resetEvaluation();
  };

  const goExplore = () => {
    resetEvaluation();
    if (selectedTopic) {
      setScreen('category');
      return;
    }
    setScreen('home');
  };

  const loadLesson = async (immersionId: string) => {
    setIsLessonLoading(true);
    const remoteSteps = await loadApprovedImmersionSteps(immersionId);
    setLessonSteps(remoteSteps);
    setIsLessonLoading(false);
  };

  const openCategory = (topic: Topic) => {
    setSelectedTopic(topic);
    setScreen('category');
    resetEvaluation();
  };

  const startImmersion = async (immersionId: string) => {
    setActiveImmersionId(immersionId);
    setScreen('lesson');
    setIndex(0);
    setAnswer('');
    setHasSession(true);
    setTranscriptNeedsConfirmation(false);
    setVoiceError(null);
    resetEvaluation();
    await loadLesson(immersionId);
  };

  const resumeLesson = async () => {
    setScreen('lesson');
    resetEvaluation();
    if (lessonSteps.length === 0) {
      await loadLesson(activeImmersionId);
    }
  };

  const finishAndHome = () => {
    setHasSession(false);
    setScreen('home');
    setIndex(0);
    setAnswer('');
    setLessonSteps([]);
    setTranscriptNeedsConfirmation(false);
    setVoiceError(null);
    resetEvaluation();
  };

  const goBack = () => {
    resetEvaluation();
    if (index === 0) {
      if (selectedTopic) {
        setScreen('category');
        resetEvaluation();
      } else {
        goHome();
      }
      return;
    }
    setIndex((value) => Math.max(0, value - 1));
  };

  const goNext = () => {
    resetEvaluation();
    setIndex((value) => Math.min(totalSteps - 1, value + 1));
  };

  const continueAfterEvaluation = () => {
    resetEvaluation();
    setIndex(connectionIndex);
  };

  const retryAnswer = () => {
    setEvaluation(null);
    setEvaluationError(null);
  };

  const reviewExplanation = () => {
    resetEvaluation();
    setIndex(summaryIndex);
  };

  const canUseMicrophone =
    typeof navigator !== 'undefined' &&
    Boolean((navigator as any).mediaDevices?.getUserMedia) &&
    typeof (globalThis as any).MediaRecorder !== 'undefined';

  const stopAudioStream = () => {
    const stream = audioStreamRef.current;
    if (stream?.getTracks) {
      stream.getTracks().forEach((track: any) => track.stop());
    }
    audioStreamRef.current = null;
  };

  const transcribeAudio = async (blob: Blob) => {
    setIsTranscribing(true);
    setVoiceError(null);

    try {
      const dataUrl = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onerror = () => reject(new Error('READ_FAILED'));
        reader.onloadend = () => resolve(String(reader.result ?? ''));
        reader.readAsDataURL(blob);
      });

      const audioBase64 = dataUrl.split(',')[1] ?? '';
      if (!audioBase64) throw new Error('EMPTY_AUDIO');

      const response = await fetch('/api/transcribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          audioBase64,
          mimeType: blob.type || 'audio/webm',
          locale,
        }),
      });

      const data = await response.json();
      if (!response.ok || typeof data?.transcript !== 'string') {
        throw new Error(data?.error || 'TRANSCRIPTION_FAILED');
      }

      setAnswer(data.transcript.trim());
      setTranscriptNeedsConfirmation(true);
      setEvaluation(null);
      setEvaluationError(null);
    } catch {
      setVoiceError(
        locale === 'ru'
          ? 'Не удалось расшифровать запись. Можно записать ещё раз или ответить текстом.'
          : 'The recording could not be transcribed. You can record again or answer by typing.'
      );
    } finally {
      setIsTranscribing(false);
    }
  };

  const startRecording = async () => {
    if (!canUseMicrophone || isRecording || isTranscribing) return;

    setVoiceError(null);
    setTranscriptNeedsConfirmation(false);

    try {
      const stream = await (navigator as any).mediaDevices.getUserMedia({
        audio: true,
      });
      audioStreamRef.current = stream;
      audioChunksRef.current = [];

      const Recorder = (globalThis as any).MediaRecorder;
      const recorder = new Recorder(stream);
      mediaRecorderRef.current = recorder;

      recorder.ondataavailable = (event: any) => {
        if (event?.data?.size > 0) audioChunksRef.current.push(event.data);
      };

      recorder.onstop = async () => {
        const blob = new Blob(audioChunksRef.current, {
          type: recorder.mimeType || 'audio/webm',
        });
        audioChunksRef.current = [];
        stopAudioStream();
        setIsRecording(false);
        if (blob.size > 0) await transcribeAudio(blob);
      };

      recorder.start();
      setIsRecording(true);
    } catch {
      stopAudioStream();
      setIsRecording(false);
      setVoiceError(
        locale === 'ru'
          ? 'Не удалось получить доступ к микрофону. Можно продолжить текстом.'
          : 'Microphone access was not available. You can continue by typing.'
      );
    }
  };

  const stopRecording = () => {
    const recorder = mediaRecorderRef.current;
    if (recorder && recorder.state !== 'inactive') {
      recorder.stop();
    }
  };

  const evaluateAnswer = async () => {
    if (transcriptNeedsConfirmation) {
      setEvaluationError(
        locale === 'ru'
          ? 'Сначала проверьте и подтвердите расшифровку записи.'
          : 'Please review and confirm the transcript first.'
      );
      return;
    }

    const clean = answer.trim();

    if (clean.length < 8) {
      setEvaluationError(copy.emptyAnswer);
      return;
    }

    setIsEvaluating(true);
    setEvaluation(null);
    setEvaluationError(null);

    try {
      const response = await fetch('/api/evaluate-answer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answerText: clean, locale }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data?.error === 'GEMINI_ACCESS_DENIED') {
          setEvaluationError(copy.aiUnavailable);
          return;
        }
        throw new Error(data?.error || 'EVALUATION_FAILED');
      }

      setEvaluation(data);
    } catch {
      setEvaluationError(copy.checkFailed);
    } finally {
      setIsEvaluating(false);
    }
  };

  return (
    <AppTextScaleProvider scale={textScale}>
      <SafeAreaView style={styles.safe}>
        <StatusBar style="dark" />
        <ScrollView
          contentContainerStyle={styles.page}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.shell}>
            <Topbar
              locale={locale}
              textScale={textScale}
              onLocale={setLocale}
              onTextScale={setTextScale}
              onHome={goHome}
              inLesson={screen === 'lesson'}
            />

            {screen === 'home' ? (
              <HomeScreen
                locale={locale}
                topics={catalogTopics}
                onSelect={openCategory}
                hasSession={hasSession}
                onResume={resumeLesson}
              />
            ) : screen === 'category' && selectedTopic ? (
              <CategoryScreen
                topic={selectedTopic}
                locale={locale}
                onBack={goHome}
                onStartImmersion={startImmersion}
              />
            ) : (
              <>
                <LessonProgress
                  index={index}
                  total={totalSteps}
                  locale={locale}
                  onBack={goBack}
                />

                {isLessonLoading && (
                  <View style={styles.aiPanel}>
                    <ActivityIndicator size="large" color={colors.purple} />
                    <AppText variant="bodySmall">
                      {locale === 'ru' ? 'Загружаю исследование...' : 'Loading exploration...'}
                    </AppText>
                  </View>
                )}

                {[1, 2, 3, 4, 5, 9].includes(index) && (
                  <View style={styles.sceneBlock}>
                    <View style={styles.sceneSurface}>
                      <CurioScene name={scene} />
                    </View>
                    <AppText variant="meta" color="muted" style={styles.sceneCaption}>
                      {scene === 'temperature'
                        ? copy.sceneHeat
                        : scene === 'structure'
                        ? copy.sceneStructure
                        : scene === 'decentralized'
                        ? copy.sceneDecentralized
                        : scene === 'cycle'
                        ? copy.sceneCycle
                        : scene === 'connection'
                        ? copy.sceneConnection
                        : copy.sceneFlow}
                    </AppText>
                  </View>
                )}

                <View style={styles.eyebrowRow}>
                  <View
                    style={[
                      styles.miniMark,
                      { backgroundColor: accentMap[accent] },
                    ]}
                  />
                  <AppText variant="label">{step.eyebrow}</AppText>
                </View>

                <AppText
                  variant={index === 0 ? 'display' : 'headline'}
                  serif={index === 0}
                  style={styles.heading}
                >
                  {step.title}
                </AppText>

                <View
                  style={[
                    styles.bodyStack,
                    kind === 'summary' && styles.summaryBox,
                    kind === 'note' && styles.noteBox,
                  ]}
                >
                  {step.body.map((paragraph: string, paragraphIndex: number) => (
                    <AppText key={paragraphIndex} variant="body">
                      {paragraph}
                    </AppText>
                  ))}
                </View>

                {kind === 'recall' && (
                  <>
                    <View style={styles.recallHint}>
                      <CurioIcon name="bulb" size={40} color={colors.ink} accent={colors.yellow} />
                      <AppText variant="bodySmall">{copy.ideaNotTerms}</AppText>
                    </View>

                    {canUseMicrophone && (
                      <View style={styles.voicePanel}>
                        <AppText variant="label">
                          {locale === 'ru' ? 'Ответ голосом' : 'Answer by voice'}
                        </AppText>
                        <PrimaryButton
                          label={
                            isRecording
                              ? locale === 'ru'
                                ? 'Остановить запись'
                                : 'Stop recording'
                              : isTranscribing
                              ? locale === 'ru'
                                ? 'Расшифровываю...'
                                : 'Transcribing...'
                              : locale === 'ru'
                              ? 'Записать ответ'
                              : 'Record answer'
                          }
                          onPress={isRecording ? stopRecording : startRecording}
                          accent={isRecording ? 'orange' : 'purple'}
                          disabled={isTranscribing}
                        />
                        {voiceError && (
                          <AppText variant="bodySmall" color="muted">
                            {voiceError}
                          </AppText>
                        )}
                      </View>
                    )}

                    <TextInput
                      accessibilityLabel={copy.answerPlaceholder}
                      multiline
                      value={answer}
                      onChangeText={(value) => {
                        setAnswer(value);
                        setEvaluation(null);
                        setEvaluationError(null);
                      }}
                      placeholder={copy.answerPlaceholder}
                      placeholderTextColor={colors.muted}
                      maxLength={3000}
                      style={[
                        styles.input,
                        {
                          fontSize: Math.round(22 * textScale),
                          lineHeight: Math.round(33 * textScale),
                        },
                      ]}
                    />

                    {transcriptNeedsConfirmation && (
                      <View style={styles.transcriptPanel}>
                        <AppText variant="title">
                          {locale === 'ru' ? 'Проверьте расшифровку' : 'Review the transcript'}
                        </AppText>
                        <AppText variant="bodySmall" color="muted">
                          {locale === 'ru'
                            ? 'Исправьте текст, если нужно, и подтвердите его перед проверкой понимания.'
                            : 'Edit the text if needed, then confirm it before evaluation.'}
                        </AppText>
                        <PrimaryButton
                          label={locale === 'ru' ? 'Подтвердить текст' : 'Confirm transcript'}
                          onPress={() => {
                            setTranscriptNeedsConfirmation(false);
                            setEvaluationError(null);
                          }}
                          accent="green"
                        />
                      </View>
                    )}

                    {isEvaluating && (
                      <View style={styles.aiPanel}>
                        <ActivityIndicator size="large" color={colors.purple} />
                        <AppText variant="bodySmall">{copy.checking}</AppText>
                      </View>
                    )}

                    {evaluationError && (
                      <View style={styles.errorPanel}>
                        <CurioIcon name="bulb" size={42} color={colors.ink} accent={colors.yellow} />
                        <AppText variant="bodySmall">{evaluationError}</AppText>
                      </View>
                    )}

                    {evaluation && (
                      <View style={styles.feedbackPanel}>
                        <View style={styles.feedbackHeader}>
                          <CurioIcon
                            name={
                              evaluation.status === 'understood'
                                ? 'bulb'
                                : 'network'
                            }
                            size={48}
                            color={colors.ink}
                            accent={
                              evaluation.status === 'understood'
                                ? colors.green
                                : colors.purple
                            }
                          />
                          <View style={styles.feedbackTitle}>
                            <AppText variant="title">
                              {evaluation.feedback.title}
                            </AppText>
                            <AppText variant="bodySmall">
                              {evaluation.feedback.summary}
                            </AppText>
                          </View>
                        </View>

                        {evaluation.feedback.strengths?.length > 0 && (
                          <View style={styles.feedbackSection}>
                            <AppText variant="label">
                              {locale === 'ru'
                                ? 'Что уже понятно'
                                : 'What is already clear'}
                            </AppText>
                            {evaluation.feedback.strengths.map(
                              (item: string, itemIndex: number) => (
                                <AppText key={itemIndex} variant="bodySmall">
                                  • {item}
                                </AppText>
                              )
                            )}
                          </View>
                        )}

                        {evaluation.feedback.next?.length > 0 && (
                          <View style={styles.feedbackSection}>
                            <AppText variant="label">
                              {locale === 'ru'
                                ? 'Что добавить'
                                : 'What to add'}
                            </AppText>
                            {evaluation.feedback.next.map(
                              (item: string, itemIndex: number) => (
                                <AppText key={itemIndex} variant="bodySmall">
                                  • {item}
                                </AppText>
                              )
                            )}
                          </View>
                        )}

                        {evaluation.feedback.corrections?.length > 0 && (
                          <View style={styles.feedbackSection}>
                            <AppText variant="label">{copy.correctionTitle}</AppText>
                            {evaluation.feedback.corrections.map(
                              (item: string, itemIndex: number) => (
                                <AppText key={itemIndex} variant="bodySmall">
                                  • {item}
                                </AppText>
                              )
                            )}
                          </View>
                        )}

                        <View style={styles.feedbackActions}>
                          {evaluation.status === 'understood' ? (
                            <PrimaryButton
                              label={copy.continue}
                              onPress={continueAfterEvaluation}
                              accent="green"
                            />
                          ) : (
                            <>
                              <PrimaryButton
                                label={copy.retry}
                                onPress={retryAnswer}
                                accent="purple"
                              />
                              <PrimaryButton
                                label={copy.reviewExplanation}
                                onPress={reviewExplanation}
                                secondary
                              />
                              <Pressable
                                accessibilityRole="button"
                                onPress={continueAfterEvaluation}
                                style={styles.textAction}
                              >
                                <AppText variant="label" color="muted">
                                  {copy.continueAnyway}
                                </AppText>
                              </Pressable>
                            </>
                          )}
                        </View>
                      </View>
                    )}

                    {!evaluation && !isEvaluating && (
                      <View style={styles.actions}>
                        <PrimaryButton
                          label={copy.checkAnswer}
                          onPress={evaluateAnswer}
                          accent="purple"
                        />
                        <Pressable
                          accessibilityRole="button"
                          onPress={continueAfterEvaluation}
                          style={styles.textAction}
                        >
                          <AppText variant="label" color="muted">
                            {locale === 'ru'
                              ? 'Продолжить без ответа'
                              : 'Continue without answering'}
                          </AppText>
                        </Pressable>
                      </View>
                    )}
                  </>
                )}

                {kind !== 'recall' && cta && (
                  <View style={styles.actions}>
                    <PrimaryButton
                      label={cta}
                      onPress={goNext}
                      accent={accent}
                    />
                  </View>
                )}

                {kind === 'complete' && (
                  <View style={styles.actions}>
                    <PrimaryButton
                      label={copy.topics}
                      onPress={finishAndHome}
                      accent="green"
                    />
                  </View>
                )}
              </>
            )}
          </View>
        </ScrollView>
        {screen !== 'lesson' && (
          <BottomNavigation
            locale={locale}
            screen={screen}
            onHome={goHome}
            onExplore={goExplore}
          />
        )}
      </SafeAreaView>
    </AppTextScaleProvider>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.canvas,
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.canvas,
  },
  page: {
    minHeight: '100%',
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
    paddingBottom: 132,
  },
  shell: {
    width: '100%',
    maxWidth: 760,
    alignSelf: 'center',
  },
  bottomNavWrap: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.sm,
    paddingBottom: spacing.base,
    backgroundColor: colors.canvas,
  },
  bottomNav: {
    width: '100%',
    maxWidth: 760,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    backgroundColor: colors.surface,
    borderWidth: 1.5,
    borderColor: colors.hairline,
    borderRadius: 24,
    paddingHorizontal: spacing.sm,
    paddingTop: spacing.sm,
    paddingBottom: 6,
  },
  bottomNavItem: {
    flex: 1,
    minHeight: 66,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
    borderRadius: 16,
    position: 'relative',
  },
  bottomNavItemActive: {
    backgroundColor: '#FFF8F3',
  },
  bottomNavItemDisabled: {
    opacity: 0.38,
  },
  bottomNavIndicator: {
    position: 'absolute',
    bottom: 0,
    width: 34,
    height: 4,
    borderRadius: radius.pill,
    backgroundColor: colors.orange,
  },
  topbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: spacing.md,
    marginBottom: spacing.xl,
  },
  brand: {
    flexDirection: 'row',
    gap: spacing.sm,
    alignItems: 'center',
    minHeight: 52,
  },
  topbarActions: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  segmented: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: colors.ink,
    borderRadius: radius.pill,
    backgroundColor: colors.surface,
    padding: 4,
  },
  segmentedButton: {
    minWidth: 58,
    minHeight: 56,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius.pill,
  },
  segmentedButtonActive: {
    backgroundColor: colors.yellow,
  },
  textSizeControl: {
    flexDirection: 'row',
    backgroundColor: colors.surface,
    borderWidth: 2,
    borderColor: colors.ink,
    borderRadius: radius.pill,
    overflow: 'hidden',
  },
  textSizeButton: {
    minWidth: 54,
    minHeight: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
  controlDisabled: {
    opacity: 0.35,
  },
  homeIntro: {
    gap: spacing.md,
    marginBottom: spacing.lg,
  },
  resumeCard: {
    gap: spacing.base,
    padding: spacing.lg,
    marginBottom: spacing.lg,
    backgroundColor: '#EEF8F2',
    borderWidth: 2,
    borderColor: colors.ink,
    borderRadius: radius.surface,
  },
  resumeCopy: {
    gap: spacing.xs,
  },
  honestyNote: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    padding: spacing.base,
    marginBottom: spacing.lg,
    backgroundColor: colors.warningSoft,
    borderRadius: radius.surface,
    borderWidth: 1.5,
    borderColor: colors.hairline,
  },
  honestyCopy: {
    flex: 1,
  },
  topicList: {
    gap: spacing.base,
  },
  topicCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing.base,
    padding: spacing.lg,
    backgroundColor: colors.surface,
    borderWidth: 2,
    borderColor: colors.ink,
    borderRadius: radius.surface,
  },
  topicVisual: {
    width: 88,
    height: 88,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  categoryVisual: {
    width: 108,
    height: 108,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  topicCopy: {
    flex: 1,
    gap: spacing.sm,
  },
  topicHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  statusPill: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: radius.pill,
    borderWidth: 1.5,
    borderColor: colors.ink,
  },
  statusReady: {
    backgroundColor: '#E9F8EF',
  },
  statusSoon: {
    backgroundColor: colors.surfaceSoft,
  },
  firstLessonRow: {
    gap: 2,
    marginTop: spacing.xs,
  },
  categoryHero: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing.lg,
    marginBottom: spacing.xl,
  },
  categoryHeroCopy: {
    flex: 1,
    gap: spacing.sm,
  },
  categorySectionHeader: {
    gap: spacing.sm,
    marginBottom: spacing.lg,
  },
  questionList: {
    gap: spacing.base,
    marginBottom: spacing.xxl,
  },
  questionCard: {
    gap: spacing.base,
    padding: spacing.lg,
    backgroundColor: colors.surface,
    borderWidth: 2,
    borderColor: colors.ink,
    borderRadius: radius.surface,
  },
  questionCopy: {
    gap: spacing.sm,
  },
  catalogNotice: {
    marginTop: spacing.lg,
    padding: spacing.base,
    borderLeftWidth: 4,
    borderLeftColor: colors.orange,
    backgroundColor: colors.warningSoft,
  },
  progressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    marginBottom: spacing.md,
  },
  backButton: {
    minWidth: 86,
    minHeight: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    backgroundColor: colors.surface,
    borderWidth: 2,
    borderColor: colors.ink,
    borderRadius: radius.control,
  },
  progressInfo: {
    flex: 1,
    gap: spacing.xs,
  },
  progressTrack: {
    height: 10,
    backgroundColor: colors.surfaceSoft,
    borderRadius: radius.pill,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.green,
    borderRadius: radius.pill,
  },
  sceneBlock: {
    marginBottom: spacing.lg,
  },
  sceneSurface: {
    backgroundColor: colors.surface,
    borderWidth: 1.5,
    borderColor: colors.hairline,
    borderRadius: 28,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.base,
  },
  sceneCaption: {
    textAlign: 'center',
    marginTop: spacing.sm,
  },
  eyebrowRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    marginTop: spacing.sm,
  },
  miniMark: {
    width: 18,
    height: 18,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: colors.ink,
  },
  heading: {
    marginTop: spacing.md,
    marginBottom: spacing.lg,
  },
  bodyStack: {
    gap: spacing.md,
  },
  summaryBox: {
    padding: spacing.lg,
    backgroundColor: '#EEF8F2',
    borderLeftWidth: 5,
    borderLeftColor: colors.green,
    borderRadius: radius.control,
  },
  noteBox: {
    padding: spacing.lg,
    backgroundColor: colors.warmNote,
    borderLeftWidth: 5,
    borderLeftColor: colors.orange,
    borderRadius: radius.control,
  },
  button: {
    minHeight: 66,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.lg,
    borderWidth: 2,
    borderColor: colors.ink,
    borderRadius: radius.control,
  },
  secondaryButton: {
    backgroundColor: colors.surface,
  },
  actions: {
    gap: spacing.md,
    marginTop: spacing.xl,
    marginBottom: spacing.xxl,
  },
  recallHint: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    marginTop: spacing.lg,
    paddingVertical: spacing.md,
  },
  input: {
    minHeight: 180,
    marginTop: spacing.md,
    padding: spacing.lg,
    backgroundColor: colors.surface,
    borderWidth: 2,
    borderColor: colors.ink,
    borderRadius: radius.surface,
    fontFamily: 'GolosText_400Regular',
    color: colors.text,
    textAlignVertical: 'top',
  },
  voicePanel: {
    marginTop: spacing.lg,
    gap: spacing.md,
    padding: spacing.lg,
    backgroundColor: colors.surface,
    borderWidth: 2,
    borderColor: colors.ink,
    borderRadius: radius.surface,
  },
  transcriptPanel: {
    marginTop: spacing.lg,
    gap: spacing.md,
    padding: spacing.lg,
    backgroundColor: '#EEF8F2',
    borderLeftWidth: 5,
    borderLeftColor: colors.green,
    borderRadius: radius.control,
  },
  aiPanel: {
    marginTop: spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.base,
    padding: spacing.lg,
    backgroundColor: colors.surface,
    borderLeftWidth: 5,
    borderLeftColor: colors.purple,
  },
  errorPanel: {
    marginTop: spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.base,
    padding: spacing.lg,
    backgroundColor: colors.warningSoft,
    borderLeftWidth: 5,
    borderLeftColor: colors.orange,
  },
  feedbackPanel: {
    marginTop: spacing.lg,
    gap: spacing.lg,
    padding: spacing.lg,
    backgroundColor: colors.surface,
    borderWidth: 2,
    borderColor: colors.ink,
    borderRadius: radius.surface,
  },
  feedbackHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing.base,
  },
  feedbackTitle: {
    flex: 1,
    gap: spacing.sm,
  },
  feedbackSection: {
    gap: spacing.xs,
  },
  feedbackActions: {
    gap: spacing.md,
    marginTop: spacing.sm,
  },
  textAction: {
    minHeight: 56,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.base,
  },
});
