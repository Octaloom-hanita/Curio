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
  strokeWidth: 3.2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

const lightLine = {
  stroke: colors.ink,
  strokeWidth: 2.4,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

function MoundShell({
  fill = colors.yellowSoft,
  stroke = colors.ink,
}: {
  fill?: string;
  stroke?: string;
}) {
  return (
    <>
      <Path
        d="M36 150C46 119 50 80 69 56c18-23 43-34 72-34 39 0 67 14 87 40 20 26 30 60 56 88Z"
        fill={fill}
        stroke={stroke}
        strokeWidth="3.2"
        strokeLinejoin="round"
      />
      <Path
        d="M28 151h264"
        fill="none"
        stroke={colors.ink}
        strokeWidth="3.2"
        strokeLinecap="round"
      />
    </>
  );
}

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
          <MoundShell fill={colors.yellowSoft} />
          <Path
            d="M82 145c3-35 2-66 22-91 11-13 24-18 39-18"
            fill="none"
            stroke={colors.blue}
            strokeWidth="10"
            strokeLinecap="round"
          />
          <Path d="m131 29 14 7-13 9" fill="none" {...line} />
          <Path
            d="M214 41c19 28 20 63 13 103"
            fill="none"
            stroke={colors.orange}
            strokeWidth="10"
            strokeLinecap="round"
          />
          <Path d="m219 132 8 14 9-13" fill="none" {...line} />
          <Path
            d="M118 66c17 11 32 16 48 16 14 0 27-4 40-11M106 111c20-9 38-12 56-10 19 2 35 8 52 18"
            fill="none"
            {...lightLine}
          />
          <Circle cx="166" cy="83" r="11" fill={colors.green} stroke={colors.ink} strokeWidth="2.6" />
          <Circle cx="74" cy="142" r="8" fill={colors.blue} stroke={colors.ink} strokeWidth="2.4" />
          <Circle cx="231" cy="143" r="8" fill={colors.orange} stroke={colors.ink} strokeWidth="2.4" />
        </>
      )}

      {name === 'temperature-difference' && (
        <>
          <MoundShell fill={colors.surface} />
          <Path
            d="M42 148C53 111 55 76 78 52c15-16 31-24 50-27v123Z"
            fill={colors.blueSoft}
          />
          <Path
            d="M128 25c39-4 71 10 94 39 19 24 29 57 55 84H128Z"
            fill={colors.orangeSoft}
          />
          <Path
            d="M36 150C46 119 50 80 69 56c18-23 43-34 72-34 39 0 67 14 87 40 20 26 30 60 56 88Z"
            fill="none"
            stroke={colors.ink}
            strokeWidth="3.2"
            strokeLinejoin="round"
          />
          <Circle cx="231" cy="38" r="19" fill={colors.orange} stroke={colors.ink} strokeWidth="2.8" />
          <Circle cx="84" cy="123" r="16" fill={colors.blue} stroke={colors.ink} strokeWidth="2.8" />
          <Path d="M109 117c24-14 46-17 68-10 15 5 29 13 42 25" fill="none" stroke={colors.blue} strokeWidth="7" strokeLinecap="round" />
          <Path d="m207 121 13 12-17 1" fill="none" {...line} />
          <Path d="M198 62c-18 10-34 13-50 10-14-2-26-8-38-17" fill="none" stroke={colors.orange} strokeWidth="7" strokeLinecap="round" />
          <Path d="m121 50-13 5 9 11" fill="none" {...line} />
        </>
      )}

      {name === 'structure-paths' && (
        <>
          <MoundShell fill={colors.orangeSoft} />
          <Path
            d="M92 146V83c0-18 12-31 29-31h16v94"
            fill={colors.blueSoft}
            stroke={colors.ink}
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <Path
            d="M143 146V64c0-16 11-27 26-27h13v109"
            fill={colors.greenSoft}
            stroke={colors.ink}
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <Path
            d="M188 146V91c0-15 10-25 24-25h12v80"
            fill={colors.purpleSoft}
            stroke={colors.ink}
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <Path d="M92 103h51M143 87h45M182 115h42" fill="none" {...lightLine} />
          <Path d="M92 135V93" stroke={colors.blue} strokeWidth="8" fill="none" strokeLinecap="round" />
          <Path d="m85 102 7-11 7 11" fill="none" {...line} />
          <Path d="M224 78v48" stroke={colors.orange} strokeWidth="8" fill="none" strokeLinecap="round" />
          <Path d="m217 117 7 11 7-11" fill="none" {...line} />
          <Circle cx="164" cy="88" r="8" fill={colors.yellow} stroke={colors.ink} strokeWidth="2.4" />
        </>
      )}

      {name === 'decentralized' && (
        <>
          <MoundShell fill={colors.greenSoft} />
          <Path d="M93 89 129 59l38 14 36-18 28 35-19 36-44 7-38-19Z" fill="none" stroke={colors.ink} strokeWidth="2.3" strokeLinejoin="round" />
          <Circle cx="93" cy="89" r="12" fill={colors.orange} stroke={colors.ink} strokeWidth="2.6" />
          <Circle cx="129" cy="59" r="11" fill={colors.green} stroke={colors.ink} strokeWidth="2.6" />
          <Circle cx="167" cy="73" r="11" fill={colors.yellow} stroke={colors.ink} strokeWidth="2.6" />
          <Circle cx="203" cy="55" r="12" fill={colors.purple} stroke={colors.ink} strokeWidth="2.6" />
          <Circle cx="231" cy="90" r="11" fill={colors.blue} stroke={colors.ink} strokeWidth="2.6" />
          <Circle cx="212" cy="126" r="11" fill={colors.orange} stroke={colors.ink} strokeWidth="2.6" />
          <Circle cx="168" cy="133" r="11" fill={colors.green} stroke={colors.ink} strokeWidth="2.6" />
          <Circle cx="130" cy="114" r="11" fill={colors.purple} stroke={colors.ink} strokeWidth="2.6" />
          <Path d="M65 67C49 89 51 115 70 135M253 136c19-22 19-47 1-69" fill="none" {...line} />
          <Path d="m61 127 10 9 2-13M262 76l-9-10-3 13" fill="none" {...line} />
        </>
      )}

      {name === 'daily-cycle' && (
        <>
          <MoundShell fill={colors.purpleSoft} />
          <Circle cx="73" cy="42" r="22" fill={colors.yellow} stroke={colors.ink} strokeWidth="2.8" />
          <Path d="M247 27c17 5 25 20 20 35-17 2-31-9-32-25 3-4 7-8 12-10Z" fill={colors.purple} stroke={colors.ink} strokeWidth="2.8" />
          <Path d="M104 59c30-20 70-20 103 0" fill="none" stroke={colors.orange} strokeWidth="7" strokeLinecap="round" />
          <Path d="m194 49 14 10-16 2" fill="none" {...line} />
          <Path d="M208 121c-31 20-71 20-104 0" fill="none" stroke={colors.blue} strokeWidth="7" strokeLinecap="round" />
          <Path d="m117 131-14-10 16-2" fill="none" {...line} />
          <Path d="M142 145V87c0-14 9-24 23-24h9v82" fill={colors.surface} stroke={colors.ink} strokeWidth="2.8" />
        </>
      )}

      {name === 'recall' && (
        <>
          <Path d="M86 46c-17 0-30 14-30 31 0 12 6 22 16 28-4 21 17 34 35 22 8 11 23 13 34 4V48c-15-10-34-7-43 6-3-5-7-8-12-8Z" fill={colors.orangeSoft} stroke={colors.ink} strokeWidth="3.2" />
          <Path d="M234 46c17 0 30 14 30 31 0 12-6 22-16 28 4 21-17 34-35 22-8 11-23 13-34 4V48c15-10 34-7 43 6 3-5 7-8 12-8Z" fill={colors.purpleSoft} stroke={colors.ink} strokeWidth="3.2" />
          <Path d="M160 50v80" fill="none" {...line} />
          <Path d="M45 89h43M275 89h-43" fill="none" stroke={colors.blue} strokeWidth="7" strokeLinecap="round" />
          <Path d="m77 79 12 10-12 10M243 79l-12 10 12 10" fill="none" {...line} />
          <Circle cx="160" cy="90" r="11" fill={colors.green} stroke={colors.ink} strokeWidth="2.6" />
          <Circle cx="160" cy="90" r="24" fill="none" stroke={colors.yellow} strokeWidth="5" />
        </>
      )}

      {name === 'connection' && (
        <>
          <Path d="M66 93 160 37l94 56-94 54Z" fill={colors.blueSoft} stroke={colors.ink} strokeWidth="3" strokeLinejoin="round" />
          <Circle cx="66" cy="93" r="23" fill={colors.orange} stroke={colors.ink} strokeWidth="3" />
          <Circle cx="160" cy="37" r="23" fill={colors.green} stroke={colors.ink} strokeWidth="3" />
          <Circle cx="254" cy="93" r="23" fill={colors.purple} stroke={colors.ink} strokeWidth="3" />
          <Circle cx="160" cy="147" r="23" fill={colors.blue} stroke={colors.ink} strokeWidth="3" />
          <Circle cx="160" cy="93" r="13" fill={colors.yellow} stroke={colors.ink} strokeWidth="2.8" />
          <Path d="M160 61v18M89 93h57M174 93h57M160 107v17" fill="none" {...lightLine} />
        </>
      )}

      {name === 'complete' && (
        <>
          <Path d="M76 35c-26 0-46 19-46 45s20 45 46 45V104c-14 0-24-10-24-24s10-24 24-24Z" fill={colors.ink} />
          <Path d="M72 61 145 41v79l-73-18Z" fill={colors.purple} stroke={colors.ink} strokeWidth="3" strokeLinejoin="round" />
          <Path d="M137 45 232 18v116l-95-28Z" fill={colors.orange} stroke={colors.ink} strokeWidth="3" strokeLinejoin="round" />
          <Path d="m57 104 80 20-43 27-65-19Z" fill={colors.green} stroke={colors.ink} strokeWidth="3" strokeLinejoin="round" />
          <Circle cx="246" cy="109" r="27" fill={colors.yellow} stroke={colors.ink} strokeWidth="3" />
          <Path d="m233 110 9 9 18-22" fill="none" {...line} />
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
      {name === 'earth' && (
        <>
          <Circle cx="47" cy="48" r="33" fill={colors.blue} stroke={colors.ink} strokeWidth="3" />
          <Path d="M21 39c8-9 14-13 22-12 2 8 8 12 15 14-4 7-4 14 1 20-8 3-15 1-21-5-7-6-12-10-17-17Z" fill={colors.green} stroke={colors.ink} strokeWidth="2.2" strokeLinejoin="round" />
          <Path d="M58 22c8 1 15 6 19 14-6 4-10 9-12 16-6-4-11-10-15-18 1-5 4-9 8-12Z" fill={colors.yellowSoft} stroke={colors.ink} strokeWidth="2.2" strokeLinejoin="round" />
          <Circle cx="75" cy="20" r="9" fill={colors.yellow} stroke={colors.ink} strokeWidth="2.4" />
        </>
      )}

      {name === 'life' && (
        <>
          <Path d="M13 73c5-46 36-62 69-55 0 39-27 68-63 67Z" fill={colors.green} stroke={colors.ink} strokeWidth="3.2" strokeLinejoin="round" />
          <Path d="M21 79c20-23 35-38 57-57" fill="none" {...line} />
          <Circle cx="31" cy="64" r="7" fill={colors.yellow} stroke={colors.ink} strokeWidth="2.5" />
          <Path d="m57 31 10-5-4 11" fill={colors.orange} stroke={colors.ink} strokeWidth="2.2" strokeLinejoin="round" />
        </>
      )}

      {name === 'brain' && (
        <>
          <Path
            d="M48 14C42 8 32 9 28 14c-8-2-14 4-13 12-7 4-6 14 0 18-3 8 3 17 11 17 2 8 12 13 22 7 10 6 20 1 22-7 8 0 14-9 11-17 6-4 7-14 0-18 1-8-5-14-13-12-4-5-14-6-20 0Z"
            fill={colors.purple}
            stroke={colors.ink}
            strokeWidth="3.4"
            strokeLinejoin="round"
          />
          <Path d="M48 15v53" fill="none" stroke={colors.ink} strokeWidth="3" strokeLinecap="round" />
          <Path d="M28 23c8-4 14 2 13 9M19 36c8-3 16 1 19 8M25 52c6-5 13-3 16 3" fill="none" {...lightLine} />
          <Path d="M68 23c-8-4-14 2-13 9M77 36c-8-3-16 1-19 8M71 52c-6-5-13-3-16 3" fill="none" {...lightLine} />
          <Circle cx="29" cy="31" r="5.5" fill={colors.yellow} stroke={colors.ink} strokeWidth="2.2" />
        </>
      )}

      {name === 'cognition' && (
        <>
          <Path d="M17 57c0-24 13-40 32-40 18 0 31 14 31 34 0 13-5 22-14 30H31C22 74 17 66 17 57Z" fill={colors.orangeSoft} stroke={colors.ink} strokeWidth="3.2" />
          <Path d="M26 65c16-21 31-34 47-43" fill="none" stroke={colors.orange} strokeWidth="6" strokeLinecap="round" />
          <Circle cx="27" cy="65" r="7" fill={colors.orange} stroke={colors.ink} strokeWidth="2.4" />
          <Circle cx="72" cy="23" r="8" fill={colors.yellow} stroke={colors.ink} strokeWidth="2.4" />
          <Path d="m63 22 10 1-5 9" fill="none" {...lightLine} />
        </>
      )}

      {name === 'society' && (
        <>
          <Path d="M21 51 52 21l24 37-34 22Z" fill={colors.blueSoft} stroke={colors.ink} strokeWidth="2.6" strokeLinejoin="round" />
          <Circle cx="21" cy="51" r="11" fill={colors.orange} stroke={colors.ink} strokeWidth="2.8" />
          <Circle cx="52" cy="21" r="11" fill={colors.green} stroke={colors.ink} strokeWidth="2.8" />
          <Circle cx="76" cy="58" r="11" fill={colors.purple} stroke={colors.ink} strokeWidth="2.8" />
          <Circle cx="42" cy="80" r="10" fill={colors.blue} stroke={colors.ink} strokeWidth="2.8" />
          <Circle cx="50" cy="51" r="7" fill={colors.yellow} stroke={colors.ink} strokeWidth="2.4" />
        </>
      )}

      {name === 'body' && (
        <>
          <Circle cx="48" cy="23" r="11" fill={colors.yellow} stroke={colors.ink} strokeWidth="3" />
          <Path d="M31 40c7-6 27-6 34 0l5 20-12 21H38L26 60Z" fill={colors.orangeSoft} stroke={colors.ink} strokeWidth="3" strokeLinejoin="round" />
          <Path d="M48 39v41M28 53h40" fill="none" {...lightLine} />
          <Path d="M42 52c0-5 3-9 7-9 5 0 8 4 8 9 0 7-6 11-8 13-3-2-7-6-7-13Z" fill={colors.orange} stroke={colors.ink} strokeWidth="2.2" />
        </>
      )}

      {name === 'technology' && (
        <>
          <Rect x="22" y="22" width="52" height="52" rx="13" fill={colors.blue} stroke={colors.ink} strokeWidth="3" />
          <Rect x="36" y="36" width="24" height="24" rx="6" fill={colors.yellow} stroke={colors.ink} strokeWidth="2.6" />
          <Path d="M31 12v10M48 12v10M65 12v10M31 74v10M48 74v10M65 74v10M12 31h10M12 48h10M12 65h10M74 31h10M74 48h10M74 65h10" fill="none" {...lightLine} />
        </>
      )}

      {name === 'science' && (
        <>
          <Path d="m34 14 23 10-12 28-23-10Z" fill={colors.purple} stroke={colors.ink} strokeWidth="3.2" />
          <Path d="M49 50c22 5 27 27 12 35H20" fill="none" {...line} />
          <Path d="M25 51 44 58" fill="none" {...line} />
          <Path d="M18 84h59" fill="none" stroke={colors.green} strokeWidth="7" strokeLinecap="round" />
          <Circle cx="65" cy="34" r="8" fill={colors.yellow} stroke={colors.ink} strokeWidth="2.4" />
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
          <Circle cx="110" cy="68" r="45" fill={colors.purpleSoft} stroke={colors.ink} strokeWidth="3.2" />
          <Path d="M110 42v28l19 12" fill="none" {...line} />
          <Circle cx="110" cy="68" r="7" fill={colors.green} stroke={colors.ink} strokeWidth="2.5" />
          <Circle cx="58" cy="31" r="10" fill={colors.yellow} stroke={colors.ink} strokeWidth="2.5" />
        </>
      )}
      {name === 'no-saved' && (
        <>
          <Path d="M76 22h68v94l-34-23-34 23Z" fill={colors.yellowSoft} stroke={colors.ink} strokeWidth="3.2" />
          <Line x1="91" y1="43" x2="129" y2="43" stroke={colors.orange} strokeWidth="6" strokeLinecap="round" />
          <Circle cx="155" cy="102" r="11" fill={colors.green} stroke={colors.ink} strokeWidth="2.5" />
        </>
      )}
      {name === 'coming-soon' && (
        <>
          <Rect x="47" y="26" width="126" height="88" rx="26" fill={colors.orangeSoft} stroke={colors.ink} strokeWidth="3.2" />
          <Path d="M79 89c19-37 44-46 70-39" fill="none" stroke={colors.orange} strokeWidth="6" strokeLinecap="round" />
          <Circle cx="79" cy="89" r="9" fill={colors.orange} stroke={colors.ink} strokeWidth="2.5" />
          <Circle cx="149" cy="50" r="9" fill={colors.purple} stroke={colors.ink} strokeWidth="2.5" />
        </>
      )}
      {name === 'offline' && (
        <>
          <Circle cx="110" cy="69" r="46" fill={colors.blueSoft} stroke={colors.ink} strokeWidth="3.2" />
          <Path d="M76 69c19-18 49-18 68 0M88 82c12-11 32-11 44 0" fill="none" stroke={colors.blue} strokeWidth="5" strokeLinecap="round" />
          <Circle cx="110" cy="97" r="6" fill={colors.blue} />
          <Line x1="72" y1="31" x2="151" y2="110" stroke={colors.orange} strokeWidth="7" strokeLinecap="round" />
        </>
      )}
    </Svg>
  );
}
