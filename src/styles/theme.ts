import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  mainBgColorInner: '#10141E',
  mainBgColorOuter: '#1B1E28',
  circleBorderColor: '#222F54',

  accent: '#0034C3',
  surfaceAccent: '#0034C311',

  accentSecondary: '#F82D74',
  arrowBgColor: '#F82D74',
  outerPegColor: '#F82D74',

  circleBgColor: '#F6EDE5',

  textLight: 'rgba(255, 255, 255, .85)',
  textDark: 'rgba(0, 0, 0, .67)',
  textError: '#DA2348',

  boxShadowLarge: '0 0 20px -10px rgba(0, 0, 0, 1);',
  boxShadow: '0 0 20px -10px rgba(0, 0, 0, .5);',

  surfaceDark: 'rgba(0, 0, 0, .125)',
  surfaceDarker: 'rgba(0, 0, 0, .25)',
  surfaceDarkest: 'rgba(0, 0, 0, .75)',

  surfaceLight: 'rgba(255, 255, 255, .05)',

  fontFamilySansSerif: `Inter, sans-serif`,
  fontFamilyMonospace: `ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono", "Roboto Mono","Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Fira Mono", "Droid Sans Mono", "Courier New", monospace`,

  circleBorderWidth: '1vmin',
  outerCircleWidth: '3vmin',
} as const;
