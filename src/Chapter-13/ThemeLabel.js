import { Label } from './Label';
import { useTheme } from './ThemeContext';

export function ThemeLabel() {
  const [theme] = useTheme();

  return <Label>Current theme: {theme}</Label>;
}
