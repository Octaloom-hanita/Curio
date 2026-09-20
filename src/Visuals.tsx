import { View } from 'react-native';
import Svg, { Circle, Ellipse, Line, Path, Rect } from 'react-native-svg';
import { colors } from './theme';

export type IconName =
  | 'bulb'
  | 'leaf'
  | 'brain'
  | 'network'
  | 'book'
  | 'audio'
  | 'microscope'
  | 'atom';

export function CurioIcon({
  name,
  size = 56,
  fill,
}: {
  name: IconName;
  size?: number;
  fill?: string;
}) {
  const c = fill ?? colors.orange;
  const s = {
    stroke: colors.ink,
    strokeWidth: 3.2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };

  return (
    <Svg width={size} height={size} viewBox="0 0 64 64">
      {name === 'bulb' && <>
        <Circle cx="32" cy="27" r="16" fill={c} {...s} />
        <Path d="M24 39 L27 49 H37 L40 39" fill={colors.canvas} {...s} />
        <Line x1="28" y1="54" x2="36" y2="54" {...s} />
      </>}

      {name === 'leaf' && <>
        <Path d="M12 44 C15 18, 36 10, 52 14 C52 34, 39 51, 18 50 Z" fill={c} {...s} />
        <Path d="M18 49 C29 38, 37 31, 49 19" fill="none" {...s} />
      </>}

      {name === 'brain' && <>
        <Path d="M31 14 C24 7, 14 13, 16 22 C8 23, 9 35, 16 36 C12 45, 23 52, 31 46 Z" fill={c} {...s} />
        <Path d="M33 14 C40 7, 50 13, 48 22 C56 23, 55 35, 48 36 C52 45, 41 52, 33 46 Z" fill={colors.purple} {...s} />
        <Path d="M32 15 V47" fill="none" {...s} />
      </>}

      {name === 'network' && <>
        <Circle cx="15" cy="20" r="7" fill={colors.orange} {...s} />
        <Circle cx="49" cy="18" r="7" fill={colors.green} {...s} />
        <Circle cx="31" cy="48" r="8" fill={c} {...s} />
        <Line x1="21" y1="23" x2="44" y2="20" {...s} />
        <Line x1="19" y1="26" x2="27" y2="42" {...s} />
        <Line x1="44" y1="24" x2="35" y2="41" {...s} />
      </>}

      {name === 'book' && <>
        <Path d="M10 16 Q22 11 31 18 V50 Q22 43 10 48 Z" fill={c} {...s} />
        <Path d="M54 16 Q42 11 33 18 V50 Q42 43 54 48 Z" fill={colors.surface} {...s} />
        <Line x1="32" y1="18" x2="32" y2="50" {...s} />
      </>}

      {name === 'audio' && <>
        <Rect x="9" y="22" width="14" height="20" rx="4" fill={c} {...s} />
        <Path d="M23 27 L36 18 V46 L23 37 Z" fill={colors.green} {...s} />
        <Path d="M43 24 C49 29, 49 35, 43 40" fill="none" {...s} />
        <Path d="M48 19 C58 27, 58 37, 48 45" fill="none" {...s} />
      </>}

      {name === 'microscope' && <>
        <Path d="M25 12 L38 18 L31 33 L18 27 Z" fill={c} {...s} />
        <Path d="M35 30 C48 34, 47 48, 35 51" fill="none" {...s} />
        <Line x1="19" y1="31" x2="31" y2="36" {...s} />
        <Rect x="15" y="48" width="34" height="7" rx="3" fill={colors.green} {...s} />
      </>}

      {name === 'atom' && <>
        <Circle cx="32" cy="32" r="5" fill={c} {...s} />
        <Ellipse cx="32" cy="32" rx="25" ry="10" fill="none" {...s} />
        <Ellipse cx="32" cy="32" rx="25" ry="10" fill="none" transform="rotate(60 32 32)" {...s} />
        <Ellipse cx="32" cy="32" rx="25" ry="10" fill="none" transform="rotate(120 32 32)" {...s} />
      </>}
    </Svg>
  );
}

export type SceneName = 'flow' | 'heat' | 'cycle' | 'recall' | 'connection' | 'complete';

const arrow = {
  stroke: colors.ink,
  strokeWidth: 4,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

export function CurioScene({ name }: { name: SceneName }) {
  return (
    <View
      accessibilityElementsHidden
      style={{ alignItems: 'center', marginVertical: 18 }}
    >
      <Svg width="320" height="170" viewBox="0 0 320 170">
        {name === 'flow' && <>
          <Circle cx="263" cy="35" r="21" fill={colors.yellow} stroke={colors.ink} strokeWidth="3" />
          <Path d="M42 75 C83 36, 135 38, 174 68 C208 94, 238 91, 272 65" fill="none" {...arrow} />
          <Path d="M263 58 L274 65 L265 75" fill="none" {...arrow} />
          <Path d="M45 116 C83 145, 130 141, 164 116 C199 91, 232 98, 271 126" fill="none" {...arrow} />
          <Path d="M261 117 L272 126 L260 133" fill="none" {...arrow} />
          <Circle cx="92" cy="91" r="7" fill={colors.orange} stroke={colors.ink} strokeWidth="2.5" />
          <Circle cx="151" cy="55" r="6" fill={colors.green} stroke={colors.ink} strokeWidth="2.5" />
          <Circle cx="214" cy="123" r="7" fill={colors.blue} stroke={colors.ink} strokeWidth="2.5" />
        </>}

        {name === 'heat' && <>
          <Circle cx="75" cy="45" r="27" fill={colors.orange} stroke={colors.ink} strokeWidth="3" />
          <Circle cx="244" cy="123" r="27" fill={colors.blue} stroke={colors.ink} strokeWidth="3" />
          <Path d="M97 58 C132 76, 170 77, 218 105" fill="none" {...arrow} />
          <Path d="M207 94 L220 105 L204 109" fill="none" {...arrow} />
          <Path d="M222 125 C178 144, 126 140, 89 72" fill="none" {...arrow} />
          <Path d="M94 85 L88 70 L104 73" fill="none" {...arrow} />
          <Circle cx="150" cy="102" r="9" fill={colors.yellow} stroke={colors.ink} strokeWidth="2.5" />
        </>}

        {name === 'cycle' && <>
          <Circle cx="160" cy="84" r="48" fill={colors.surface} stroke={colors.ink} strokeWidth="3" />
          <Path d="M124 61 C143 37, 180 35, 199 58" fill="none" {...arrow} />
          <Path d="M190 49 L201 58 L188 66" fill="none" {...arrow} />
          <Path d="M198 108 C178 132, 141 134, 122 111" fill="none" {...arrow} />
          <Path d="M131 120 L120 111 L133 103" fill="none" {...arrow} />
          <Circle cx="68" cy="48" r="21" fill={colors.yellow} stroke={colors.ink} strokeWidth="3" />
          <Path d="M244 41 C258 47, 264 62, 258 76 C242 76, 231 66, 231 52 C235 47, 239 44, 244 41 Z" fill={colors.purple} stroke={colors.ink} strokeWidth="3" />
        </>}

        {name === 'recall' && <>
          <Rect x="69" y="32" width="182" height="108" rx="25" fill={colors.surface} stroke={colors.ink} strokeWidth="3" />
          <Path d="M113 86 C113 64, 134 53, 151 65 C169 52, 193 65, 192 87 C191 108, 171 118, 152 106 C134 119, 113 108, 113 86 Z" fill={colors.purple} stroke={colors.ink} strokeWidth="3" />
          <Path d="M152 66 V106" fill="none" {...arrow} />
          <Circle cx="77" cy="38" r="12" fill={colors.yellow} stroke={colors.ink} strokeWidth="2.5" />
          <Circle cx="246" cy="136" r="12" fill={colors.green} stroke={colors.ink} strokeWidth="2.5" />
        </>}

        {name === 'connection' && <>
          <Circle cx="70" cy="85" r="23" fill={colors.orange} stroke={colors.ink} strokeWidth="3" />
          <Circle cx="160" cy="46" r="23" fill={colors.green} stroke={colors.ink} strokeWidth="3" />
          <Circle cx="250" cy="91" r="23" fill={colors.purple} stroke={colors.ink} strokeWidth="3" />
          <Circle cx="160" cy="133" r="23" fill={colors.blue} stroke={colors.ink} strokeWidth="3" />
          <Line x1="91" y1="76" x2="139" y2="55" {...arrow} />
          <Line x1="181" y1="56" x2="229" y2="81" {...arrow} />
          <Line x1="229" y1="103" x2="181" y2="124" {...arrow} />
          <Line x1="139" y1="124" x2="91" y2="96" {...arrow} />
        </>}

        {name === 'complete' && <>
          <Circle cx="160" cy="82" r="51" fill={colors.green} stroke={colors.ink} strokeWidth="3" />
          <Path d="M134 82 L153 101 L190 61" fill="none" {...arrow} />
          <Circle cx="85" cy="43" r="12" fill={colors.yellow} stroke={colors.ink} strokeWidth="2.5" />
          <Circle cx="235" cy="122" r="13" fill={colors.purple} stroke={colors.ink} strokeWidth="2.5" />
        </>}
      </Svg>
    </View>
  );
}
