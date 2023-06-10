import 'styled-components';

declare module 'styled-components' {
  export type DefaultTheme = Recrod<
    | 'buttonBgColor'
    | 'boxShadow'
    | 'circleBgColor'
    | 'circleBorderColor'
    | 'circleBorderWidth'
    | 'mainBgColor'
    | 'nameColor'
    | 'outerCircleWidth'
    | 'outerPegColor'
    | 'sliceBgColorEven'
    | 'sliceBgColorOdd'
    | 'spinButtonBorderWidth'
    | 'spinButtonBorderColor',
    string
  >;
}
