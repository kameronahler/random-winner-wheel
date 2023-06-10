import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  arrowBgColor: '#666',
  boxShadow: '0 0 20px -10px rgba(0, 0, 0, 1);',
  circleBgColor: '#545454',
  circleBorderColor: '#ccc',
  circleBorderWidth: '1vmin',
  mainBgColor: '#212121',
  nameColor: 'rgba(255, 255, 255, .9)',
  outerCircleWidth: '3vmin',
  outerPegColor: '#666',
  sliceBgColorEven: 'red',
  sliceBgColorOdd: 'green',
  spinButtonBgColor: '#ccc',
  spinButtonBorderColor: '#444',
  spinButtonBorderWidth: '1vmin',
} as const;
