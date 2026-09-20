import Svg, { Defs, G, LinearGradient, Path, Stop } from 'react-native-svg';
import { colors } from './theme';

const wordmarkPath =
  'M204 62L203 99L222 99L222 62Z ' +
  'M101 62L102 99L155 99L156 62L138 62L138 89L136 94L131 98L126 98L120 93L120 63L118 61Z ' +
  'M228 80L227 89L230 99L284 99L284 74L276 65L263 60L252 60L239 65L232 72Z ' +
  'M254 76L262 77L268 84L267 93L259 99L252 98L246 91L246 84L248 80Z ' +
  'M196 60L188 61L182 66L180 65L180 62L162 63L162 99L181 99L181 86L183 82L189 78L198 77L198 62Z ' +
  'M31 58L27 68L26 82L28 91L33 99L96 99L96 93L82 86L80 86L75 92L70 95L58 95L50 89L46 80L48 69L52 64L59 60L72 61L80 69L97 59L95 54L86 46L73 41L56 41L40 48Z ' +
  'M208 32L203 36L201 40L202 49L209 54L216 54L223 47L223 38L220 34L216 32Z';

function OpeningMark({ mono = false }: { mono?: boolean }) {
  const shell = colors.ink;
  return (
    <>
      <Defs>
        <LinearGradient id="curioShell" x1="0" y1="0" x2="1" y2="1">
          <Stop offset="0" stopColor={shell} />
          <Stop offset="1" stopColor={mono ? shell : '#20304A'} />
        </LinearGradient>
        <LinearGradient id="curioPurple" x1="0" y1="0" x2="1" y2="1">
          <Stop offset="0" stopColor={mono ? shell : '#8E53D4'} />
          <Stop offset="0.55" stopColor={mono ? shell : '#C89BEC'} />
          <Stop offset="1" stopColor={mono ? shell : '#EEF3FF'} />
        </LinearGradient>
        <LinearGradient id="curioOrange" x1="0" y1="0" x2="0.75" y2="1">
          <Stop offset="0" stopColor={mono ? shell : colors.yellow} />
          <Stop offset="0.5" stopColor={mono ? shell : '#FFB128'} />
          <Stop offset="1" stopColor={mono ? shell : colors.orange} />
        </LinearGradient>
        <LinearGradient id="curioGreen" x1="0" y1="0" x2="1" y2="0.55">
          <Stop offset="0" stopColor={mono ? shell : '#38DFA0'} stopOpacity="1" />
          <Stop offset="0.55" stopColor={mono ? shell : '#8CECC4'} stopOpacity="0.72" />
          <Stop offset="1" stopColor={mono ? shell : '#CFF8E8'} stopOpacity="0.14" />
        </LinearGradient>
      </Defs>

      <Path
        d="M110 31L80 31L61 36L42 47L32 59L24 82L25 102L35 124L48 135L70 142L110 130L107 127L77 119L65 113L66 64L109 48Z"
        fill={mono ? shell : 'url(#curioShell)'}
      />
      <Path
        d="M110 49L76 60L66 65L66 92L68 99L76 101L93 100L97 98L101 99L102 60L110 52Z"
        fill={mono ? shell : 'url(#curioPurple)'}
      />
      <Path
        d="M66 111L68 115L103 125L111 129L107 133L70 142L69 143L71 144L139 143L138 137L112 128L110 120L102 115L101 110Z"
        fill={mono ? shell : 'url(#curioGreen)'}
      />
      <Path
        d="M102 57 111 52 110 120 102 116Z"
        fill={colors.canvas}
      />
      <Path
        d="M138 40L111 52L110 111L112 120L139 129Z"
        fill={mono ? shell : 'url(#curioOrange)'}
      />
    </>
  );
}

export function CurioMark({
  size = 32,
  mono = false,
}: {
  size?: number;
  mono?: boolean;
}) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="18 27 126 120"
      accessibilityElementsHidden
      focusable={false}
    >
      <OpeningMark mono={mono} />
    </Svg>
  );
}

export function CurioLogoLockup({
  height = 42,
  mono = false,
}: {
  height?: number;
  mono?: boolean;
}) {
  const width = Math.round(height * 3.35);
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 420 125"
      accessibilityElementsHidden
      focusable={false}
    >
      <G transform="translate(-20 -25)">
        <OpeningMark mono={mono} />
      </G>
      <G transform="translate(120 -5)">
        <Path
          d={wordmarkPath}
          fill={colors.ink}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </G>
    </Svg>
  );
}
