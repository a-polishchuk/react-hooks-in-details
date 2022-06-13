import { createContext, useContext, useState } from 'react';

import { generateThemes } from './themeUtils';

const INITIAL_STATE = {
  themes: generateThemes(10),
  themeIndex: 0,
};

const ThemeContext = createContext();

export function useThemeContext() {
  const theme = useContext(ThemeContext);
  if (!theme) {
    throw new Error(`useTheme must be used within a ThemeProvider`);
  }
  return theme;
}

export function useCurrentTheme() {
  const [{ themes, themeIndex }] = useThemeContext();
  return themes[themeIndex];
}

export function ThemeProvider({ children }) {
  const [state, setState] = useState(INITIAL_STATE);

  const setThemeIndex = (themeIndex) => {
    setState((value) => ({
      ...value,
      themeIndex,
    }));
  };

  return (
    <ThemeContext.Provider value={[state, setThemeIndex]}>
      {children}
    </ThemeContext.Provider>
  );
}
