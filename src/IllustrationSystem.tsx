import Svg, { Circle, Ellipse, Line, Path, Rect } from 'react-native-svg';
import { colors } from './theme';

export type MechanismIllustrationName =
  | 'airflow'
  | 'temperature-difference'
  | 'structure-paths'
  | 'decentralized'
  | 'daily-cycle'
  | 'recall'
  | 'connection'
  | 'complete';

export type TopicVisualName =
  | 'earth'
  | 'life'
  | 'brain'
  | 'cognition'
  | 'society'
  | 'body'
  | 'technology'
  | 'science';

export type EmptyStateIllustrationName =
  | 'no-reviews'
  | 'no-saved'
  | 'coming-soon'
  | 'offline';

const line = {
  stroke: colors.ink,
  strokeWidth: 3,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

const lightLine = {
  stroke: colors.ink,
  strokeWidth: 2.4,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

export function CurioMechanismIllustration({
  name,
  width = 320,
}: {
  name: MechanismIllustrationName;
  width?: number;
}) {
  const height = Math.round(width * 0.56);

  return (
    <Svg width={width} height={height} viewBox="0 0 320 180">
      {name === 'airflow' && (
        <>
          <Path d="M68 142V48c0-12 10-22 22-22h52v116Z" fill={colors.surfaceSoft} {...line} />
          <Path d="M178 142V26h52c12 0 22 10 22 22v94Z" fill={colors.warmNote} {...line} />
          <Path d="M101 126C83 101 84 73 105 52" fill="none" {...line} />
          <Path d="m96 58 10-7-2 12" fill="none" {...line} />
          <Path d="M215 50c22 25 22 55 1 78" fill="none" {...line} />
          <Path d="m225 121-10 8 2-13" fill="none" {...line} />
          <Path d="M141 66c13-8 25-8 38 0" fill="none" {...lightLine} />
          <Path d="M141 108c13 8 25 8 38 0" fill="none" {...lightLine} />
          <Circle cx="160" cy="87" r="9" fill={colors.green} stroke={colors.ink} strokeWidth="2.5" />
          <Circle cx="84" cy="42" r="8" fill={colors.blue} stroke={colors.ink} strokeWidth="2.5" />
          <Circle cx="236" cy="138" r="8" fill={colors.orange} stroke={colors.ink} strokeWidth="2.5" />
        </>
      )}

      {name === 'temperature-difference' && (
        <>
          <Rect x="40" y="34" width="82" height="112" rx="22" fill={colors.warmNote} stroke={colors.ink} strokeWidth="3" />
          <Rect x="198" y="34" width="82" height="112" rx="22" fill="#EAF4FF" stroke={colors.ink} strokeWidth="3" />
          <Circle cx="81" cy="69" r="18" fill={colors.orange} stroke={colors.ink} strokeWidth="3" />
          <Circle cx="239" cy="111" r="18" fill={colors.blue} stroke={colors.ink} strokeWidth="3" />
          <Path d="M121 61c36-15 70-7 91 20" fill="none" {...line} />
          <Path d="m203 73 10 9-13 1" fill="none" {...line} />
          <Path d="M198 124c-32 15-66 7-88-20" fill="none" {...line} />
          <Path d="m119 113-10-10 13-1" fill="none" {...line} />
          <Line x1="81" y1="96" x2="81" y2="127" {...lightLine} />
          <Line x1="239" y1="54" x2="239" y2="85" {...lightLine} />
        </>
      )}

      {name === 'structure-paths' && (
        <>
          <Rect x="54" y="25" width="212" height="130" rx="30" fill={colors.surfaceSoft} stroke={colors.ink} strokeWidth="3" />
          <Path d="M96 136V53c0-10 8-18 18-18h12v101" fill="none" {...line} />
          <Path d="M154 136V67c0-10 8-18 18-18h10v87" fill="none" {...line} />
          <Path d="M210 136V45" fill="none" {...line} />
          <Path d="M96 86h58M154 99h56M126 62h56" fill="none" {...lightLine} />
          <Path d="M96 124V79" stroke={colors.blue} strokeWidth="6" fill="none" strokeLinecap="round" />
          <Path d="m90 88 6-10 6 10" fill="none" {...line} />
          <Path d="M210 55v54" stroke={colors.orange} strokeWidth="6" fill="none" strokeLinecap="round" />
          <Path d="m204 100 6 10 6-10" fill="none" {...line} />
          <Circle cx="154" cy="99" r="7" fill={colors.green} stroke={colors.ink} strokeWidth="2.5" />
          <Circle cx="182" cy="62" r="7" fill={colors.purple} stroke={colors.ink} strokeWidth="2.5" />
        </>
      )}

      {name === 'decentralized' && (
        <>
          <Circle cx="160" cy="90" r="60" fill={colors.surfaceSoft} stroke={colors.ink} strokeWidth="3" />
          <Circle cx="113" cy="72" r="11" fill={colors.orange} stroke={colors.ink} strokeWidth="2.5" />
          <Circle cx="151" cy="51" r="10" fill={colors.green} stroke={colors.ink} strokeWidth="2.5" />
          <Circle cx="202" cy="68" r="11" fill={colors.purple} stroke={colors.ink} strokeWidth="2.5" />
          <Circle cx="194" cy="119" r="10" fill={colors.blue} stroke={colors.ink} strokeWidth="2.5" />
          <Circle cx="136" cy="125" r="10" fill={colors.yellow} stroke={colors.ink} strokeWidth="2.5" />
          <Line x1="123" y1="67" x2="141" y2="56" {...lightLine} />
          <Line x1="161" y1="54" x2="191" y2="65" {...lightLine} />
          <Line x1="201" y1="79" x2="196" y2="109" {...lightLine} />
          <Line x1="184" y1="122" x2="146" y2="125" {...lightLine} />
          <Line x1="130" y1="116" x2="117" y2="82" {...lightLine} />
          <Path d="M78 53C47 77 48 116 78 139" fill="none" {...line} />
          <Path d="m68 132 11 8 1-13" fill="none" {...line} />
          <Path d="M242 139c31-24 30-63 0-86" fill="none" {...line} />
          <Path d="m252 60-11-8-1 13" fill="none" {...line} />
        </>
      )}

      {name === 'daily-cycle' && (
        <>
          <Circle cx="160" cy="90" r="57" fill={colors.surface} stroke={colors.ink} strokeWidth="3" />
          <Circle cx="83" cy="52" r="22" fill={colors.yellow} stroke={colors.ink} strokeWidth="3" />
          <Path d="M238 33c16 5 24 21 18 36-18 1-31-11-31-27 3-4 7-7 13-9Z" fill={colors.purple} stroke={colors.ink} strokeWidth="3" />
          <Path d="M123 59c21-18 54-19 77-1" fill="none" {...line} />
          <Path d="m190 49 11 9-13 2" fill="none" {...line} />
          <Path d="M200 122c-21 18-54 19-77 1" fill="none" {...line} />
          <Path d="m133 132-11-9 13-2" fill="none" {...line} />
          <Path d="M144 72c11-8 21-8 32 0v36c-11 8-21 8-32 0Z" fill={colors.surfaceSoft} stroke={colors.ink} strokeWidth="2.5" />
          <Path d="M152 80v20M168 80v20" {...lightLine} />
        </>
      )}

      {name === 'recall' && (
        <>
          <Path d="M112 47c-18 0-32 15-32 33 0 12 6 23 17 29-4 21 17 34 35 22 8 11 24 13 35 4V49c-16-11-36-7-45 6-3-5-6-8-10-8Z" fill={colors.warmNote} stroke={colors.ink} strokeWidth="3" />
          <Path d="M208 47c18 0 32 15 32 33 0 12-6 23-17 29 4 21-17 34-35 22-8 11-24 13-35 4V49c16-11 36-7 45 6 3-5 6-8 10-8Z" fill="#F3ECFA" stroke={colors.ink} strokeWidth="3" />
          <Path d="M160 52v78" fill="none" {...line} />
          <Path d="M104 90c20-17 38-13 55 1" fill="none" {...lightLine} />
          <Path d="M216 90c-20-17-38-13-55 1" fill="none" {...lightLine} />
          <Path d="M54 90h35" fill="none" {...line} />
          <Path d="m79 82 10 8-10 8" fill="none" {...line} />
          <Path d="M266 90h-35" fill="none" {...line} />
          <Path d="m241 82-10 8 10 8" fill="none" {...line} />
          <Circle cx="160" cy="91" r="8" fill={colors.green} stroke={colors.ink} strokeWidth="2.5" />
        </>
      )}

      {name === 'connection' && (
        <>
          <Circle cx="78" cy="91" r="22" fill={colors.orange} stroke={colors.ink} strokeWidth="3" />
          <Circle cx="160" cy="43" r="22" fill={colors.green} stroke={colors.ink} strokeWidth="3" />
          <Circle cx="242" cy="91" r="22" fill={colors.purple} stroke={colors.ink} strokeWidth="3" />
          <Circle cx="160" cy="139" r="22" fill={colors.blue} stroke={colors.ink} strokeWidth="3" />
          <Line x1="98" y1="79" x2="140" y2="55" {...line} />
          <Line x1="180" y1="55" x2="222" y2="79" {...line} />
          <Line x1="222" y1="103" x2="180" y2="127" {...line} />
          <Line x1="140" y1="127" x2="98" y2="103" {...line} />
          <Circle cx="160" cy="91" r="10" fill={colors.yellow} stroke={colors.ink} strokeWidth="2.5" />
          <Line x1="160" y1="65" x2="160" y2="81" {...lightLine} />
          <Line x1="100" y1="91" x2="150" y2="91" {...lightLine} />
          <Line x1="170" y1="91" x2="220" y2="91" {...lightLine} />
          <Line x1="160" y1="101" x2="160" y2="117" {...lightLine} />
        </>
      )}

      {name === 'complete' && (
        <>
          <Path d="M76 42h74v96H76Z" fill={colors.surfaceSoft} stroke={colors.ink} strokeWidth="3" />
          <Path d="M170 42h74v96h-74Z" fill={colors.warmNote} stroke={colors.ink} strokeWidth="3" />
          <Path d="M150 42 113 72v66l37-18Z" fill={colors.purple} stroke={colors.ink} strokeWidth="3" />
          <Path d="M170 42 207 72v66l-37-18Z" fill={colors.green} stroke={colors.ink} strokeWidth="3" />
          <Circle cx="160" cy="93" r="23" fill={colors.yellow} stroke={colors.ink} strokeWidth="3" />
          <Path d="m149 94 8 8 15-18" fill="none" {...line} />
        </>
      )}
    </Svg>
  );
}

export function CurioTopicVisual({
  name,
  size = 96,
}: {
  name: TopicVisualName;
  size?: number;
}) {
  return (
    <Svg width={size} height={size} viewBox="0 0 96 96">
      <Rect x="8" y="8" width="80" height="80" rx="24" fill={colors.surfaceSoft} />
      {name === 'earth' && (
        <>
          <Circle cx="48" cy="45" r="25" fill="#EAF4FF" stroke={colors.ink} strokeWidth="3" />
          <Path d="M24 47c10-7 18-3 25 1 8 5 14 8 23 1" fill="none" {...lightLine} />
          <Path d="M48 20c-7 8-10 17-10 25s3 18 10 25M48 20c7 8 10 17 10 25s-3 18-10 25" fill="none" {...lightLine} />
          <Circle cx="70" cy="24" r="8" fill={colors.yellow} stroke={colors.ink} strokeWidth="2.5" />
        </>
      )}
      {name === 'life' && (
        <>
          <Path d="M22 66c4-35 28-48 53-43 0 30-20 52-48 52Z" fill="#E8F8EE" stroke={colors.ink} strokeWidth="3" />
          <Path d="M28 71c15-17 26-28 43-43" fill="none" {...line} />
          <Circle cx="35" cy="59" r="6" fill={colors.orange} stroke={colors.ink} strokeWidth="2.5" />
        </>
      )}
      {name === 'brain' && (
        <>
          <Path d="M46 23c-9-10-24-5-23 8-10 2-10 17-2 20-5 12 8 25 25 18Z" fill="#F3ECFA" stroke={colors.ink} strokeWidth="3" />
          <Path d="M50 23c9-10 24-5 23 8 10 2 10 17 2 20 5 12-8 25-25 18Z" fill="#F3ECFA" stroke={colors.ink} strokeWidth="3" />
          <Line x1="48" y1="23" x2="48" y2="69" {...lightLine} />
          <Circle cx="36" cy="45" r="6" fill={colors.purple} stroke={colors.ink} strokeWidth="2.5" />
        </>
      )}
      {name === 'cognition' && (
        <>
          <Rect x="22" y="24" width="52" height="48" rx="18" fill={colors.warmNote} stroke={colors.ink} strokeWidth="3" />
          <Path d="M31 55c12-15 23-19 34-23" fill="none" {...line} />
          <Circle cx="32" cy="56" r="6" fill={colors.orange} stroke={colors.ink} strokeWidth="2.5" />
          <Circle cx="64" cy="32" r="6" fill={colors.yellow} stroke={colors.ink} strokeWidth="2.5" />
          <Path d="m57 31 8 1-4 7" fill="none" {...lightLine} />
        </>
      )}
      {name === 'society' && (
        <>
          <Circle cx="25" cy="49" r="9" fill={colors.orange} stroke={colors.ink} strokeWidth="2.5" />
          <Circle cx="52" cy="26" r="9" fill={colors.green} stroke={colors.ink} strokeWidth="2.5" />
          <Circle cx="72" cy="58" r="9" fill={colors.purple} stroke={colors.ink} strokeWidth="2.5" />
          <Circle cx="43" cy="72" r="8" fill={colors.blue} stroke={colors.ink} strokeWidth="2.5" />
          <Line x1="32" y1="43" x2="45" y2="32" {...lightLine} />
          <Line x1="59" y1="33" x2="68" y2="49" {...lightLine} />
          <Line x1="64" y1="64" x2="51" y2="69" {...lightLine} />
          <Line x1="35" y1="65" x2="28" y2="57" {...lightLine} />
        </>
      )}
      {name === 'body' && (
        <>
          <Circle cx="48" cy="28" r="10" fill={colors.yellow} stroke={colors.ink} strokeWidth="3" />
          <Path d="M48 38v23M34 48l14 7 14-7M40 75l8-14 8 14" fill="none" {...line} />
          <Line x1="25" y1="75" x2="71" y2="75" stroke={colors.green} strokeWidth="5" strokeLinecap="round" />
        </>
      )}
      {name === 'technology' && (
        <>
          <Rect x="28" y="28" width="40" height="40" rx="10" fill="#EAF4FF" stroke={colors.ink} strokeWidth="3" />
          <Rect x="39" y="39" width="18" height="18" rx="5" fill={colors.blue} stroke={colors.ink} strokeWidth="2.5" />
          <Path d="M35 20v8M48 20v8M61 20v8M35 68v8M48 68v8M61 68v8M20 35h8M20 48h8M20 61h8M68 35h8M68 48h8M68 61h8" fill="none" {...lightLine} />
        </>
      )}
      {name === 'science' && (
        <>
          <Path d="m37 19 18 8-10 22-18-8Z" fill="#F3ECFA" stroke={colors.ink} strokeWidth="3" />
          <Path d="M48 47c18 4 21 22 10 28H27" fill="none" {...line} />
          <Line x1="28" y1="48" x2="44" y2="54" {...line} />
          <Line x1="23" y1="75" x2="69" y2="75" stroke={colors.green} strokeWidth="5" strokeLinecap="round" />
        </>
      )}
    </Svg>
  );
}

export function CurioEmptyStateIllustration({
  name,
  width = 220,
}: {
  name: EmptyStateIllustrationName;
  width?: number;
}) {
  const height = Math.round(width * 0.64);

  return (
    <Svg width={width} height={height} viewBox="0 0 220 140">
      {name === 'no-reviews' && (
        <>
          <Circle cx="110" cy="68" r="43" fill={colors.surfaceSoft} stroke={colors.ink} strokeWidth="3" />
          <Path d="M110 43v27l18 11" fill="none" {...line} />
          <Circle cx="110" cy="68" r="6" fill={colors.green} stroke={colors.ink} strokeWidth="2.5" />
          <Circle cx="58" cy="31" r="9" fill={colors.yellow} stroke={colors.ink} strokeWidth="2.5" />
        </>
      )}
      {name === 'no-saved' && (
        <>
          <Path d="M77 24h66v91l-33-22-33 22Z" fill={colors.warmNote} stroke={colors.ink} strokeWidth="3" />
          <Line x1="92" y1="43" x2="128" y2="43" stroke={colors.orange} strokeWidth="5" strokeLinecap="round" />
          <Circle cx="154" cy="102" r="10" fill={colors.green} stroke={colors.ink} strokeWidth="2.5" />
        </>
      )}
      {name === 'coming-soon' && (
        <>
          <Rect x="49" y="28" width="122" height="84" rx="24" fill={colors.surfaceSoft} stroke={colors.ink} strokeWidth="3" />
          <Path d="M80 87c18-35 42-44 67-37" fill="none" {...line} />
          <Circle cx="80" cy="87" r="8" fill={colors.orange} stroke={colors.ink} strokeWidth="2.5" />
          <Circle cx="147" cy="50" r="8" fill={colors.purple} stroke={colors.ink} strokeWidth="2.5" />
          <Path d="m138 48 10 2-5 9" fill="none" {...lightLine} />
        </>
      )}
      {name === 'offline' && (
        <>
          <Circle cx="110" cy="69" r="44" fill="#EAF4FF" stroke={colors.ink} strokeWidth="3" />
          <Path d="M76 69c19-18 49-18 68 0M88 82c12-11 32-11 44 0" fill="none" {...line} />
          <Circle cx="110" cy="97" r="5" fill={colors.blue} />
          <Line x1="72" y1="31" x2="151" y2="110" stroke={colors.orange} strokeWidth="6" strokeLinecap="round" />
        </>
      )}
    </Svg>
  );
}
