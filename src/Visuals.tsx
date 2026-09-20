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

const fills = [colors.orange, colors.green, colors.purple, colors.blue, colors.yellow];

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
  const s = { stroke: colors.ink, strokeWidth: 3.5, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };

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

export function IconShelf() {
  const items: IconName[] = ['book', 'leaf', 'brain', 'network', 'microscope', 'atom'];
  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12, marginVertical: 18 }}>
      {items.map((name, i) => (
        <View
          key={name}
          style={{
            width: 72,
            height: 72,
            borderRadius: 22,
            borderWidth: 2,
            borderColor: colors.ink,
            backgroundColor: colors.surface,
            alignItems: 'center',
            justifyContent: 'center',
            transform: [{ rotate: i % 2 === 0 ? '-2deg' : '2deg' }],
          }}
        >
          <CurioIcon name={name} size={48} fill={fills[i % fills.length]} />
        </View>
      ))}
    </View>
  );
}

export type SceneName = 'mound' | 'heat' | 'cycle' | 'recall' | 'connection' | 'complete';

export function CurioScene({ name }: { name: SceneName }) {
  const common = { stroke: colors.ink, strokeWidth: 4, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };

  return (
    <View style={{ alignItems: 'center', marginVertical: 18 }}>
      <Svg width="300" height="190" viewBox="0 0 300 190">
        {name === 'mound' && <>
          <Circle cx="238" cy="38" r="26" fill={colors.yellow} {...common} />
          <Path d="M105 160 C112 116, 123 81, 150 40 C177 81, 188 116, 195 160 Z" fill={colors.orange} {...common} />
          <Path d="M142 150 C140 115, 141 91, 150 61 C158 91, 159 115, 157 150" fill={colors.canvas} {...common} />
          <Path d="M106 137 C70 122, 66 88, 92 72" fill="none" {...common} />
          <Path d="M194 137 C230 122, 234 88, 208 72" fill="none" {...common} />
          <Path d="M91 72 L87 91 L105 83" fill={colors.green} {...common} />
          <Path d="M209 72 L213 91 L195 83" fill={colors.purple} {...common} />
        </>}
        {name === 'heat' && <>
          <Circle cx="68" cy="50" r="28" fill={colors.yellow} {...common} />
          <Path d="M116 160 C120 110, 132 78, 150 48 C169 78, 181 110, 185 160 Z" fill={colors.orange} {...common} />
          <Path d="M214 45 C205 56, 205 68, 214 79" fill="none" {...common} />
          <Path d="M234 39 C221 55, 221 72, 234 87" fill="none" {...common} />
          <Path d="M112 134 C139 122, 161 122, 188 134" fill="none" {...common} />
          <Circle cx="151" cy="114" r="12" fill={colors.purple} {...common} />
        </>}
        {name === 'cycle' && <>
          <Circle cx="150" cy="95" r="50" fill={colors.surface} {...common} />
          <Path d="M118 67 C140 42, 180 49, 190 77" fill="none" {...common} />
          <Path d="M190 77 L173 73 L181 91" fill={colors.green} {...common} />
          <Path d="M182 122 C160 147, 120 140, 110 112" fill="none" {...common} />
          <Path d="M110 112 L127 116 L119 98" fill={colors.purple} {...common} />
          <Circle cx="58" cy="52" r="22" fill={colors.yellow} {...common} />
          <Path d="M235 58 C247 64, 252 77, 248 90 C232 90, 221 80, 221 66 C226 62, 230 60, 235 58 Z" fill={colors.blue} {...common} />
        </>}
        {name === 'recall' && <>
          <Rect x="66" y="40" width="168" height="108" rx="28" fill={colors.purple} {...common} />
          <Path d="M111 95 C111 68, 136 57, 153 71 C171 56, 195 69, 193 94 C192 115, 171 125, 153 113 C136 126, 111 115, 111 95 Z" fill={colors.surface} {...common} />
          <Path d="M151 72 V114" fill="none" {...common} />
          <Circle cx="76" cy="47" r="15" fill={colors.orange} {...common} />
          <Circle cx="229" cy="145" r="16" fill={colors.green} {...common} />
        </>}
        {name === 'connection' && <>
          <Circle cx="72" cy="94" r="24" fill={colors.orange} {...common} />
          <Circle cx="150" cy="48" r="24" fill={colors.green} {...common} />
          <Circle cx="230" cy="103" r="24" fill={colors.purple} {...common} />
          <Circle cx="150" cy="146" r="24" fill={colors.blue} {...common} />
          <Line x1="93" y1="82" x2="129" y2="60" {...common} />
          <Line x1="171" y1="60" x2="208" y2="89" {...common} />
          <Line x1="208" y1="116" x2="171" y2="137" {...common} />
          <Line x1="129" y1="137" x2="93" y2="107" {...common} />
          <Line x1="94" y1="95" x2="206" y2="102" {...common} />
        </>}
        {name === 'complete' && <>
          <Path d="M77 142 L77 68 Q112 58 145 77 V151 Q112 132 77 142 Z" fill={colors.orange} {...common} />
          <Path d="M223 68 Q188 58 155 77 V151 Q188 132 223 142 Z" fill={colors.surface} {...common} />
          <Circle cx="238" cy="47" r="22" fill={colors.green} {...common} />
          <Path d="M228 47 L236 55 L249 39" fill="none" {...common} />
          <Circle cx="59" cy="50" r="16" fill={colors.yellow} {...common} />
        </>}
      </Svg>
    </View>
  );
}
