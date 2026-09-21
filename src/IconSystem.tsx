import { View } from 'react-native';
import Svg, { Circle, Line, Path, Rect } from 'react-native-svg';
import { colors } from './theme';

export type IconName =
  | 'today' | 'explore' | 'review' | 'library' | 'profile'
  | 'read' | 'listen' | 'explain' | 'connect' | 'search' | 'save'
  | 'play' | 'pause' | 'record' | 'stop' | 'transcript' | 'confirm'
  | 'retry' | 'understood' | 'almost' | 'reviewLater' | 'unable' | 'misconception'
  | 'settings' | 'back' | 'close' | 'info' | 'share' | 'bookmark'
  | 'bulb' | 'leaf' | 'brain' | 'network' | 'book' | 'audio'
  | 'microscope' | 'atom' | 'earth' | 'body' | 'technology';

type IconProps = {
  name: IconName;
  size?: number;
  color?: string;
  accent?: string;
  strokeWidth?: number;
};

const fixedAccent: Partial<Record<IconName, string>> = {
  today: colors.orange,
  explore: colors.green,
  review: colors.purple,
  library: colors.blue,
  profile: colors.yellow,
  read: colors.orange,
  listen: colors.green,
  explain: colors.purple,
  connect: colors.blue,
  save: colors.yellow,
  play: colors.green,
  pause: colors.orange,
  record: colors.orange,
  stop: '#CED2D8',
  retry: colors.blue,
  understood: colors.green,
  almost: colors.yellow,
  reviewLater: colors.purple,
  unable: '#D9DDE2',
  misconception: colors.orange,
};

const lineProps = (color: string, strokeWidth: number) => ({
  fill: 'none',
  stroke: color,
  strokeWidth,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
});

export function CurioIcon({
  name,
  size = 32,
  color = colors.ink,
  accent = colors.orange,
  strokeWidth = 2.8,
}: IconProps) {
  const a = fixedAccent[name] ?? accent;
  const s = lineProps(color, strokeWidth);

  return (
    <Svg width={size} height={size} viewBox="0 0 64 64" accessibilityElementsHidden focusable={false}>
      {name === 'today' && <>
        <Path d="M8 29 32 9l24 20v26H8Z" fill={a} stroke={color} strokeWidth={3.4} strokeLinejoin="round" />
        <Path d="M25 55V37h14v18" fill={color} />
        <Path d="M13 29 32 13l19 16" fill="none" stroke={colors.yellow} strokeWidth={3.2} strokeLinecap="round" />
      </>}

      {name === 'explore' && <>
        <Circle cx="32" cy="32" r="24" fill={a} stroke={color} strokeWidth={3.4} />
        <Path d="m43 20-7 17-17 7 7-17Z" fill={color} stroke={color} strokeWidth={1.5} strokeLinejoin="round" />
        <Circle cx="32" cy="32" r="3.2" fill={colors.surface} />
      </>}

      {name === 'review' && <>
        <Circle cx="32" cy="32" r="24" fill={a} stroke="#8A5AC9" strokeWidth={3.4} />
        <Path d="m19 33 9 9 18-21" fill="none" stroke={color} strokeWidth={4.5} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M13 18h9v9" fill="none" stroke={colors.surface} strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
      </>}

      {name === 'library' && <>
        <Rect x="8" y="20" width="13" height="34" rx="3" fill="#9DD2FF" stroke={color} strokeWidth={3} />
        <Rect x="25" y="11" width="14" height="43" rx="3" fill={a} stroke={color} strokeWidth={3} />
        <Rect x="43" y="23" width="13" height="31" rx="3" fill="#C6E4FF" stroke={color} strokeWidth={3} />
        <Line x1="31" y1="16" x2="31" y2="49" stroke={colors.surface} strokeWidth={2.5} strokeLinecap="round" />
      </>}

      {name === 'profile' && <>
        <Circle cx="32" cy="19" r="10" fill={a} stroke={color} strokeWidth={3} />
        <Path d="M13 54c2-14 10-21 19-21s17 7 19 21Z" fill="#FFE47D" stroke={color} strokeWidth={3} strokeLinejoin="round" />
      </>}

      {(name === 'read' || name === 'book') && <>
        <Path d="M8 17c9-4 18-2 24 4v34c-7-6-15-8-24-4Z" fill={name === 'read' ? colors.orangeSoft : colors.surface} stroke={name === 'read' ? colors.orange : color} strokeWidth={3.3} strokeLinejoin="round" />
        <Path d="M56 17c-9-4-18-2-24 4v34c7-6 15-8 24-4Z" fill={name === 'read' ? colors.orangeSoft : colors.surface} stroke={name === 'read' ? colors.orange : color} strokeWidth={3.3} strokeLinejoin="round" />
        <Line x1="32" y1="21" x2="32" y2="54" stroke={name === 'read' ? colors.orange : color} strokeWidth={3.2} />
      </>}

      {(name === 'listen' || name === 'audio') && <>
        {name === 'listen' ? <Circle cx="32" cy="32" r="24" fill={a} /> : null}
        <Path d={name === 'listen' ? "M26 20 45 32 26 44Z" : "M25 24 15 31v10h10l11 9V14Z"} fill={name === 'listen' ? color : 'none'} stroke={color} strokeWidth={name === 'listen' ? 2 : strokeWidth} strokeLinejoin="round" />
        {name === 'audio' ? <>
          <Path d="M43 24c6 5 6 11 0 16" {...s} />
          <Path d="M48 18c11 9 11 19 0 28" {...s} />
        </> : null}
      </>}

      {name === 'explain' && <Path d="M10 15h44v30H32L20 55V45H10Z" fill={colors.purpleSoft} stroke="#8A5AC9" strokeWidth={3.4} strokeLinejoin="round" />}

      {(name === 'connect' || name === 'share' || name === 'network') && <>
        <Circle cx="15" cy="32" r="7" fill={name === 'connect' ? a : colors.surface} stroke={name === 'connect' ? '#176FE8' : color} strokeWidth={3} />
        <Circle cx="47" cy="16" r="7" fill={name === 'connect' ? a : colors.surface} stroke={name === 'connect' ? '#176FE8' : color} strokeWidth={3} />
        <Circle cx="47" cy="48" r="7" fill={name === 'connect' ? a : colors.surface} stroke={name === 'connect' ? '#176FE8' : color} strokeWidth={3} />
        <Line x1="21" y1="29" x2="40" y2="20" stroke={name === 'connect' ? '#176FE8' : color} strokeWidth={3.5} />
        <Line x1="21" y1="35" x2="40" y2="44" stroke={name === 'connect' ? '#176FE8' : color} strokeWidth={3.5} />
      </>}

      {name === 'search' && <>
        <Circle cx="27" cy="27" r="16" {...s} />
        <Line x1="39" y1="39" x2="54" y2="54" {...s} />
      </>}

      {(name === 'save' || name === 'bookmark') && <Path d="M18 10h28v44L32 44 18 54Z" fill={name === 'save' ? colors.yellowSoft : colors.surface} stroke={name === 'save' ? '#F2B600' : color} strokeWidth={3.4} strokeLinejoin="round" />}

      {name === 'play' && <>
        <Circle cx="32" cy="32" r="24" fill={a} />
        <Path d="m27 21 19 11-19 11Z" fill={color} />
      </>}

      {name === 'pause' && <>
        <Circle cx="32" cy="32" r="24" fill={a} />
        <Rect x="23" y="20" width="7" height="24" rx="2" fill={colors.surface} />
        <Rect x="35" y="20" width="7" height="24" rx="2" fill={colors.surface} />
      </>}

      {name === 'record' && <>
        <Circle cx="32" cy="32" r="24" fill={colors.orangeSoft} />
        <Circle cx="32" cy="32" r="11" fill={a} />
      </>}

      {name === 'stop' && <>
        <Circle cx="32" cy="32" r="24" fill="#E5E8EB" />
        <Rect x="22" y="22" width="20" height="20" rx="3" fill={color} />
      </>}

      {name === 'transcript' && <>
        <Path d="M15 9h27l9 9v37H15Z" fill={colors.surface} stroke="#65758B" strokeWidth={3} strokeLinejoin="round" />
        <Path d="M42 9v11h9" {...s} />
        <Line x1="22" y1="30" x2="42" y2="30" {...s} />
        <Line x1="22" y1="39" x2="38" y2="39" {...s} />
        <Path d="m42 47 8-8 4 4-8 8-6 2Z" fill={colors.blueSoft} stroke={color} strokeWidth={2.2} strokeLinejoin="round" />
      </>}

      {name === 'confirm' && <>
        <Path d="M15 9h27l9 9v37H15Z" fill={colors.surface} stroke="#65758B" strokeWidth={3} strokeLinejoin="round" />
        <Path d="M42 9v11h9" {...s} />
        <Circle cx="45" cy="45" r="11" fill={colors.green} />
        <Path d="m40 45 4 4 7-8" fill="none" stroke={colors.surface} strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
      </>}

      {name === 'retry' && <>
        <Path d="M50 24a20 20 0 1 0 2 18" fill="none" stroke={a} strokeWidth={4} strokeLinecap="round" />
        <Path d="M50 11v13H37" fill="none" stroke={a} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
      </>}

      {name === 'understood' && <>
        <Path d="M32 54V34" fill="none" stroke={color} strokeWidth={3.4} strokeLinecap="round" />
        <Path d="M31 37C18 36 14 27 15 18c10-1 19 4 19 15" fill={colors.greenSoft} stroke={a} strokeWidth={3} strokeLinejoin="round" />
        <Path d="M33 34c1-11 8-17 18-17 1 10-4 19-18 20" fill={colors.green} stroke={a} strokeWidth={3} strokeLinejoin="round" />
      </>}

      {name === 'almost' && <>
        <Rect x="11" y="38" width="9" height="16" rx="3" fill={a} />
        <Rect x="27" y="27" width="9" height="27" rx="3" fill="#FFC52D" />
        <Rect x="43" y="16" width="9" height="38" rx="3" fill="#FFB300" />
      </>}

      {name === 'reviewLater' && <>
        <Circle cx="32" cy="32" r="24" fill={colors.purpleSoft} />
        <Path d="M32 17v16l10 7" fill="none" stroke={a} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
      </>}

      {name === 'unable' && <>
        <Circle cx="32" cy="32" r="24" fill={a} />
        <Path d="M25 25c1-6 5-9 11-9 6 0 10 4 10 9 0 7-8 8-10 15" fill="none" stroke="#65758B" strokeWidth={3.5} strokeLinecap="round" />
        <Circle cx="32" cy="49" r="3" fill="#65758B" />
      </>}

      {name === 'misconception' && <>
        <Path d="M32 8 58 54H6Z" fill={a} stroke={colors.orange} strokeWidth={2.5} strokeLinejoin="round" />
        <Line x1="32" y1="22" x2="32" y2="38" stroke={colors.surface} strokeWidth={4} strokeLinecap="round" />
        <Circle cx="32" cy="46" r="3" fill={colors.surface} />
      </>}

      {name === 'settings' && <>
        <Circle cx="32" cy="32" r="9" {...s} />
        <Path d="M32 9v8M32 47v8M9 32h8M47 32h8M16 16l6 6M42 42l6 6M48 16l-6 6M22 42l-6 6" {...s} />
      </>}

      {name === 'back' && <>
        <Line x1="51" y1="32" x2="14" y2="32" {...s} />
        <Path d="m27 18-14 14 14 14" {...s} />
      </>}

      {name === 'close' && <>
        <Line x1="17" y1="17" x2="47" y2="47" {...s} />
        <Line x1="47" y1="17" x2="17" y2="47" {...s} />
      </>}

      {name === 'info' && <>
        <Circle cx="32" cy="32" r="23" fill={colors.blueSoft} stroke={colors.blue} strokeWidth={3} />
        <Circle cx="32" cy="20" r="3" fill={color} />
        <Line x1="32" y1="29" x2="32" y2="44" {...s} />
      </>}

      {name === 'bulb' && <>
        <Path d="M18 27c0-9 6-16 14-16s14 7 14 16c0 6-3 10-8 14l-2 5H28l-2-5c-5-4-8-8-8-14Z" fill={colors.yellowSoft} stroke={color} strokeWidth={3} strokeLinejoin="round" />
        <Line x1="27" y1="52" x2="37" y2="52" {...s} />
        <Circle cx="32" cy="27" r="6" fill={a} />
      </>}

      {name === 'leaf' && <>
        <Path d="M11 45c4-25 21-35 42-31 0 22-15 38-35 38Z" fill={colors.greenSoft} stroke={color} strokeWidth={3.2} strokeLinejoin="round" />
        <Path d="M18 50c12-13 21-21 32-32" {...s} />
        <Circle cx="22" cy="43" r="4" fill={a} />
      </>}

      {name === 'brain' && <>
        <Path
          d="M32 10C28 6 21 6 18 10c-5-1-9 3-8 8-5 3-4 10 0 13-2 6 2 12 8 12 1 6 8 9 14 5 6 4 13 1 14-5 6 0 10-6 8-12 4-3 5-10 0-13 1-5-3-9-8-8-3-4-10-4-14 0Z"
          fill={colors.purpleSoft}
          stroke={color}
          strokeWidth={3}
          strokeLinejoin="round"
        />
        <Path d="M32 11v37" fill="none" stroke={color} strokeWidth={2.6} strokeLinecap="round" />
        <Path d="M19 18c5-2 9 1 9 6M14 29c5-2 10 0 12 5M18 40c4-3 8-2 11 1" fill="none" stroke={color} strokeWidth={2.3} strokeLinecap="round" />
        <Path d="M45 18c-5-2-9 1-9 6M50 29c-5-2-10 0-12 5M46 40c-4-3-8-2-11 1" fill="none" stroke={color} strokeWidth={2.3} strokeLinecap="round" />
        <Circle cx="21" cy="25" r="3.4" fill={a} />
      </>}

      {name === 'earth' && <>
        <Circle cx="32" cy="32" r="23" fill={colors.blueSoft} stroke={color} strokeWidth={3} />
        <Path d="M12 33c9-7 17-4 24 0 8 5 13 7 20 1" fill="none" stroke={colors.blue} strokeWidth={3} strokeLinecap="round" />
        <Path d="M32 10c-7 8-10 15-10 22s3 15 10 22M32 10c7 8 10 15 10 22s-3 15-10 22" fill="none" stroke={color} strokeWidth={2.3} />
        <Circle cx="47" cy="17" r="5" fill={colors.yellow} stroke={color} strokeWidth={2} />
      </>}

      {name === 'body' && <>
        <Circle cx="32" cy="18" r="8" fill={colors.yellow} stroke={color} strokeWidth={3} />
        <Path d="M32 27v17M20 34l12 6 12-6M25 54l7-10 7 10" {...s} />
        <Line x1="15" y1="54" x2="49" y2="54" stroke={a} strokeWidth={5} strokeLinecap="round" />
      </>}

      {name === 'technology' && <>
        <Rect x="17" y="17" width="30" height="30" rx="7" fill={colors.blueSoft} stroke={color} strokeWidth={3} />
        <Rect x="25" y="25" width="14" height="14" rx="4" fill={a} stroke={color} strokeWidth={2.5} />
        <Path d="M23 10v7M32 10v7M41 10v7M23 47v7M32 47v7M41 47v7M10 23h7M10 32h7M10 41h7M47 23h7M47 32h7M47 41h7" {...s} />
      </>}

      {name === 'microscope' && <>
        <Path d="m24 11 13 6-7 16-13-6Z" fill={colors.purpleSoft} stroke={color} strokeWidth={3} strokeLinejoin="round" />
        <Path d="M33 31c14 3 17 17 8 22H19" {...s} />
        <Line x1="18" y1="33" x2="31" y2="38" {...s} />
        <Line x1="14" y1="53" x2="49" y2="53" stroke={a} strokeWidth={5} strokeLinecap="round" />
      </>}

      {name === 'atom' && <>
        <Circle cx="32" cy="32" r="5" fill={a} stroke={color} strokeWidth={2.5} />
        <Path d="M9 32c0-8 10-15 23-15s23 7 23 15-10 15-23 15S9 40 9 32Z" {...s} />
        <Path d="M20 12c7-4 18 5 24 17s5 26-2 30c-7 4-18-5-24-17S13 16 20 12Z" {...s} />
        <Path d="M44 12c7 4 6 17 0 29S27 62 20 58s-6-17 0-29S37 8 44 12Z" {...s} />
      </>}
    </Svg>
  );
}

export function CurioIconBadge({
  name,
  size = 56,
  iconSize = 30,
  background = colors.surfaceSoft,
  color = colors.ink,
  accent,
}: {
  name: IconName;
  size?: number;
  iconSize?: number;
  background?: string;
  color?: string;
  accent?: string;
}) {
  return (
    <View style={{
      width: size,
      height: size,
      borderRadius: size / 2,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: background,
    }}>
      <CurioIcon name={name} size={iconSize} color={color} accent={accent ?? background} />
    </View>
  );
}
