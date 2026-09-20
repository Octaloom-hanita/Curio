import Svg, { Path, Rect } from 'react-native-svg';
import { colors } from './theme';

export function CurioMark({
  size = 36,
  mono = false,
}: {
  size?: number;
  mono?: boolean;
}) {
  const orange = mono ? colors.ink : colors.orange;
  const purple = mono ? colors.ink : colors.purple;
  const green = mono ? colors.ink : colors.green;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      accessibilityElementsHidden
      focusable={false}
    >
      <Rect
        x="7"
        y="7"
        width="50"
        height="50"
        rx="16"
        fill={colors.surface}
        stroke={colors.ink}
        strokeWidth="3"
      />
      <Path
        d="M16 17 31 22v25L16 52Z"
        fill={orange}
        stroke={colors.ink}
        strokeWidth="2.8"
        strokeLinejoin="round"
      />
      <Path
        d="m48 17-14 5v25l14 5Z"
        fill={purple}
        stroke={colors.ink}
        strokeWidth="2.8"
        strokeLinejoin="round"
      />
      <Path
        d="m31 25 7-3v23l-7-3Z"
        fill={green}
        stroke={colors.ink}
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
      <Path
        d="M31 22v25"
        fill="none"
        stroke={colors.ink}
        strokeWidth="2.8"
        strokeLinecap="round"
      />
    </Svg>
  );
}
