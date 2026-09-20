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
import Svg, { Circle, Path, Rect } from 'react-native-svg';
import { AppText } from './src/AppText';
import { colors, radius, spacing } from './src/theme';

type StepKind = 'intro' | 'hypothesis' | 'note' | 'learn' | 'recall' | 'feedback' | 'connection' | 'complete';

type Step = {
  kind: StepKind;
  eyebrow?: string;
  title: string;
  body?: string[];
  cta?: string;
  accent?: 'orange' | 'green' | 'purple';
};

const steps: Step[] = [
  {
    kind: 'intro',
    eyebrow: 'ИССЛЕДОВАНИЕ · 10 МИНУТ',
    title: 'Как термитник дышит?',
    body: ['Как миллионы насекомых поддерживают обмен воздуха без вентилятора, термостата и центрального инженера?'],
    cta: 'Начать',
    accent: 'orange',
  },
  {
    kind: 'hypothesis',
    eyebrow: 'СНАЧАЛА ВАША ГИПОТЕЗА',
    title: 'Что заставляет воздух двигаться внутри термитника?',
    body: ['Здесь нет оценки. Сначала зафиксируем вашу мысль, а затем сравним её с наблюдениями исследователей.'],
    cta: 'Продолжить',
    accent: 'purple',
  },
  {
    kind: 'note',
    eyebrow: 'ВАЖНАЯ ОГОВОРКА',
    title: '«Природный кондиционер» - удобная, но слишком простая метафора',
    body: ['У разных видов термитов форма гнезда, движение воздуха и способы поддержания внутренней среды различаются.', 'Поэтому мы рассмотрим конкретные наблюдения, а не одно правило для всех термитников.'],
    cta: 'Дальше',
    accent: 'orange',
  },
  {
    kind: 'learn',
    eyebrow: 'КАК ЭТО РАБОТАЕТ',
    title: 'Разные части конструкции нагреваются по-разному',
    body: ['В одном хорошо изученном виде наружные части термитника быстрее реагируют на дневной нагрев, чем более массивные внутренние области.', 'Эта разница температур может создавать движение воздуха внутри системы.'],
    cta: 'Дальше',
    accent: 'green',
  },
  {
    kind: 'learn',
    eyebrow: 'ГЛАВНАЯ ИДЕЯ',
    title: 'Поток может менять направление',
    body: ['Днём и ночью температурные различия меняются. Вместе с ними может меняться и направление циркуляции.', 'Важно не запоминать стрелки. Важнее понять принцип: изменения среды сами могут становиться источником движения воздуха.'],
    cta: 'Проверить понимание',
    accent: 'green',
  },
  {
    kind: 'recall',
    eyebrow: 'ПРОВЕРИМ ПОНИМАНИЕ',
    title: 'Объясните своими словами',
    body: ['Почему в некоторых термитниках воздух может циркулировать без вентилятора и без центрального управления?', 'Важна идея, а не точные термины.'],
    cta: 'Проверить ответ',
    accent: 'purple',
  },
  {
    kind: 'feedback',
    eyebrow: 'ОБРАТНАЯ СВЯЗЬ',
    title: 'Почти понял',
    body: ['Вы правильно связали движение воздуха с разницей температур.', 'Добавьте ещё одну важную часть: сама форма и структура термитника помогают направлять этот поток.'],
    cta: 'Продолжить',
    accent: 'orange',
  },
  {
    kind: 'connection',
    eyebrow: 'СВЯЗАТЬ С ДРУГОЙ ИДЕЕЙ',
    title: 'Самоорганизация у муравьёв',
    body: ['Как колония может принимать решение, если ни один муравей не видит всю систему?', 'Это похожий принцип: сложная функция возникает из множества локальных взаимодействий.'],
    cta: 'Завершить на сегодня',
    accent: 'purple',
  },
  {
    kind: 'complete',
    eyebrow: 'ГОТОВО',
    title: 'На сегодня достаточно',
    body: ['Вы разобрали роль температурных различий, структуры и самоорганизации.', 'Позже Curio вернёт эту идею и проверит, что осталось в памяти.'],
    accent: 'green',
  },
];

const accentMap = {
  orange: colors.orange,
  green: colors.green,
  purple: colors.purple,
};

function Doodle({ accent = 'orange' }: { accent?: 'orange' | 'green' | 'purple' }) {
  const fill = accentMap[accent];
  return (
    <View style={styles.doodleWrap} accessibilityElementsHidden>
      <Svg width="220" height="150" viewBox="0 0 220 150">
        <Circle cx="168" cy="35" r="24" fill={colors.purple} stroke={colors.ink} strokeWidth="4" />
        <Rect x="20" y="82" width="48" height="40" rx="10" fill={colors.green} stroke={colors.ink} strokeWidth="4" transform="rotate(-7 20 82)" />
        <Path d="M95 125 C98 90, 103 65, 110 40 C116 65, 123 90, 128 125 Z" fill={fill} stroke={colors.ink} strokeWidth="4" strokeLinejoin="round" />
        <Path d="M87 123 C65 105, 62 86, 78 76" fill="none" stroke={colors.ink} strokeWidth="4" strokeLinecap="round" />
        <Path d="M136 122 C155 102, 156 83, 143 70" fill="none" stroke={colors.ink} strokeWidth="4" strokeLinecap="round" />
        <Path d="M78 76 l-3 15 l14 -6" fill={colors.canvas} stroke={colors.ink} strokeWidth="3" strokeLinejoin="round" />
        <Path d="M143 70 l15 1 l-8 12" fill={colors.canvas} stroke={colors.ink} strokeWidth="3" strokeLinejoin="round" />
      </Svg>
    </View>
  );
}

function Button({ label, onPress, accent = 'orange', secondary = false }: { label: string; onPress: () => void; accent?: 'orange' | 'green' | 'purple'; secondary?: boolean }) {
  const backgroundColor = secondary ? colors.surface : accentMap[accent];
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        { backgroundColor, opacity: pressed ? 0.82 : 1 },
        secondary && styles.secondaryButton,
      ]}
    >
      <AppText variant="label" style={styles.buttonText}>{label}</AppText>
    </Pressable>
  );
}

function AudioDock() {
  const [playing, setPlaying] = useState(false);
  return (
    <View style={styles.audioDock}>
      <View style={styles.audioText}>
        <AppText variant="label">Аудио</AppText>
        <AppText variant="meta" color="muted">00:00 / 02:10 · 1x</AppText>
      </View>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={playing ? 'Пауза' : 'Слушать'}
        onPress={() => setPlaying(v => !v)}
        style={styles.playButton}
      >
        <AppText variant="title">{playing ? 'Ⅱ' : '▶'}</AppText>
      </Pressable>
    </View>
  );
}

function Progress({ current, total, onBack }: { current: number; total: number; onBack: () => void }) {
  return (
    <View style={styles.progressRow}>
      <Pressable accessibilityRole="button" accessibilityLabel="Назад" onPress={onBack} style={styles.back}>
        <AppText variant="title">‹</AppText>
      </Pressable>
      <View style={styles.progressTrack}>
        <View style={[styles.progressFill, { width: `${Math.max(8, (current / total) * 100)}%` }]} />
      </View>
      <AppText variant="meta" color="muted">{current} из {total}</AppText>
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
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState('');
  const step = steps[index];

  const accent = useMemo(() => step?.accent ?? 'orange', [step]);

  if (!golosLoaded || !literataLoaded || !step) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color={colors.orange} />
      </View>
    );
  }

  const next = () => setIndex(i => Math.min(i + 1, steps.length - 1));
  const back = () => setIndex(i => Math.max(i - 1, 0));

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.page} keyboardShouldPersistTaps="handled">
        <View style={styles.shell}>
          {index > 0 && <Progress current={index} total={steps.length - 1} onBack={back} />}

          <Doodle accent={accent} />

          <AppText variant="label" style={{ color: accentMap[accent] }}>{step.eyebrow}</AppText>
          <AppText variant={index === 0 ? 'display' : 'headline'} serif={index === 0} style={styles.heading}>
            {step.title}
          </AppText>

          <View style={styles.bodyStack}>
            {step.body?.map((paragraph, i) => (
              <AppText key={i} variant="body">{paragraph}</AppText>
            ))}
          </View>

          {step.kind === 'hypothesis' && (
            <TextInput
              accessibilityLabel="Ваша гипотеза"
              multiline
              placeholder="Напишите, как вы это представляете..."
              placeholderTextColor={colors.muted}
              style={styles.input}
            />
          )}

          {step.kind === 'recall' && (
            <>
              <View style={styles.voicePanel}>
                <AppText variant="title">Ответить голосом</AppText>
                <AppText variant="bodySmall" color="muted">Микрофон подключим на следующем этапе API.</AppText>
                <View style={styles.micCircle}>
                  <AppText variant="headline">●</AppText>
                </View>
              </View>
              <TextInput
                accessibilityLabel="Ваш ответ"
                multiline
                value={answer}
                onChangeText={setAnswer}
                placeholder="Или напишите ответ здесь..."
                placeholderTextColor={colors.muted}
                style={styles.input}
              />
            </>
          )}

          {step.kind === 'note' && (
            <View style={styles.note}>
              <AppText variant="label">Важно</AppText>
              <AppText variant="bodySmall">Научная точность здесь важнее красивой метафоры.</AppText>
            </View>
          )}

          {['learn', 'note'].includes(step.kind) && <AudioDock />}

          {step.kind === 'feedback' && (
            <View style={[styles.feedback, { borderColor: colors.orange }]}>
              <AppText variant="label">Что уже верно</AppText>
              <AppText variant="bodySmall">Разница температур может поддерживать движение воздуха.</AppText>
              <View style={styles.feedbackDivider} />
              <AppText variant="label">Что добавить</AppText>
              <AppText variant="bodySmall">Структура и каналы термитника помогают направлять поток.</AppText>
            </View>
          )}

          {step.cta && (
            <View style={styles.actions}>
              <Button label={step.cta} onPress={next} accent={accent} />
              {step.kind === 'recall' && (
                <Button label="Ответить позже" onPress={next} secondary />
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
  loading: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.canvas },
  page: { minHeight: '100%', paddingHorizontal: spacing.lg, paddingVertical: spacing.lg },
  shell: { width: '100%', maxWidth: 720, alignSelf: 'center' },
  progressRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.md, marginBottom: spacing.xl },
  back: { width: 56, height: 56, borderRadius: radius.control, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.surface, borderWidth: 2, borderColor: colors.ink },
  progressTrack: { flex: 1, height: 10, backgroundColor: colors.surfaceSoft, borderRadius: 999, overflow: 'hidden' },
  progressFill: { height: '100%', backgroundColor: colors.green, borderRadius: 999 },
  doodleWrap: { alignItems: 'center', marginVertical: spacing.md },
  heading: { marginTop: spacing.sm, marginBottom: spacing.lg },
  bodyStack: { gap: spacing.md },
  button: { minHeight: 60, borderRadius: radius.control, alignItems: 'center', justifyContent: 'center', paddingHorizontal: spacing.lg, borderWidth: 2, borderColor: colors.ink },
  secondaryButton: { backgroundColor: colors.surface },
  buttonText: { color: colors.ink },
  actions: { gap: spacing.md, marginTop: spacing.xl, marginBottom: spacing.xxl },
  audioDock: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: spacing.xl, padding: spacing.base, borderRadius: radius.surface, borderWidth: 2, borderColor: colors.ink, backgroundColor: colors.surface },
  audioText: { gap: 2 },
  playButton: { width: 64, height: 64, borderRadius: 32, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.green, borderWidth: 2, borderColor: colors.ink },
  input: { minHeight: 150, marginTop: spacing.lg, padding: spacing.base, borderRadius: radius.surface, borderWidth: 2, borderColor: colors.ink, backgroundColor: colors.surface, fontFamily: 'GolosText_400Regular', fontSize: 21, lineHeight: 31, color: colors.text, textAlignVertical: 'top' },
  note: { marginTop: spacing.lg, gap: spacing.sm, padding: spacing.lg, borderRadius: radius.surface, backgroundColor: colors.warmNote, borderWidth: 2, borderColor: colors.orange },
  voicePanel: { marginTop: spacing.lg, alignItems: 'center', gap: spacing.sm, padding: spacing.lg, borderRadius: radius.surface, backgroundColor: colors.surface, borderWidth: 2, borderColor: colors.green },
  micCircle: { width: 78, height: 78, marginTop: spacing.sm, borderRadius: 39, backgroundColor: colors.green, borderWidth: 3, borderColor: colors.ink, alignItems: 'center', justifyContent: 'center' },
  feedback: { marginTop: spacing.lg, gap: spacing.sm, padding: spacing.lg, borderRadius: radius.surface, backgroundColor: colors.warningSoft, borderWidth: 3 },
  feedbackDivider: { height: 1, backgroundColor: colors.hairline, marginVertical: spacing.sm },
});
