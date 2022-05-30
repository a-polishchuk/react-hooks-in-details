import { useTheme } from './ThemeContext';
import { Theme } from './Theme';
import { Button } from './Button';

export function ThemeToolbar() {
  const [, setTheme] = useTheme();

  return (
    <div>
      <Button onClick={() => setTheme(Theme.RED)}>Red</Button>
      <Button onClick={() => setTheme(Theme.GREEN)}>Green</Button>
      <Button onClick={() => setTheme(Theme.BLUE)}>Blue</Button>
    </div>
  );
}
