import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  arrowBgColor: '#C9ADA7',
  boxShadow: '0 0 20px -10px rgba(0, 0, 0, 1);',
  circleBgColorInner: '#F2E9E4',
  circleBgColorOuter: '#C9ADA7',
  circleBorderColor: '#4A4E69',
  circleBorderWidth: '1vmin',
  circleTextColor: 'rgba(0, 0, 0, .67)',
  mainBgColorInner: '#22223b',
  mainBgColorOuter: '#2D2D4E',
  outerCircleWidth: '3vmin',
  outerPegColor: '#C9ADA7',
  spinButtonBgColor: '#C9ADA7',
  spinButtonBorderColor: '#F2E9E4',
  spinButtonTextColor: '#2D2D4E',
  spinButtonBorderWidth: '1vmin',
  winnerModalH1TextColor: '#C9ADA7',
  winnerModalTextColor: '#F2E9E4',
} as const;
