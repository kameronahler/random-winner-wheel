import 'styled-components';

declare module 'styled-components' {
  export type DefaultTheme = Recrod<
    | 'buttonBgColor'
    | 'boxShadow'
    | 'circleBgColorInner'
    | 'circleBgColorOuter'
    | 'circleBorderColor'
    | 'circleBorderWidth'
    | 'circleTextColor'
    | 'mainBgColorInner'
    | 'mainBgColorOuter'
    | 'outerCircleWidth'
    | 'outerPegColor'
    | 'spinButtonBorderWidth'
    | 'spinButtonBorderColor'
    | 'spinButtonTextColor'
    | 'winnerModalTextColor',
    string
  >;
}
