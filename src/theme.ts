export const colors = {
  orange: '#FF643D',
  green: '#35C97A',
  purple: '#B98BDE',
  blue: '#5DA9FF',
  yellow: '#FFD84D',
  ink: '#121212',
  text: '#1E1E1E',
  muted: '#555555',
  canvas: '#F8F6F1',
  surface: '#FFFFFF',
  surfaceSoft: '#F2EEE7',
  hairline: '#D8D1C7',
  warmNote: '#FFF1E8',
  warningSoft: '#FFF6E5',
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  base: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
} as const;

export const radius = {
  control: 18,
  surface: 22,
  pill: 999,
} as const;

export const typeScale = {
  display: { fontSize: 40, lineHeight: 48 },
  headline: { fontSize: 32, lineHeight: 40 },
  title: { fontSize: 24, lineHeight: 32 },
  body: { fontSize: 21, lineHeight: 31 },
  bodySmall: { fontSize: 18, lineHeight: 28 },
  label: { fontSize: 18, lineHeight: 24 },
  meta: { fontSize: 16, lineHeight: 22 },
} as const;
