import 'styled-components';

declare module 'styled-components' {
  export type DefaultTheme = Recrod<
    | 'arrowBgColor'
    | 'buttonBgColor'
    | 'circleBgColor'
    | 'circleBorderColor'
    | 'circleBorderWidth'
    | 'outerCircleWidth'
    | 'mainBgColor'
    | 'nameColor',
    string
  >;
}
