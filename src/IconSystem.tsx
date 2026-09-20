import { View } from 'react-native';
import Svg, { Circle, Line, Path, Rect } from 'react-native-svg';
import { colors } from './theme';

export type IconName =
  | 'today'
  | 'explore'
  | 'review'
  | 'library'
  | 'profile'
  | 'read'
  | 'listen'
  | 'explain'
  | 'connect'
  | 'search'
  | 'save'
  | 'play'
  | 'pause'
  | 'record'
  | 'stop'
  | 'transcript'
  | 'confirm'
  | 'retry'
  | 'understood'
  | 'almost'
  | 'reviewLater'
  | 'unable'
  | 'misconception'
  | 'settings'
  | 'back'
  | 'close'
  | 'info'
  | 'share'
  | 'bookmark'
  | 'bulb'
  | 'leaf'
  | 'brain'
  | 'network'
  | 'book'
  | 'audio'
  | 'microscope'
  | 'atom'
  | 'earth'
  | 'body'
  | 'technology';

type IconProps = {
  name: IconName;
  size?: number;
  color?: string;
  accent?: string;
  strokeWidth?: number;
};

const shared = {
  fill: 'none',
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

export function CurioIcon({
  name,
  size = 32,
  color = colors.ink,
  accent = colors.orange,
  strokeWidth = 2.6,
}: IconProps) {
  const s = { ...shared, stroke: color, strokeWidth };

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      accessibilityElementsHidden
      focusable={false}
    >
      {name === 'today' && (
        <>
          <Path d="M10 29 32 11l22 18v24H10Z" {...s} />
          <Path d="M24 53V35h16v18" {...s} />
          <Path d="M16 29 32 16l16 13" stroke={accent} strokeWidth={5} fill="none" strokeLinecap="round" />
        </>
      )}

      {name === 'explore' && (
        <>
          <Circle cx="32" cy="32" r="23" {...s} />
          <Path d="m42 22-6 15-15 6 6-15Z" fill={accent} stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round" />
          <Circle cx="32" cy="32" r="3.4" fill={color} />
        </>
      )}

      {name === 'review' && (
        <>
          <Circle cx="32" cy="32" r="22" {...s} />
          <Path d="m20 33 8 8 17-18" {...s} />
          <Path d="M12 17h10v10" stroke={accent} strokeWidth={4} fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </>
      )}

      {name === 'library' && (
        <>
          <Rect x="9" y="17" width="12" height="36" rx="2" {...s} />
          <Rect x="25" y="11" width="13" height="42" rx="2" {...s} />
          <Rect x="42" y="21" width="13" height="32" rx="2" {...s} />
          <Line x1="31" y1="15" x2="31" y2="49" stroke={accent} strokeWidth={4} strokeLinecap="round" />
        </>
      )}

      {name === 'profile' && (
        <>
          <Circle cx="32" cy="22" r="10" {...s} />
          <Path d="M15 53c2-11 9-16 17-16s15 5 17 16" {...s} />
          <Circle cx="32" cy="22" r="4" fill={accent} stroke="none" />
        </>
      )}

      {(name === 'read' || name === 'book') && (
        <>
          <Path d="M9 16c8-3 16-2 23 4v33c-7-6-15-7-23-4Z" {...s} />
          <Path d="M55 16c-8-3-16-2-23 4v33c7-6 15-7 23-4Z" {...s} />
          <Line x1="32" y1="20" x2="32" y2="53" {...s} />
          <Line x1="15" y1="23" x2="25" y2="23" stroke={accent} strokeWidth={3.5} strokeLinecap="round" />
        </>
      )}

      {(name === 'listen' || name === 'audio') && (
        <>
          <Path d="M25 24 15 31v10h10l11 9V14Z" {...s} />
          <Path d="M43 24c6 5 6 11 0 16" {...s} />
          <Path d="M48 18c11 9 11 19 0 28" {...s} />
          <Circle cx="15" cy="36" r="3.5" fill={accent} />
        </>
      )}

      {name === 'explain' && (
        <>
          <Path d="M10 15h44v31H31L20 55v-9H10Z" {...s} />
          <Circle cx="23" cy="30" r="3.2" fill={accent} />
          <Circle cx="32" cy="30" r="3.2" fill={accent} />
          <Circle cx="41" cy="30" r="3.2" fill={accent} />
        </>
      )}

      {(name === 'connect' || name === 'share' || name === 'network') && (
        <>
          <Circle cx="16" cy="32" r="7" {...s} />
          <Circle cx="47" cy="16" r="7" {...s} />
          <Circle cx="47" cy="48" r="7" {...s} />
          <Line x1="22" y1="29" x2="40" y2="20" {...s} />
          <Line x1="22" y1="35" x2="40" y2="44" {...s} />
          <Circle cx="16" cy="32" r="3" fill={accent} />
        </>
      )}

      {name === 'search' && (
        <>
          <Circle cx="27" cy="27" r="16" {...s} />
          <Line x1="39" y1="39" x2="54" y2="54" {...s} />
          <Circle cx="27" cy="27" r="4" fill={accent} />
        </>
      )}

      {(name === 'save' || name === 'bookmark') && (
        <>
          <Path d="M18 10h28v44L32 44 18 54Z" {...s} />
          <Line x1="24" y1="17" x2="40" y2="17" stroke={accent} strokeWidth={4} strokeLinecap="round" />
        </>
      )}

      {name === 'play' && (
        <>
          <Circle cx="32" cy="32" r="23" fill={accent} stroke={color} strokeWidth={strokeWidth} />
          <Path d="m27 22 17 10-17 10Z" fill={color} stroke="none" />
        </>
      )}

      {name === 'pause' && (
        <>
          <Circle cx="32" cy="32" r="23" fill={accent} stroke={color} strokeWidth={strokeWidth} />
          <Rect x="24" y="22" width="6" height="20" rx="2" fill={color} />
          <Rect x="34" y="22" width="6" height="20" rx="2" fill={color} />
        </>
      )}

      {name === 'record' && (
        <>
          <Circle cx="32" cy="32" r="22" {...s} />
          <Circle cx="32" cy="32" r="10" fill={accent} stroke="none" />
        </>
      )}

      {name === 'stop' && (
        <>
          <Circle cx="32" cy="32" r="22" {...s} />
          <Rect x="23" y="23" width="18" height="18" rx="3" fill={accent} stroke={color} strokeWidth={strokeWidth} />
        </>
      )}

      {name === 'transcript' && (
        <>
          <Path d="M16 9h25l9 9v37H16Z" {...s} />
          <Path d="M41 9v11h9" {...s} />
          <Line x1="23" y1="29" x2="43" y2="29" {...s} />
          <Line x1="23" y1="37" x2="40" y2="37" {...s} />
          <Line x1="23" y1="45" x2="35" y2="45" stroke={accent} strokeWidth={3.5} strokeLinecap="round" />
        </>
      )}

      {name === 'confirm' && (
        <>
          <Path d="M16 9h25l9 9v37H16Z" {...s} />
          <Path d="M41 9v11h9" {...s} />
          <Circle cx="43" cy="44" r="11" fill={accent} stroke={color} strokeWidth={strokeWidth} />
          <Path d="m38 44 4 4 7-8" stroke={color} strokeWidth={3} fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </>
      )}

      {name === 'retry' && (
        <>
          <Path d="M50 25a20 20 0 1 0 2 17" {...s} />
          <Path d="M50 12v13H37" {...s} />
          <Circle cx="24" cy="38" r="4" fill={accent} />
        </>
      )}

      {name === 'understood' && (
        <>
          <Circle cx="32" cy="32" r="22" fill={accent} stroke={color} strokeWidth={strokeWidth} />
          <Path d="m20 33 8 8 17-18" stroke={color} strokeWidth={4} fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </>
      )}

      {name === 'almost' && (
        <>
          <Rect x="13" y="37" width="8" height="16" rx="2" fill={accent} stroke={color} strokeWidth={2} />
          <Rect x="28" y="27" width="8" height="26" rx="2" fill={accent} stroke={color} strokeWidth={2} />
          <Rect x="43" y="17" width="8" height="36" rx="2" fill={accent} stroke={color} strokeWidth={2} />
        </>
      )}

      {name === 'reviewLater' && (
        <>
          <Circle cx="32" cy="32" r="22" {...s} />
          <Path d="M32 18v15l10 7" {...s} />
          <Circle cx="32" cy="32" r="4" fill={accent} />
        </>
      )}

      {name === 'unable' && (
        <>
          <Circle cx="32" cy="32" r="22" {...s} />
          <Path d="M26 25c1-5 5-8 10-8 6 0 10 4 10 9 0 7-8 8-10 14" {...s} />
          <Circle cx="32" cy="49" r="3" fill={accent} />
        </>
      )}

      {name === 'misconception' && (
        <>
          <Path d="M32 9 57 53H7Z" {...s} />
          <Line x1="32" y1="23" x2="32" y2="38" stroke={accent} strokeWidth={4} strokeLinecap="round" />
          <Circle cx="32" cy="46" r="3" fill={accent} />
        </>
      )}

      {name === 'settings' && (
        <>
          <Circle cx="32" cy="32" r="9" {...s} />
          <Path d="M32 9v8M32 47v8M9 32h8M47 32h8M16 16l6 6M42 42l6 6M48 16l-6 6M22 42l-6 6" {...s} />
          <Circle cx="32" cy="32" r="3" fill={accent} />
        </>
      )}

      {name === 'back' && (
        <>
          <Line x1="51" y1="32" x2="14" y2="32" {...s} />
          <Path d="m27 18-14 14 14 14" {...s} />
        </>
      )}

      {name === 'close' && (
        <>
          <Line x1="17" y1="17" x2="47" y2="47" {...s} />
          <Line x1="47" y1="17" x2="17" y2="47" {...s} />
        </>
      )}

      {name === 'info' && (
        <>
          <Circle cx="32" cy="32" r="22" {...s} />
          <Circle cx="32" cy="20" r="3" fill={accent} />
          <Line x1="32" y1="29" x2="32" y2="44" {...s} />
        </>
      )}

      {name === 'bulb' && (
        <>
          <Path d="M18 27c0-9 6-16 14-16s14 7 14 16c0 6-3 10-8 14l-2 5H28l-2-5c-5-4-8-8-8-14Z" {...s} />
          <Line x1="27" y1="52" x2="37" y2="52" {...s} />
          <Circle cx="32" cy="27" r="6" fill={accent} stroke="none" />
        </>
      )}

      {name === 'leaf' && (
        <>
          <Path d="M12 45c3-24 20-34 40-31 0 21-14 37-34 37Z" {...s} />
          <Path d="M18 50c11-12 20-20 31-31" {...s} />
          <Circle cx="21" cy="43" r="4" fill={accent} />
        </>
      )}

      {name === 'brain' && (
        <>
          <Path d="M31 15c-6-7-16-4-16 5-7 1-8 12-1 15-4 8 5 17 17 12Z" {...s} />
          <Path d="M33 15c6-7 16-4 16 5 7 1 8 12 1 15 4 8-5 17-17 12Z" {...s} />
          <Line x1="32" y1="15" x2="32" y2="47" {...s} />
          <Circle cx="23" cy="29" r="4" fill={accent} />
        </>
      )}


      {name === 'earth' && (
        <>
          <Circle cx="32" cy="32" r="22" {...s} />
          <Path d="M11 33c9-7 17-4 24 0 8 5 13 7 20 1" {...s} />
          <Path d="M32 10c-7 8-10 15-10 22s3 15 10 22M32 10c7 8 10 15 10 22s-3 15-10 22" {...s} />
          <Circle cx="47" cy="17" r="4" fill={accent} />
        </>
      )}

      {name === 'body' && (
        <>
          <Circle cx="32" cy="18" r="8" {...s} />
          <Path d="M32 26v18M20 34l12 6 12-6M25 54l7-10 7 10" {...s} />
          <Line x1="15" y1="54" x2="49" y2="54" stroke={accent} strokeWidth={4} strokeLinecap="round" />
        </>
      )}

      {name === 'technology' && (
        <>
          <Rect x="17" y="17" width="30" height="30" rx="7" {...s} />
          <Rect x="25" y="25" width="14" height="14" rx="4" fill={accent} stroke={color} strokeWidth={strokeWidth} />
          <Path d="M23 10v7M32 10v7M41 10v7M23 47v7M32 47v7M41 47v7M10 23h7M10 32h7M10 41h7M47 23h7M47 32h7M47 41h7" {...s} />
        </>
      )}

      {name === 'microscope' && (
        <>
          <Path d="m24 11 13 6-7 16-13-6Z" {...s} />
          <Path d="M33 31c14 3 17 17 8 22H19" {...s} />
          <Line x1="18" y1="33" x2="31" y2="38" {...s} />
          <Line x1="14" y1="53" x2="49" y2="53" stroke={accent} strokeWidth={4} strokeLinecap="round" />
        </>
      )}

      {name === 'atom' && (
        <>
          <Circle cx="32" cy="32" r="5" fill={accent} stroke={color} strokeWidth={strokeWidth} />
          <Path d="M9 32c0-8 10-15 23-15s23 7 23 15-10 15-23 15S9 40 9 32Z" {...s} />
          <Path d="M20 12c7-4 18 5 24 17s5 26-2 30c-7 4-18-5-24-17S13 16 20 12Z" {...s} />
          <Path d="M44 12c7 4 6 17 0 29S27 62 20 58s-6-17 0-29S37 8 44 12Z" {...s} />
        </>
      )}
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
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: background,
      }}
    >
      <CurioIcon
        name={name}
        size={iconSize}
        color={color}
        accent={accent ?? background}
      />
    </View>
  );
}
