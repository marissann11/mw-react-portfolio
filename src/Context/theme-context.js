import React, { createContext } from 'react';

export const themes = {
  light: 'light-mode',
  dark: 'dark-mode',
};
export const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {},
});
