import { useMemo, useState } from 'react';
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
import { AppText } from './src/AppText';
import { colors, radius, spacing } from './src/theme';
import { ui, type Locale } from './src/i18n';
import { CurioIcon, CurioScene, type SceneName } from './src/Visuals';
import { topics, type Topic } from './src/topics';

type Accent = 'orange' | 'green' | 'purple' | 'blue' | 'yellow';
type Screen = 'home' | 'lesson';

const accentMap: Record<Accent, string> = {
  orange: colors.orange,
  green: colors.green,
  purple: colors.purple,
  blue: colors.blue,
  yellow: colors.yellow,
};

const stepAccent: Accent[] = ['orange','purple','orange','green','blue','purple','orange','purple','green'];
const stepScene: SceneName[] = ['mound','mound','mound','heat','cycle','recall','recall','connection','complete'];

function LanguageSwitch({ locale, onChange }: { locale: Locale; onChange: (locale: Locale) => void }) {
  return (
    <View style={styles.languageWrap}>
      {(['ru', 'en'] as Locale[]).map((item) => (
        <Pressable
          key={item}
          accessibilityRole="button"
          onPress={() => onChange(item)}
          style={[styles.languageButton, locale === item && styles.languageButtonActive]}
        >
          <AppText variant="label">{item.toUpperCase()}</AppText>
        </Pressable>
      ))}
    </View>
  );
}

function Button({
  label,
  onPress,
  accent = 'orange',
  secondary = false,
}: {
  label: string;
  onPress: () => void;
  accent?: Accent;
  secondary?: boolean;
}) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        secondary ? styles.secondaryButton : { backgroundColor: accentMap[accent] },
        { opacity: pressed ? 0.82 : 1 },
      ]}
    >
      <AppText variant="label">{label}</AppText>
    </Pressable>
  );
}

function Topbar({ locale, onLocale, onHome, showHome }: {
  locale: Locale;
  onLocale: (locale: Locale) => void;
  onHome: () => void;
  showHome: boolean;
}) {
  return (
    <View style={styles.topbar}>
      <Pressable onPress={onHome} style={styles.brand}>
        <View style={styles.brandDot} />
        <AppText variant="title">Curio</AppText>
      </Pressable>
      <View style={styles.topbarActions}>
        {showHome && (
          <Pressable onPress={onHome} style={styles.topbarButton}>
            <AppText variant="label">{locale === 'ru' ? 'Темы' : 'Topics'}</AppText>
          </Pressable>
        )}
        <LanguageSwitch locale={locale} onChange={onLocale} />
      </View>
    </View>
  );
}

function TopicCard({ topic, locale, onPress }: { topic: Topic; locale: Locale; onPress: () => void }) {
  const copy = topic[locale];
  const color = accentMap[topic.color];
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.topicCard, { opacity: pressed ? 0.82 : 1 }]}
    >
      <View style={[styles.topicIcon, { backgroundColor: color }]}>
        <CurioIcon name={topic.icon} size={48} fill={colors.surface} />
      </View>
      <View style={styles.topicCopy}>
        <View style={styles.topicTitleRow}>
          <AppText variant="title">{copy.title}</AppText>
          <View style={[styles.statusPill, { backgroundColor: topic.ready ? colors.green : colors.surfaceSoft }]}>
            <AppText variant="meta">
              {topic.ready ? (locale === 'ru' ? 'Доступно' : 'Ready') : (locale === 'ru' ? 'Скоро' : 'Soon')}
            </AppText>
          </View>
        </View>
        <AppText variant="bodySmall" color="muted">{copy.description}</AppText>
        <AppText variant="label">{copy.first}</AppText>
      </View>
    </Pressable>
  );
}

function HomeScreen({ locale, onSelect }: { locale: Locale; onSelect: (topic: Topic) => void }) {
  const [message, setMessage] = useState<string | null>(null);

  const choose = (topic: Topic) => {
    if (topic.ready) {
      setMessage(null);
      onSelect(topic);
      return;
    }
    setMessage(
      locale === 'ru'
        ? 'Тема уже есть в каталоге, но первый полноценный разбор ещё не построен.'
        : 'This topic is already in the catalog, but its first full immersion is not built yet.'
    );
  };

  return (
    <>
      <View style={styles.homeHero}>
        <CurioIcon name="book" size={72} fill={colors.orange} />
        <View style={styles.homeHeroCopy}>
          <AppText variant="display" serif>
            {locale === 'ru' ? 'Что вам интересно сегодня?' : 'What are you curious about today?'}
          </AppText>
          <AppText variant="body" color="muted">
            {locale === 'ru'
              ? 'Сначала выбираем область. Потом Curio предлагает вопрос или явление для исследования.'
              : 'Choose a field first. Then Curio suggests a question or phenomenon to explore.'}
          </AppText>
        </View>
      </View>

      <View style={styles.topicGrid}>
        {topics.map((topic) => (
          <TopicCard key={topic.id} topic={topic} locale={locale} onPress={() => choose(topic)} />
        ))}
      </View>

      {message && (
        <View style={styles.catalogNotice}>
          <CurioIcon name="bulb" size={44} fill={colors.yellow} />
          <AppText variant="bodySmall">{message}</AppText>
        </View>
      )}
    </>
  );
}

function Progress({ current, total, onBack, locale }: { current: number; total: number; onBack: () => void; locale: Locale }) {
  return (
    <View style={styles.progressRow}>
      <Pressable accessibilityRole="button" onPress={onBack} style={styles.back}>
        <AppText variant="title">‹</AppText>
      </Pressable>
      <View style={styles.progressTrack}>
        <View style={[styles.progressFill, { width: `${Math.max(8, (current / total) * 100)}%` }]} />
      </View>
      <AppText variant="meta" color="muted">{current} {locale === 'ru' ? 'из' : 'of'} {total}</AppText>
    </View>
  );
}

function AudioDock({ locale }: { locale: Locale }) {
  const [playing, setPlaying] = useState(false);
  return (
    <View style={styles.audioDock}>
      <View style={styles.iconBubble}>
        <CurioIcon name="audio" size={40} fill={colors.green} />
      </View>
      <View style={styles.audioText}>
        <AppText variant="label">{locale === 'ru' ? 'Аудио' : 'Audio'}</AppText>
        <AppText variant="meta" color="muted">00:00 / 02:10 · 1x</AppText>
      </View>
      <Pressable onPress={() => setPlaying((value) => !value)} style={styles.playButton}>
        <AppText variant="title">{playing ? 'Ⅱ' : '▶'}</AppText>
      </Pressable>
    </View>
  );
}

export default function App() {
  const [golosLoaded] = useGolosFonts({ GolosText_400Regular, GolosText_600SemiBold, GolosText_700Bold });
  const [literataLoaded] = useLiterataFonts({ Literata_600SemiBold });
  const [locale, setLocale] = useState<Locale>('ru');
  const [screen, setScreen] = useState<Screen>('home');
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState('');
  const [evalNotice, setEvalNotice] = useState(false);

  const copy = ui[locale];
  const step = copy.steps[index];
  const accent = stepAccent[index] ?? 'orange';
  const scene = stepScene[index] ?? 'mound';
  const kind = step?.kind ?? 'intro';
  const headingVariant = useMemo(() => (index === 0 ? 'display' : 'headline') as const, [index]);

  if (!golosLoaded || !literataLoaded) {
    return <View style={styles.loading}><ActivityIndicator size="large" color={colors.orange} /></View>;
  }

  const goHome = () => {
    setScreen('home');
    setIndex(0);
    setAnswer('');
    setEvalNotice(false);
  };

  const startTopic = (_topic: Topic) => {
    setScreen('lesson');
    setIndex(0);
    setAnswer('');
    setEvalNotice(false);
  };

  const next = () => {
    if (kind === 'recall') {
      setEvalNotice(true);
      return;
    }
    setIndex((value) => Math.min(value + 1, copy.steps.length - 1));
  };

  const skipFeedback = () => {
    setEvalNotice(false);
    setIndex((value) => Math.min(value + 2, copy.steps.length - 1));
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.page} keyboardShouldPersistTaps="handled">
        <View style={styles.shell}>
          <Topbar locale={locale} onLocale={setLocale} onHome={goHome} showHome={screen === 'lesson'} />

          {screen === 'home' ? (
            <HomeScreen locale={locale} onSelect={startTopic} />
          ) : (
            <>
              {index > 0 && <Progress current={index} total={copy.steps.length - 1} onBack={() => setIndex((v) => Math.max(v - 1, 0))} locale={locale} />}

              <CurioScene name={scene} />

              <View style={styles.eyebrowRow}>
                <View style={[styles.miniMark, { backgroundColor: accentMap[accent] }]} />
                <AppText variant="label">{step.eyebrow}</AppText>
              </View>

              <AppText variant={headingVariant} serif={index === 0} style={styles.heading}>
                {step.title}
              </AppText>

              <View style={styles.bodyStack}>
                {step.body.map((paragraph, i) => <AppText key={i} variant="body">{paragraph}</AppText>)}
              </View>

              {kind === 'hypothesis' && (
                <TextInput
                  multiline
                  placeholder={copy.hypothesisPlaceholder}
                  placeholderTextColor={colors.muted}
                  style={styles.input}
                />
              )}

              {kind === 'note' && (
                <View style={styles.note}>
                  <CurioIcon name="microscope" size={52} fill={colors.orange} />
                  <View style={styles.noteCopy}>
                    <AppText variant="label">{copy.important}</AppText>
                    <AppText variant="bodySmall">{copy.scienceNote}</AppText>
                  </View>
                </View>
              )}

              {(kind === 'learn' || kind === 'note') && <AudioDock locale={locale} />}

              {kind === 'recall' && (
                <>
                  <View style={styles.voicePanel}>
                    <CurioIcon name="brain" size={58} fill={colors.purple} />
                    <View style={styles.voiceText}>
                      <AppText variant="title">{copy.voiceAnswer}</AppText>
                      <AppText variant="bodySmall" color="muted">{copy.voiceComing}</AppText>
                    </View>
                  </View>
                  <TextInput
                    multiline
                    value={answer}
                    onChangeText={(value) => { setAnswer(value); setEvalNotice(false); }}
                    placeholder={copy.writeInstead}
                    placeholderTextColor={colors.muted}
                    style={styles.input}
                  />

                  {evalNotice && (
                    <View style={styles.aiNotice}>
                      <CurioIcon name="network" size={48} fill={colors.purple} />
                      <View style={styles.noteCopy}>
                        <AppText variant="label">
                          {locale === 'ru' ? 'AI-проверка ещё не подключена' : 'AI evaluation is not connected yet'}
                        </AppText>
                        <AppText variant="bodySmall">
                          {locale === 'ru'
                            ? 'Сейчас Curio не анализирует этот текст. Мы не будем показывать фиктивную обратную связь.'
                            : 'Curio is not analyzing this text yet. We will not show fake personalized feedback.'}
                        </AppText>
                        <Button
                          label={locale === 'ru' ? 'Продолжить без проверки' : 'Continue without evaluation'}
                          onPress={skipFeedback}
                          secondary
                        />
                      </View>
                    </View>
                  )}
                </>
              )}

              {step.cta && !evalNotice && (
                <View style={styles.actions}>
                  <Button label={kind === 'recall' ? (locale === 'ru' ? 'Проверить ответ' : 'Check my answer') : step.cta} onPress={next} accent={accent} />
                  {kind === 'recall' && (
                    <Button
                      label={copy.answerLater}
                      onPress={skipFeedback}
                      secondary
                    />
                  )}
                </View>
              )}
            </>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.canvas },
  loading: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.canvas },
  page: { minHeight: '100%', paddingHorizontal: spacing.lg, paddingVertical: spacing.lg },
  shell: { width: '100%', maxWidth: 820, alignSelf: 'center' },
  topbar: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: spacing.xl, gap: spacing.md },
  topbarActions: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm },
  topbarButton: { minHeight: 48, paddingHorizontal: spacing.base, borderWidth: 2, borderColor: colors.ink, borderRadius: radius.pill, justifyContent: 'center', backgroundColor: colors.surface },
  brand: { flexDirection: 'row', gap: spacing.sm, alignItems: 'center' },
  brandDot: { width: 20, height: 20, borderRadius: 10, backgroundColor: colors.orange, borderWidth: 2, borderColor: colors.ink },
  languageWrap: { flexDirection: 'row', borderWidth: 2, borderColor: colors.ink, borderRadius: radius.pill, backgroundColor: colors.surface, padding: 4 },
  languageButton: { minWidth: 58, minHeight: 44, alignItems: 'center', justifyContent: 'center', borderRadius: radius.pill },
  languageButtonActive: { backgroundColor: colors.yellow },
  homeHero: { flexDirection: 'row', alignItems: 'center', gap: spacing.lg, marginBottom: spacing.xl },
  homeHeroCopy: { flex: 1, gap: spacing.md },
  topicGrid: { gap: spacing.base },
  topicCard: { flexDirection: 'row', gap: spacing.base, alignItems: 'center', padding: spacing.lg, backgroundColor: colors.surface, borderWidth: 2, borderColor: colors.ink, borderRadius: radius.surface },
  topicIcon: { width: 76, height: 76, borderRadius: 22, borderWidth: 2, borderColor: colors.ink, alignItems: 'center', justifyContent: 'center' },
  topicCopy: { flex: 1, gap: spacing.sm },
  topicTitleRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: spacing.md, flexWrap: 'wrap' },
  statusPill: { paddingHorizontal: 12, paddingVertical: 6, borderRadius: radius.pill, borderWidth: 1.5, borderColor: colors.ink },
  catalogNotice: { marginTop: spacing.lg, flexDirection: 'row', alignItems: 'center', gap: spacing.md, padding: spacing.base, backgroundColor: colors.warningSoft, borderWidth: 2, borderColor: colors.ink, borderRadius: radius.surface },
  progressRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.md, marginBottom: spacing.lg },
  back: { width: 56, height: 56, borderRadius: radius.control, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.surface, borderWidth: 2, borderColor: colors.ink },
  progressTrack: { flex: 1, height: 10, backgroundColor: colors.surfaceSoft, borderRadius: radius.pill, overflow: 'hidden' },
  progressFill: { height: '100%', backgroundColor: colors.green, borderRadius: radius.pill },
  eyebrowRow: { flexDirection: 'row', gap: spacing.sm, alignItems: 'center', marginTop: spacing.sm },
  miniMark: { width: 18, height: 18, borderRadius: 6, borderWidth: 2, borderColor: colors.ink, transform: [{ rotate: '-5deg' }] },
  heading: { marginTop: spacing.md, marginBottom: spacing.lg },
  bodyStack: { gap: spacing.md },
  button: { minHeight: 64, borderRadius: radius.control, alignItems: 'center', justifyContent: 'center', paddingHorizontal: spacing.lg, borderWidth: 2, borderColor: colors.ink },
  secondaryButton: { backgroundColor: colors.surface },
  actions: { gap: spacing.md, marginTop: spacing.xl, marginBottom: spacing.xxl },
  audioDock: { flexDirection: 'row', alignItems: 'center', marginTop: spacing.xl, padding: spacing.base, borderRadius: radius.surface, borderWidth: 2, borderColor: colors.ink, backgroundColor: colors.surface, gap: spacing.md },
  iconBubble: { width: 58, height: 58, borderRadius: 18, backgroundColor: colors.surfaceSoft, alignItems: 'center', justifyContent: 'center' },
  audioText: { gap: 2, flex: 1 },
  playButton: { width: 64, height: 64, borderRadius: 32, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.green, borderWidth: 2, borderColor: colors.ink },
  input: { minHeight: 150, marginTop: spacing.lg, padding: spacing.base, borderRadius: radius.surface, borderWidth: 2, borderColor: colors.ink, backgroundColor: colors.surface, fontFamily: 'GolosText_400Regular', fontSize: 21, lineHeight: 31, color: colors.text, textAlignVertical: 'top' },
  note: { marginTop: spacing.lg, flexDirection: 'row', gap: spacing.base, alignItems: 'center', padding: spacing.lg, borderRadius: radius.surface, backgroundColor: colors.warmNote, borderWidth: 2, borderColor: colors.orange },
  noteCopy: { flex: 1, gap: spacing.sm },
  voicePanel: { marginTop: spacing.lg, flexDirection: 'row', alignItems: 'center', gap: spacing.base, padding: spacing.lg, borderRadius: radius.surface, backgroundColor: colors.surface, borderWidth: 2, borderColor: colors.purple },
  voiceText: { flex: 1, gap: spacing.xs },
  aiNotice: { marginTop: spacing.lg, flexDirection: 'row', alignItems: 'flex-start', gap: spacing.base, padding: spacing.lg, backgroundColor: colors.warningSoft, borderWidth: 3, borderColor: colors.purple, borderRadius: radius.surface },
});
