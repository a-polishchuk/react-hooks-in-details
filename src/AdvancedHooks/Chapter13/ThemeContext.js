import { createContext, useContext, useMemo, useState } from 'react';
import { Theme } from './Theme';

const ThemeContext = createContext();

export function useTheme() {
  const theme = useContext(ThemeContext);
  if (!theme) {
    throw new Error(`useTheme must be used within a ThemeProvider`);
  }
  return theme;
}

export function ThemeProvider(props) {
  const [theme, setTheme] = useState(Theme.GREEN);

  const value = useMemo(() => {
    return [theme, setTheme];
  }, [theme]);

  return <ThemeContext.Provider value={value} {...props} />;
}
