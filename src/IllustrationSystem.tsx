import Svg, { Circle, Line, Path, Rect } from 'react-native-svg';
import { colors } from './theme';

export type MechanismIllustrationName =
  | 'airflow' | 'temperature-difference' | 'structure-paths' | 'decentralized'
  | 'daily-cycle' | 'recall' | 'connection' | 'complete';

export type TopicVisualName =
  | 'earth' | 'life' | 'brain' | 'cognition'
  | 'society' | 'body' | 'technology' | 'science';

export type EmptyStateIllustrationName =
  | 'no-reviews' | 'no-saved' | 'coming-soon' | 'offline';

const line = {
  stroke: colors.ink,
  strokeWidth: 3.4,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

const lightLine = {
  stroke: colors.ink,
  strokeWidth: 2.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

export function CurioMechanismIllustration({ name, width = 320 }: { name: MechanismIllustrationName; width?: number }) {
  const height = Math.round(width * 0.56);
  return (
    <Svg width={width} height={height} viewBox="0 0 320 180">
      {name === 'airflow' && <>
        <Path d="M54 151 77 35h55l18 116Z" fill={colors.blueSoft} stroke={colors.ink} strokeWidth="3.4" strokeLinejoin="round" />
        <Path d="M170 151 188 24h55l23 127Z" fill={colors.orangeSoft} stroke={colors.ink} strokeWidth="3.4" strokeLinejoin="round" />
        <Path d="M101 134C82 108 84 76 108 50" fill="none" stroke={colors.blue} strokeWidth="7" strokeLinecap="round" />
        <Path d="m99 59 10-10-1 14" fill="none" {...line} />
        <Path d="M218 45c24 29 24 62 1 89" fill="none" stroke={colors.orange} strokeWidth="7" strokeLinecap="round" />
        <Path d="m228 126-10 10 1-14" fill="none" {...line} />
        <Path d="M132 67c17-9 36-9 55 0M139 111c15 8 30 8 44 0" fill="none" {...lightLine} />
        <Circle cx="160" cy="89" r="11" fill={colors.green} stroke={colors.ink} strokeWidth="2.8" />
      </>}

      {name === 'temperature-difference' && <>
        <Path d="M38 32h92v116H38Z" fill={colors.orangeSoft} stroke={colors.ink} strokeWidth="3.4" strokeLinejoin="round" />
        <Path d="M190 32h92v116h-92Z" fill={colors.blueSoft} stroke={colors.ink} strokeWidth="3.4" strokeLinejoin="round" />
        <Circle cx="84" cy="72" r="22" fill={colors.orange} stroke={colors.ink} strokeWidth="3" />
        <Circle cx="236" cy="108" r="22" fill={colors.blue} stroke={colors.ink} strokeWidth="3" />
        <Path d="M127 59c35-14 66-7 88 17" fill="none" stroke={colors.orange} strokeWidth="6" strokeLinecap="round" />
        <Path d="m205 68 11 9-14 1" fill="none" {...line} />
        <Path d="M192 126c-32 14-63 7-86-18" fill="none" stroke={colors.blue} strokeWidth="6" strokeLinecap="round" />
        <Path d="m117 117-11-10 14-1" fill="none" {...line} />
      </>}

      {name === 'structure-paths' && <>
        <Rect x="45" y="22" width="230" height="136" rx="32" fill={colors.yellowSoft} stroke={colors.ink} strokeWidth="3.4" />
        <Path d="M86 140V57c0-11 9-20 20-20h25v103" fill={colors.blueSoft} stroke={colors.ink} strokeWidth="3.2" strokeLinejoin="round" />
        <Path d="M149 140V78c0-11 9-20 20-20h18v82" fill={colors.greenSoft} stroke={colors.ink} strokeWidth="3.2" strokeLinejoin="round" />
        <Path d="M205 140V47h28v93" fill={colors.orangeSoft} stroke={colors.ink} strokeWidth="3.2" strokeLinejoin="round" />
        <Path d="M87 122V83" stroke={colors.blue} strokeWidth="7" fill="none" strokeLinecap="round" />
        <Path d="m80 92 7-11 7 11" fill="none" {...line} />
        <Path d="M219 61v50" stroke={colors.orange} strokeWidth="7" fill="none" strokeLinecap="round" />
        <Path d="m212 101 7 11 7-11" fill="none" {...line} />
        <Path d="M131 78h18M187 95h18" fill="none" {...lightLine} />
        <Circle cx="168" cy="95" r="8" fill={colors.purple} stroke={colors.ink} strokeWidth="2.5" />
      </>}

      {name === 'decentralized' && <>
        <Circle cx="160" cy="90" r="64" fill={colors.greenSoft} stroke={colors.ink} strokeWidth="3.4" />
        <Path d="M111 70 153 47l50 20-7 54-58 7-27-58Z" fill="none" stroke={colors.ink} strokeWidth="2.6" strokeLinejoin="round" />
        <Circle cx="111" cy="70" r="13" fill={colors.orange} stroke={colors.ink} strokeWidth="2.8" />
        <Circle cx="153" cy="47" r="12" fill={colors.green} stroke={colors.ink} strokeWidth="2.8" />
        <Circle cx="203" cy="67" r="13" fill={colors.purple} stroke={colors.ink} strokeWidth="2.8" />
        <Circle cx="196" cy="121" r="12" fill={colors.blue} stroke={colors.ink} strokeWidth="2.8" />
        <Circle cx="138" cy="128" r="12" fill={colors.yellow} stroke={colors.ink} strokeWidth="2.8" />
        <Path d="M75 51C42 78 43 118 76 142M245 142c33-27 32-67-1-91" fill="none" {...line} />
        <Path d="m66 133 11 9 1-14M254 60l-11-9-1 14" fill="none" {...line} />
      </>}

      {name === 'daily-cycle' && <>
        <Circle cx="160" cy="90" r="62" fill={colors.purpleSoft} stroke={colors.ink} strokeWidth="3.4" />
        <Circle cx="81" cy="47" r="24" fill={colors.yellow} stroke={colors.ink} strokeWidth="3" />
        <Path d="M243 30c17 6 25 22 18 38-18 1-32-12-32-29 4-4 8-7 14-9Z" fill={colors.purple} stroke={colors.ink} strokeWidth="3" />
        <Path d="M120 58c24-19 57-19 81 0" fill="none" stroke={colors.orange} strokeWidth="6" strokeLinecap="round" />
        <Path d="m191 49 11 9-13 2" fill="none" {...line} />
        <Path d="M200 122c-24 19-57 19-81 0" fill="none" stroke={colors.blue} strokeWidth="6" strokeLinecap="round" />
        <Path d="m130 131-11-9 13-2" fill="none" {...line} />
        <Rect x="143" y="72" width="34" height="38" rx="10" fill={colors.surface} stroke={colors.ink} strokeWidth="2.6" />
      </>}

      {name === 'recall' && <>
        <Path d="M108 45c-18 0-32 15-32 33 0 13 7 24 18 30-4 22 18 36 37 23 8 12 25 14 37 4V47c-17-11-37-7-46 7-3-6-8-9-14-9Z" fill={colors.orangeSoft} stroke={colors.ink} strokeWidth="3.4" />
        <Path d="M212 45c18 0 32 15 32 33 0 13-7 24-18 30 4 22-18 36-37 23-8 12-25 14-37 4V47c17-11 37-7 46 7 3-6 8-9 14-9Z" fill={colors.purpleSoft} stroke={colors.ink} strokeWidth="3.4" />
        <Path d="M160 51v81" fill="none" {...line} />
        <Path d="M56 90h36M264 90h-36" fill="none" stroke={colors.blue} strokeWidth="6" strokeLinecap="round" />
        <Path d="m82 81 11 9-11 9M238 81l-11 9 11 9" fill="none" {...line} />
        <Circle cx="160" cy="91" r="10" fill={colors.green} stroke={colors.ink} strokeWidth="2.8" />
      </>}

      {name === 'connection' && <>
        <Path d="M78 91 160 43l82 48-82 48Z" fill={colors.blueSoft} stroke={colors.ink} strokeWidth="3" strokeLinejoin="round" />
        <Circle cx="78" cy="91" r="24" fill={colors.orange} stroke={colors.ink} strokeWidth="3" />
        <Circle cx="160" cy="43" r="24" fill={colors.green} stroke={colors.ink} strokeWidth="3" />
        <Circle cx="242" cy="91" r="24" fill={colors.purple} stroke={colors.ink} strokeWidth="3" />
        <Circle cx="160" cy="139" r="24" fill={colors.blue} stroke={colors.ink} strokeWidth="3" />
        <Circle cx="160" cy="91" r="12" fill={colors.yellow} stroke={colors.ink} strokeWidth="2.8" />
        <Path d="M160 67v12M102 91h46M172 91h46M160 103v12" fill="none" {...lightLine} />
      </>}

      {name === 'complete' && <>
        <Path d="M70 38h82v102H70Z" fill={colors.orangeSoft} stroke={colors.ink} strokeWidth="3.4" />
        <Path d="M168 38h82v102h-82Z" fill={colors.greenSoft} stroke={colors.ink} strokeWidth="3.4" />
        <Path d="M152 38 111 73v67l41-19Z" fill={colors.purple} stroke={colors.ink} strokeWidth="3.4" />
        <Path d="M168 38 209 73v67l-41-19Z" fill={colors.green} stroke={colors.ink} strokeWidth="3.4" />
        <Circle cx="160" cy="92" r="25" fill={colors.yellow} stroke={colors.ink} strokeWidth="3.2" />
        <Path d="m148 93 9 9 17-20" fill="none" {...line} />
      </>}
    </Svg>
  );
}

export function CurioTopicVisual({ name, size = 96 }: { name: TopicVisualName; size?: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 96 96">
      {name === 'earth' && <>
        <Circle cx="48" cy="48" r="34" fill={colors.blueSoft} stroke={colors.ink} strokeWidth="3.4" />
        <Path d="M18 50c13-10 24-6 34 0 10 6 18 9 28 1" fill="none" stroke={colors.blue} strokeWidth="4" strokeLinecap="round" />
        <Path d="M48 14c-9 10-13 21-13 34s4 25 13 34M48 14c9 10 13 21 13 34s-4 25-13 34" fill="none" {...lightLine} />
        <Circle cx="73" cy="20" r="9" fill={colors.yellow} stroke={colors.ink} strokeWidth="2.5" />
      </>}

      {name === 'life' && <>
        <Path d="M15 69c5-43 35-58 66-52 0 37-25 64-59 64Z" fill={colors.green} stroke={colors.ink} strokeWidth="3.4" strokeLinejoin="round" />
        <Path d="M23 76c19-22 33-36 54-54" fill="none" stroke={colors.ink} strokeWidth="3.4" strokeLinecap="round" />
        <Circle cx="32" cy="62" r="7" fill={colors.yellow} stroke={colors.ink} strokeWidth="2.5" />
      </>}

      {name === 'brain' && <>
        <Path d="M46 17c-11-12-29-6-28 9-12 2-12 20-2 24-6 15 10 30 30 22Z" fill={colors.purple} stroke={colors.ink} strokeWidth="3.4" />
        <Path d="M50 17c11-12 29-6 28 9 12 2 12 20 2 24 6 15-10 30-30 22Z" fill="#D9B6F4" stroke={colors.ink} strokeWidth="3.4" />
        <Line x1="48" y1="18" x2="48" y2="72" {...lightLine} />
        <Circle cx="34" cy="46" r="7" fill={colors.yellow} stroke={colors.ink} strokeWidth="2.5" />
      </>}

      {name === 'cognition' && <>
        <Path d="M18 52c0-21 13-35 30-35s30 14 30 35c0 10-4 18-11 25H29C22 70 18 62 18 52Z" fill={colors.orangeSoft} stroke={colors.ink} strokeWidth="3.4" />
        <Path d="M27 60c14-18 28-29 42-36" fill="none" stroke={colors.orange} strokeWidth="5" strokeLinecap="round" />
        <Circle cx="29" cy="60" r="7" fill={colors.orange} stroke={colors.ink} strokeWidth="2.5" />
        <Circle cx="68" cy="25" r="7" fill={colors.yellow} stroke={colors.ink} strokeWidth="2.5" />
      </>}

      {name === 'society' && <>
        <Circle cx="23" cy="49" r="11" fill={colors.orange} stroke={colors.ink} strokeWidth="3" />
        <Circle cx="53" cy="22" r="11" fill={colors.green} stroke={colors.ink} strokeWidth="3" />
        <Circle cx="75" cy="58" r="11" fill={colors.purple} stroke={colors.ink} strokeWidth="3" />
        <Circle cx="42" cy="77" r="10" fill={colors.blue} stroke={colors.ink} strokeWidth="3" />
        <Path d="M31 42 45 29M60 31l10 18M65 64 51 72M34 69l-7-11" fill="none" {...line} />
      </>}

      {name === 'body' && <>
        <Circle cx="48" cy="25" r="12" fill={colors.yellow} stroke={colors.ink} strokeWidth="3.4" />
        <Path d="M48 38v25M31 48l17 8 17-8M38 81l10-18 10 18" fill="none" {...line} />
        <Line x1="19" y1="81" x2="77" y2="81" stroke={colors.green} strokeWidth="7" strokeLinecap="round" />
      </>}

      {name === 'technology' && <>
        <Rect x="23" y="23" width="50" height="50" rx="12" fill={colors.blueSoft} stroke={colors.ink} strokeWidth="3.4" />
        <Rect x="36" y="36" width="24" height="24" rx="6" fill={colors.blue} stroke={colors.ink} strokeWidth="3" />
        <Path d="M31 13v10M48 13v10M65 13v10M31 73v10M48 73v10M65 73v10M13 31h10M13 48h10M13 65h10M73 31h10M73 48h10M73 65h10" fill="none" {...lightLine} />
      </>}

      {name === 'science' && <>
        <Path d="m34 14 22 10-12 27-22-10Z" fill={colors.purple} stroke={colors.ink} strokeWidth="3.4" />
        <Path d="M48 49c22 5 26 27 12 35H21" fill="none" {...line} />
        <Line x1="24" y1="51" x2="43" y2="58" {...line} />
        <Line x1="17" y1="84" x2="77" y2="84" stroke={colors.green} strokeWidth="7" strokeLinecap="round" />
      </>}
    </Svg>
  );
}

export function CurioEmptyStateIllustration({ name, width = 220 }: { name: EmptyStateIllustrationName; width?: number }) {
  const height = Math.round(width * 0.64);
  return (
    <Svg width={width} height={height} viewBox="0 0 220 140">
      {name === 'no-reviews' && <>
        <Circle cx="110" cy="68" r="45" fill={colors.purpleSoft} stroke={colors.ink} strokeWidth="3.2" />
        <Path d="M110 42v28l19 12" fill="none" {...line} />
        <Circle cx="110" cy="68" r="7" fill={colors.green} stroke={colors.ink} strokeWidth="2.5" />
        <Circle cx="58" cy="31" r="10" fill={colors.yellow} stroke={colors.ink} strokeWidth="2.5" />
      </>}
      {name === 'no-saved' && <>
        <Path d="M76 22h68v94l-34-23-34 23Z" fill={colors.yellowSoft} stroke={colors.ink} strokeWidth="3.2" />
        <Line x1="91" y1="43" x2="129" y2="43" stroke={colors.orange} strokeWidth="6" strokeLinecap="round" />
        <Circle cx="155" cy="102" r="11" fill={colors.green} stroke={colors.ink} strokeWidth="2.5" />
      </>}
      {name === 'coming-soon' && <>
        <Rect x="47" y="26" width="126" height="88" rx="26" fill={colors.orangeSoft} stroke={colors.ink} strokeWidth="3.2" />
        <Path d="M79 89c19-37 44-46 70-39" fill="none" stroke={colors.orange} strokeWidth="6" strokeLinecap="round" />
        <Circle cx="79" cy="89" r="9" fill={colors.orange} stroke={colors.ink} strokeWidth="2.5" />
        <Circle cx="149" cy="50" r="9" fill={colors.purple} stroke={colors.ink} strokeWidth="2.5" />
      </>}
      {name === 'offline' && <>
        <Circle cx="110" cy="69" r="46" fill={colors.blueSoft} stroke={colors.ink} strokeWidth="3.2" />
        <Path d="M76 69c19-18 49-18 68 0M88 82c12-11 32-11 44 0" fill="none" stroke={colors.blue} strokeWidth="5" strokeLinecap="round" />
        <Circle cx="110" cy="97" r="6" fill={colors.blue} />
        <Line x1="72" y1="31" x2="151" y2="110" stroke={colors.orange} strokeWidth="7" strokeLinecap="round" />
      </>}
    </Svg>
  );
}
