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
import { CurioIcon, CurioScene, IconShelf, type SceneName } from './src/Visuals';

type Accent = 'orange' | 'green' | 'purple' | 'blue' | 'yellow';

const accentMap: Record<Accent, string> = {
  orange: colors.orange,
  green: colors.green,
  purple: colors.purple,
  blue: colors.blue,
  yellow: colors.yellow,
};

const stepAccent: Accent[] = [
  'orange',
  'purple',
  'orange',
  'green',
  'blue',
  'purple',
  'orange',
  'purple',
  'green',
];

const stepScene: SceneName[] = [
  'mound',
  'mound',
  'mound',
  'heat',
  'cycle',
  'recall',
  'recall',
  'connection',
  'complete',
];

function LanguageSwitch({
  locale,
  onChange,
}: {
  locale: Locale;
  onChange: (locale: Locale) => void;
}) {
  return (
    <View style={styles.languageWrap}>
      {(['ru', 'en'] as Locale[]).map((item) => (
        <Pressable
          key={item}
          accessibilityRole="button"
          onPress={() => onChange(item)}
          style={[
            styles.languageButton,
            locale === item && styles.languageButtonActive,
          ]}
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
        secondary
          ? styles.secondaryButton
          : { backgroundColor: accentMap[accent] },
        { opacity: pressed ? 0.82 : 1 },
      ]}
    >
      <AppText variant="label">{label}</AppText>
    </Pressable>
  );
}

function Progress({
  current,
  total,
  onBack,
  copy,
}: {
  current: number;
  total: number;
  onBack: () => void;
  copy: typeof ui.ru;
}) {
  return (
    <View style={styles.progressRow}>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={copy.back}
        onPress={onBack}
        style={styles.back}
      >
        <AppText variant="title">‹</AppText>
      </Pressable>
      <View style={styles.progressTrack}>
        <View
          style={[
            styles.progressFill,
            { width: `${Math.max(8, (current / total) * 100)}%` },
          ]}
        />
      </View>
      <AppText variant="meta" color="muted">
        {current} {copy.progressOf} {total}
      </AppText>
    </View>
  );
}

function AudioDock({ copy }: { copy: typeof ui.ru }) {
  const [playing, setPlaying] = useState(false);
  return (
    <View style={styles.audioDock}>
      <View style={styles.iconBubble}>
        <CurioIcon name="audio" size={40} fill={colors.green} />
      </View>
      <View style={styles.audioText}>
        <AppText variant="label">{copy.audio}</AppText>
        <AppText variant="meta" color="muted">
          00:00 / 02:10 · 1x
        </AppText>
      </View>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={playing ? copy.pause : copy.listen}
        onPress={() => setPlaying((value) => !value)}
        style={styles.playButton}
      >
        <AppText variant="title">{playing ? 'Ⅱ' : '▶'}</AppText>
      </Pressable>
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
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState('');
  const copy = ui[locale];
  const step = copy.steps[index];
  const accent = stepAccent[index] ?? 'orange';
  const scene = stepScene[index] ?? 'mound';
  const kind = step?.kind ?? 'intro';

  const headingVariant = useMemo(
    () => (index === 0 ? 'display' : 'headline') as const,
    [index]
  );

  if (!golosLoaded || !literataLoaded || !step) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color={colors.orange} />
      </View>
    );
  }

  const next = () => setIndex((value) => Math.min(value + 1, copy.steps.length - 1));
  const back = () => setIndex((value) => Math.max(value - 1, 0));

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.page} keyboardShouldPersistTaps="handled">
        <View style={styles.shell}>
          <View style={styles.topbar}>
            <View style={styles.brand}>
              <View style={styles.brandDot} />
              <AppText variant="title">Curio</AppText>
            </View>
            <LanguageSwitch locale={locale} onChange={setLocale} />
          </View>

          {index > 0 && (
            <Progress
              current={index}
              total={copy.steps.length - 1}
              onBack={back}
              copy={copy}
            />
          )}

          <CurioScene name={scene} />

          <View style={styles.eyebrowRow}>
            <View style={[styles.miniMark, { backgroundColor: accentMap[accent] }]} />
            <AppText variant="label" style={{ color: colors.ink }}>
              {step.eyebrow}
            </AppText>
          </View>

          <AppText
            variant={headingVariant}
            serif={index === 0}
            style={styles.heading}
          >
            {step.title}
          </AppText>

          <View style={styles.bodyStack}>
            {step.body.map((paragraph, i) => (
              <AppText key={i} variant="body">
                {paragraph}
              </AppText>
            ))}
          </View>

          {index === 0 && (
            <>
              <IconShelf />
              <View style={styles.discoveryNote}>
                <CurioIcon name="bulb" size={48} fill={colors.yellow} />
                <AppText variant="bodySmall">
                  {locale === 'ru'
                    ? 'Каждая тема получает собственный визуальный мир: идеи, механизмы, связи, исследования и аудио.'
                    : 'Every topic gets its own visual world: ideas, mechanisms, connections, research, and audio.'}
                </AppText>
              </View>
            </>
          )}

          {kind === 'hypothesis' && (
            <TextInput
              accessibilityLabel={copy.hypothesisPlaceholder}
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

          {(kind === 'learn' || kind === 'note') && <AudioDock copy={copy} />}

          {kind === 'recall' && (
            <>
              <View style={styles.voicePanel}>
                <CurioIcon name="brain" size={58} fill={colors.purple} />
                <View style={styles.voiceText}>
                  <AppText variant="title">{copy.voiceAnswer}</AppText>
                  <AppText variant="bodySmall" color="muted">
                    {copy.voiceComing}
                  </AppText>
                </View>
                <View style={styles.micCircle}>
                  <AppText variant="headline">●</AppText>
                </View>
              </View>
              <TextInput
                accessibilityLabel={copy.writeInstead}
                multiline
                value={answer}
                onChangeText={setAnswer}
                placeholder={copy.writeInstead}
                placeholderTextColor={colors.muted}
                style={styles.input}
              />
            </>
          )}

          {kind === 'feedback' && (
            <View style={styles.feedback}>
              <View style={styles.feedbackItem}>
                <CurioIcon name="bulb" size={46} fill={colors.green} />
                <View style={styles.feedbackCopy}>
                  <AppText variant="label">{copy.correctSoFar}</AppText>
                  <AppText variant="bodySmall">{copy.feedbackGood}</AppText>
                </View>
              </View>
              <View style={styles.feedbackDivider} />
              <View style={styles.feedbackItem}>
                <CurioIcon name="network" size={46} fill={colors.orange} />
                <View style={styles.feedbackCopy}>
                  <AppText variant="label">{copy.addNext}</AppText>
                  <AppText variant="bodySmall">{copy.feedbackAdd}</AppText>
                </View>
              </View>
            </View>
          )}

          {step.cta && (
            <View style={styles.actions}>
              <Button label={step.cta} onPress={next} accent={accent} />
              {kind === 'recall' && (
                <Button label={copy.answerLater} onPress={next} secondary />
              )}
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.canvas },
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
  shell: { width: '100%', maxWidth: 760, alignSelf: 'center' },
  topbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.lg,
  },
  brand: { flexDirection: 'row', gap: spacing.sm, alignItems: 'center' },
  brandDot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: colors.orange,
    borderWidth: 2,
    borderColor: colors.ink,
  },
  languageWrap: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: colors.ink,
    borderRadius: radius.pill,
    backgroundColor: colors.surface,
    padding: 4,
  },
  languageButton: {
    minWidth: 58,
    minHeight: 44,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius.pill,
  },
  languageButtonActive: { backgroundColor: colors.yellow },
  progressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    marginBottom: spacing.lg,
  },
  back: {
    width: 56,
    height: 56,
    borderRadius: radius.control,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.surface,
    borderWidth: 2,
    borderColor: colors.ink,
  },
  progressTrack: {
    flex: 1,
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
  eyebrowRow: {
    flexDirection: 'row',
    gap: spacing.sm,
    alignItems: 'center',
    marginTop: spacing.sm,
  },
  miniMark: {
    width: 18,
    height: 18,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: colors.ink,
    transform: [{ rotate: '-5deg' }],
  },
  heading: { marginTop: spacing.md, marginBottom: spacing.lg },
  bodyStack: { gap: spacing.md },
  button: {
    minHeight: 64,
    borderRadius: radius.control,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.lg,
    borderWidth: 2,
    borderColor: colors.ink,
  },
  secondaryButton: { backgroundColor: colors.surface },
  actions: { gap: spacing.md, marginTop: spacing.xl, marginBottom: spacing.xxl },
  discoveryNote: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.base,
    padding: spacing.base,
    borderWidth: 2,
    borderColor: colors.ink,
    borderRadius: radius.surface,
    backgroundColor: colors.surface,
  },
  audioDock: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing.xl,
    padding: spacing.base,
    borderRadius: radius.surface,
    borderWidth: 2,
    borderColor: colors.ink,
    backgroundColor: colors.surface,
    gap: spacing.md,
  },
  iconBubble: {
    width: 58,
    height: 58,
    borderRadius: 18,
    backgroundColor: colors.surfaceSoft,
    alignItems: 'center',
    justifyContent: 'center',
  },
  audioText: { gap: 2, flex: 1 },
  playButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.green,
    borderWidth: 2,
    borderColor: colors.ink,
  },
  input: {
    minHeight: 150,
    marginTop: spacing.lg,
    padding: spacing.base,
    borderRadius: radius.surface,
    borderWidth: 2,
    borderColor: colors.ink,
    backgroundColor: colors.surface,
    fontFamily: 'GolosText_400Regular',
    fontSize: 21,
    lineHeight: 31,
    color: colors.text,
    textAlignVertical: 'top',
  },
  note: {
    marginTop: spacing.lg,
    flexDirection: 'row',
    gap: spacing.base,
    alignItems: 'center',
    padding: spacing.lg,
    borderRadius: radius.surface,
    backgroundColor: colors.warmNote,
    borderWidth: 2,
    borderColor: colors.orange,
  },
  noteCopy: { flex: 1, gap: spacing.sm },
  voicePanel: {
    marginTop: spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.base,
    padding: spacing.lg,
    borderRadius: radius.surface,
    backgroundColor: colors.surface,
    borderWidth: 2,
    borderColor: colors.purple,
  },
  voiceText: { flex: 1, gap: spacing.xs },
  micCircle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: colors.green,
    borderWidth: 3,
    borderColor: colors.ink,
    alignItems: 'center',
    justifyContent: 'center',
  },
  feedback: {
    marginTop: spacing.lg,
    gap: spacing.base,
    padding: spacing.lg,
    borderRadius: radius.surface,
    backgroundColor: colors.warningSoft,
    borderWidth: 3,
    borderColor: colors.orange,
  },
  feedbackItem: {
    flexDirection: 'row',
    gap: spacing.base,
    alignItems: 'center',
  },
  feedbackCopy: { flex: 1, gap: spacing.xs },
  feedbackDivider: {
    height: 1,
    backgroundColor: colors.hairline,
    marginVertical: spacing.sm,
  },
});
