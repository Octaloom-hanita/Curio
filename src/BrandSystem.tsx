import Svg, { Circle, Defs, LinearGradient, Path, Stop } from 'react-native-svg';
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
    <Svg width={size} height={size} viewBox="0 0 72 64" accessibilityElementsHidden focusable={false}>
      <Defs>
        <LinearGradient id="curioPurple" x1="0" y1="0" x2="1" y2="1">
          <Stop offset="0" stopColor={mono ? colors.ink : '#8B59D6'} />
          <Stop offset="1" stopColor={mono ? colors.ink : '#E7D4F8'} />
        </LinearGradient>
        <LinearGradient id="curioOrange" x1="0" y1="0" x2="0.9" y2="1">
          <Stop offset="0" stopColor={mono ? colors.ink : colors.yellow} />
          <Stop offset="1" stopColor={orange} />
        </LinearGradient>
      </Defs>
      <Path d="M31 6C16 6 5 17 5 32s11 26 26 26V46c-8 0-14-6-14-14s6-14 14-14Z" fill={shell} />
      <Circle cx="31" cy="32" r="10" fill={cutout} />
      <Path d="M28 20 44 15v34l-16-5Z" fill={mono ? purple : 'url(#curioPurple)'} stroke={shell} strokeWidth="2.2" strokeLinejoin="round" />
      <Path d="M42 17 61 10v44l-19-6Z" fill={mono ? orange : 'url(#curioOrange)'} stroke={shell} strokeWidth="2.4" strokeLinejoin="round" />
      <Path d="m23 44 19 4-11 8-17-5Z" fill={green} stroke={shell} strokeWidth="2.1" strokeLinejoin="round" />
    </Svg>
  );
}
