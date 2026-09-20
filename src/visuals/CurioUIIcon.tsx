import Svg, { Circle, Line, Path, Rect } from 'react-native-svg';
import { colors } from '../theme';

export type CurioUIIconName =
  | 'home'
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
  | 'back'
  | 'close'
  | 'info'
  | 'share'
  | 'settings'
  | 'check'
  | 'retry'
  | 'warning'
  | 'play'
  | 'pause'
  | 'record'
  | 'stop'
  | 'edit'
  | 'confirm'
  | 'clock';

export function CurioUIIcon({
  name,
  size = 28,
  color = colors.ink,
  accent = colors.orange,
}: {
  name: CurioUIIconName;
  size?: number;
  color?: string;
  accent?: string;
}) {
  const s = {
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };

  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" aria-hidden>
      {name === 'home' && (
        <>
          <Path d="M3 10.5 12 3l9 7.5" {...s} />
          <Path d="M5.5 9.5V21h13V9.5" {...s} />
          <Path d="M9.5 21v-6h5v6" {...s} />
        </>
      )}

      {name === 'explore' && (
        <>
          <Circle cx="12" cy="12" r="9" {...s} />
          <Path d="m15.8 8.2-2.4 5.2-5.2 2.4 2.4-5.2 5.2-2.4Z" fill={accent} stroke={color} strokeWidth="1.6" strokeLinejoin="round" />
        </>
      )}

      {name === 'review' && (
        <>
          <Path d="M20 7v5h-5" {...s} />
          <Path d="M19 12a7 7 0 1 1-2-5" {...s} />
        </>
      )}

      {name === 'library' && (
        <>
          <Rect x="3" y="5" width="4" height="15" rx="1" {...s} />
          <Rect x="9" y="3" width="5" height="17" rx="1" fill={accent} stroke={color} strokeWidth="2" />
          <Path d="m16 5 4-1 1 15-4 .5L16 5Z" {...s} />
        </>
      )}

      {name === 'profile' && (
        <>
          <Circle cx="12" cy="8" r="3.5" {...s} />
          <Path d="M5 21c.7-4.5 3-6.5 7-6.5s6.3 2 7 6.5" {...s} />
        </>
      )}

      {name === 'read' && (
        <>
          <Path d="M3.5 5.5c3-1 5.5-.4 8.5 1.6v12c-3-2-5.5-2.5-8.5-1.5v-12Z" {...s} />
          <Path d="M20.5 5.5c-3-1-5.5-.4-8.5 1.6v12c3-2 5.5-2.5 8.5-1.5v-12Z" {...s} />
        </>
      )}

      {name === 'listen' && (
        <>
          <Path d="M4 13v-2a8 8 0 0 1 16 0v2" {...s} />
          <Rect x="3" y="12" width="4" height="7" rx="2" fill={accent} stroke={color} strokeWidth="2" />
          <Rect x="17" y="12" width="4" height="7" rx="2" fill={accent} stroke={color} strokeWidth="2" />
        </>
      )}

      {name === 'explain' && (
        <>
          <Path d="M4 5.5h16v11H11l-4.5 3v-3H4v-11Z" {...s} />
          <Line x1="8" y1="9" x2="16" y2="9" {...s} />
          <Line x1="8" y1="12.5" x2="14" y2="12.5" {...s} />
        </>
      )}

      {(name === 'connect' || name === 'share') && (
        <>
          <Circle cx="6" cy="12" r="2.5" fill={accent} stroke={color} strokeWidth="2" />
          <Circle cx="18" cy="6" r="2.5" {...s} />
          <Circle cx="18" cy="18" r="2.5" {...s} />
          <Line x1="8.3" y1="10.9" x2="15.7" y2="7.1" {...s} />
          <Line x1="8.3" y1="13.1" x2="15.7" y2="16.9" {...s} />
        </>
      )}

      {name === 'search' && (
        <>
          <Circle cx="10.5" cy="10.5" r="6.5" {...s} />
          <Line x1="15.5" y1="15.5" x2="21" y2="21" {...s} />
        </>
      )}

      {name === 'save' && (
        <Path d="M6 3.5h12v17L12 17l-6 3.5v-17Z" {...s} />
      )}

      {name === 'back' && (
        <>
          <Line x1="20" y1="12" x2="5" y2="12" {...s} />
          <Path d="m10 7-5 5 5 5" {...s} />
        </>
      )}

      {name === 'close' && (
        <>
          <Line x1="6" y1="6" x2="18" y2="18" {...s} />
          <Line x1="18" y1="6" x2="6" y2="18" {...s} />
        </>
      )}

      {name === 'info' && (
        <>
          <Circle cx="12" cy="12" r="9" {...s} />
          <Line x1="12" y1="10.5" x2="12" y2="17" {...s} />
          <Circle cx="12" cy="7.2" r="1" fill={accent} />
        </>
      )}

      {name === 'settings' && (
        <>
          <Circle cx="12" cy="12" r="3" {...s} />
          <Path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M18.7 5.3l-2.1 2.1M7.4 16.6l-2.1 2.1" {...s} />
        </>
      )}

      {name === 'check' && (
        <Path d="m5 12.5 4.2 4L19 7" {...s} />
      )}

      {name === 'retry' && (
        <>
          <Path d="M20 8v5h-5" {...s} />
          <Path d="M19 13a7 7 0 1 1-1.8-6.7L20 9" {...s} />
        </>
      )}

      {name === 'warning' && (
        <>
          <Path d="M12 3 22 20H2L12 3Z" fill={accent} stroke={color} strokeWidth="2" strokeLinejoin="round" />
          <Line x1="12" y1="9" x2="12" y2="14" stroke={color} strokeWidth="2" strokeLinecap="round" />
          <Circle cx="12" cy="17.2" r="1" fill={color} />
        </>
      )}

      {name === 'play' && (
        <Path d="m8 5 11 7-11 7V5Z" fill={accent} stroke={color} strokeWidth="2" strokeLinejoin="round" />
      )}

      {name === 'pause' && (
        <>
          <Rect x="6" y="5" width="4" height="14" rx="1" fill={accent} stroke={color} strokeWidth="2" />
          <Rect x="14" y="5" width="4" height="14" rx="1" fill={accent} stroke={color} strokeWidth="2" />
        </>
      )}

      {name === 'record' && (
        <Circle cx="12" cy="12" r="6" fill={accent} stroke={color} strokeWidth="2" />
      )}

      {name === 'stop' && (
        <Rect x="6" y="6" width="12" height="12" rx="2" fill={accent} stroke={color} strokeWidth="2" />
      )}

      {name === 'edit' && (
        <>
          <Path d="M5 3.5h9l5 5V20H5V3.5Z" {...s} />
          <Path d="M14 3.5v5h5" {...s} />
          <Path d="m8 16 6.8-6.8 2 2L10 18H8v-2Z" fill={accent} stroke={color} strokeWidth="1.6" strokeLinejoin="round" />
        </>
      )}

      {name === 'confirm' && (
        <>
          <Path d="M5 3.5h9l5 5V20H5V3.5Z" {...s} />
          <Path d="M14 3.5v5h5" {...s} />
          <Path d="m8 14 2.2 2.2L16 10.5" stroke={accent} strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </>
      )}

      {name === 'clock' && (
        <>
          <Circle cx="12" cy="12" r="9" {...s} />
          <Path d="M12 7v5l3 2" {...s} />
        </>
      )}
    </Svg>
  );
}
