import Svg, { Defs, LinearGradient, Path, Stop } from 'react-native-svg';
import { colors } from '../theme';

export function CurioMark({
  size = 32,
  accessibilityLabel,
}: {
  size?: number;
  accessibilityLabel?: string;
}) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      accessibilityRole={accessibilityLabel ? 'image' : undefined}
      accessibilityLabel={accessibilityLabel}
      aria-hidden={accessibilityLabel ? undefined : true}
    >
      <Defs>
        <LinearGradient id="curio-purple" x1="0" y1="0" x2="1" y2="1">
          <Stop offset="0" stopColor="#D8B9EF" />
          <Stop offset="1" stopColor={colors.purple} />
        </LinearGradient>
        <LinearGradient id="curio-orange" x1="0" y1="0" x2="1" y2="1">
          <Stop offset="0" stopColor={colors.orange} />
          <Stop offset="1" stopColor={colors.yellow} />
        </LinearGradient>
        <LinearGradient id="curio-green" x1="0" y1="0" x2="1" y2="0">
          <Stop offset="0" stopColor={colors.green} stopOpacity="0.72" />
          <Stop offset="1" stopColor={colors.green} stopOpacity="0.08" />
        </LinearGradient>
      </Defs>

      <Path
        d="M46 12 A22 22 0 1 0 46 52"
        fill="none"
        stroke={colors.ink}
        strokeWidth="11"
        strokeLinecap="round"
      />

      <Path
        d="M31 21 L45 16 V48 L31 43 Z"
        fill="url(#curio-purple)"
      />

      <Path
        d="M45 16 L57 10 V54 L45 48 Z"
        fill="url(#curio-orange)"
      />

      <Path
        d="M30 43 L45 48 L57 54 L38 59 Z"
        fill="url(#curio-green)"
      />
    </Svg>
  );
}
