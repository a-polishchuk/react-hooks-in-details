import { createContext, useContext, useMemo, useState } from 'react';

const ThemeContext = createContext();

function useTheme() {
  const theme = useContext(ThemeContext);
  if (!theme) {
    throw new Error(`useTheme must be used within a ThemeProvider`);
  }
  return theme;
}

const Theme = {
  GREEN: 'green',
  BLUE: 'blue',
  RED: 'red',
};

function ThemeProvider(props) {
  const [theme, setTheme] = useState(Theme.GREEN);
  const value = useMemo(() => [theme, setTheme], [theme]);
  return <ThemeContext.Provider value={value} {...props} />;
}

function getThemeColor(theme) {
  switch (theme) {
    case Theme.RED:
      return '#994444';
    case Theme.BLUE:
      return '#4444FF';
    default:
      return '#449944';
  }
}

function Button({ children, onClick }) {
  const [theme] = useTheme();

  const style = {
    backgroundColor: getThemeColor(theme),
    border: 'none',
    paddingLeft: 20,
    paddingTop: 10,
    paddingRight: 20,
    paddingBottom: 10,
    margin: 5,
    color: '#FFF',
    fontFamily: 'monospace',
  };

  return (
    <button onClick={onClick} style={style}>
      {children}
    </button>
  );
}

function Toolbar() {
  const [, setTheme] = useTheme();
  return (
    <div>
      <Button onClick={() => setTheme(Theme.RED)}>Red</Button>
      <Button onClick={() => setTheme(Theme.GREEN)}>Green</Button>
      <Button onClick={() => setTheme(Theme.BLUE)}>Blue</Button>
    </div>
  );
}

function Label({ children }) {
  const [theme] = useTheme();
  const style = {
    color: getThemeColor(theme),
    fontSize: 18,
    fontFamily: 'monospace',
  };
  return <p style={style}>{children}</p>;
}

export function Chapter13() {
  return (
    <ThemeProvider>
      <Toolbar />
      <Label>Label Example</Label>
      <Label>Another label</Label>
    </ThemeProvider>
  );
}
