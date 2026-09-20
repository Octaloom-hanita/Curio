import { createContext, type PropsWithChildren, useContext } from 'react';
import { StyleSheet, Text, type TextStyle } from 'react-native';
import { colors, typeScale } from './theme';

type Variant = keyof typeof typeScale;

type Props = PropsWithChildren<{
  variant?: Variant;
  serif?: boolean;
  color?: 'text' | 'muted' | 'ink';
  style?: TextStyle | TextStyle[];
}>;

const TextScaleContext = createContext(1);

export function AppTextScaleProvider({
  scale,
  children,
}: PropsWithChildren<{ scale: number }>) {
  return (
    <TextScaleContext.Provider value={scale}>
      {children}
    </TextScaleContext.Provider>
  );
}

const fonts: Record<Variant, string> = {
  display: 'GolosText_700Bold',
  headline: 'GolosText_700Bold',
  title: 'GolosText_700Bold',
  body: 'GolosText_400Regular',
  bodySmall: 'GolosText_400Regular',
  label: 'GolosText_600SemiBold',
  meta: 'GolosText_400Regular',
};

export function AppText({
  children,
  variant = 'body',
  serif = false,
  color = 'text',
  style,
}: Props) {
  const scale = useContext(TextScaleContext);
  const base = typeScale[variant];

  return (
    <Text
      allowFontScaling
      style={[
        styles.base,
        {
          fontSize: Math.round(base.fontSize * scale),
          lineHeight: Math.round(base.lineHeight * scale),
        },
        {
          color: colors[color],
          fontFamily: serif ? 'Literata_600SemiBold' : fonts[variant],
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  base: {
    includeFontPadding: false,
  },
});
