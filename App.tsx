import { useEffect, useState } from 'react';
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
import { CurioIcon } from './src/IconSystem';
import { CurioScene, type SceneName } from './src/Visuals';
import { topics as fallbackTopics, type Topic } from './src/topics';
import { loadApprovedTopics } from './src/contentRepository';

type Accent = 'orange' | 'green' | 'purple' | 'blue' | 'yellow';
type Screen = 'home' | 'lesson';

const accentMap: Record<Accent, string> = {
  orange: colors.orange,
  green: colors.green,
  purple: colors.purple,
  blue: colors.blue,
  yellow: colors.yellow,
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
        <View style={styles.brandDot} />
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

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled: !topic.ready }}
      disabled={!topic.ready}
      onPress={onPress}
      style={({ pressed }) => [
        styles.topicCard,
        !topic.ready && styles.topicCardDisabled,
        pressed && { opacity: 0.82 },
      ]}
    >
      <View
        style={[
          styles.topicIcon,
          { backgroundColor: accentMap[topic.color] },
        ]}
      >
        <CurioIcon name={topic.icon} size={40} color={colors.surface} accent={colors.surface} />
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
    if (topic.ready) onSelect(topic);
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
        <CurioIcon name="bulb" size={42} color={colors.ink} accent={colors.yellow} />
        <AppText variant="bodySmall">{copy.onlyOneReady}</AppText>
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
        <AppText variant="title">‹</AppText>
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
        JSON.stringify({ locale, textScale, index, answer, hasSession })
      );
    } catch {
      // Storage failure should not block the session.
    }
  }, [hydrated, locale, textScale, index, answer, hasSession]);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = locale;
    }
  }, [locale]);

  useEffect(() => {
    let cancelled = false;

    loadApprovedTopics().then((remoteTopics) => {
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
  const step = copy.steps[index];
  const kind = step.kind;
  const cta = 'cta' in step ? step.cta : undefined;
  const scene = sceneMap[index] ?? 'airflow';
  const accent = accentByStep[index] ?? 'green';
  const summaryIndex = 6;
  const connectionIndex = 9;

  const resetEvaluation = () => {
    setEvaluation(null);
    setEvaluationError(null);
    setIsEvaluating(false);
  };

  const goHome = () => {
    setScreen('home');
    resetEvaluation();
  };

  const startTopic = (_topic: Topic) => {
    setScreen('lesson');
    setIndex(0);
    setAnswer('');
    setHasSession(true);
    resetEvaluation();
  };

  const resumeLesson = () => {
    setScreen('lesson');
    resetEvaluation();
  };

  const finishAndHome = () => {
    setHasSession(false);
    setScreen('home');
    setIndex(0);
    setAnswer('');
    resetEvaluation();
  };

  const goBack = () => {
    resetEvaluation();
    if (index === 0) {
      goHome();
      return;
    }
    setIndex((value) => Math.max(0, value - 1));
  };

  const goNext = () => {
    resetEvaluation();
    setIndex((value) => Math.min(copy.steps.length - 1, value + 1));
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

  const evaluateAnswer = async () => {
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
                onSelect={startTopic}
                hasSession={hasSession}
                onResume={resumeLesson}
              />
            ) : (
              <>
                <LessonProgress
                  index={index}
                  total={copy.steps.length}
                  locale={locale}
                  onBack={goBack}
                />

                {[1, 2, 3, 4, 5, 9].includes(index) && (
                  <View style={styles.sceneBlock}>
                    <CurioScene name={scene} />
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
                  {step.body.map((paragraph, paragraphIndex) => (
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
    paddingVertical: spacing.lg,
  },
  shell: {
    width: '100%',
    maxWidth: 760,
    alignSelf: 'center',
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
  brandDot: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: colors.orange,
    borderWidth: 2,
    borderColor: colors.ink,
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
    paddingVertical: spacing.base,
    marginBottom: spacing.lg,
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
  topicIcon: {
    width: 68,
    height: 68,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: colors.ink,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  topicCardDisabled: {
    opacity: 0.55,
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
    marginBottom: spacing.sm,
  },
  sceneCaption: {
    textAlign: 'center',
    marginTop: -8,
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
