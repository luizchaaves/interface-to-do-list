import { DefaultTheme } from 'styled-components';
import Theme from './theme';

const DarkTheme: DefaultTheme = {
  color: {
    primary: Theme.color.secondary,
    secondary: Theme.color.primary,
    white: Theme.color.white,
  },
  background: {
    primary: Theme.background.secondary,
    secondary: Theme.background.primary,
    cards: Theme.background.cards,
  },
  boxShadow: {
    primary: Theme.boxShadow.secondary,
    secondary: Theme.boxShadow.primary,
    tertiary: Theme.boxShadow.quaternary,
    quaternary: Theme.boxShadow.tertiary,
  },
  gradient: {
    primary: Theme.gradient.secondary,
    secondary: Theme.gradient.primary,
    red: Theme.gradient.red,
    orange: Theme.gradient.orange,
    yellow: Theme.gradient.yellow,
    green: Theme.gradient.green,
  },
  zIndex: Theme.zIndex,
};

export default DarkTheme;
