import Svg, { Circle, Path, Rect } from 'react-native-svg';
import { colors } from './theme';

export function CurioMark({
  size = 32,
  mono = false,
}: {
  size?: number;
  mono?: boolean;
}) {
  const shell = colors.ink;
  const orange = mono ? colors.ink : colors.orange;
  const purple = mono ? colors.ink : colors.purple;
  const green = mono ? colors.ink : colors.green;
  const cutout = colors.canvas;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      accessibilityElementsHidden
      focusable={false}
    >
      <Circle cx="28" cy="32" r="24" fill={shell} />
      <Circle cx="28" cy="32" r="12" fill={cutout} />
      <Rect x="28" y="17" width="19" height="30" fill={cutout} />

      <Path
        d="M27 20 42 16v32l-15-4Z"
        fill={purple}
        stroke={shell}
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <Path
        d="M40 17 55 11v42l-15-5Z"
        fill={orange}
        stroke={shell}
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <Path
        d="m22 44 18 4-9 7-15-5Z"
        fill={green}
        stroke={shell}
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
