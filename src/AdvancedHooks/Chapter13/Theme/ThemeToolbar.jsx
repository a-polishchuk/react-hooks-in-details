import { Toolbar } from 'components/Toolbar';

import { useThemeContext } from './ThemeContext';
import { ThemeOption } from './ThemeOption';

export function ThemeToolbar() {
  const [contextState, setThemeIndex] = useThemeContext();
  const { themes, themeIndex } = contextState;

  return (
    <Toolbar>
      {themes.map((theme, index) => (
        <ThemeOption
          theme={theme}
          selected={index === themeIndex}
          onSelect={() => setThemeIndex(index)}
        />
      ))}
    </Toolbar>
  );
}
