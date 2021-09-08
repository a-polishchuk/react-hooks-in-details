import { useTheme } from './ThemeContext';
import { getThemeColor } from './Theme';

export function Label({ children }) {
  const [theme] = useTheme();

  const style = {
    color: getThemeColor(theme),
    fontSize: 18,
    fontFamily: 'monospace',
  };

  return <p style={style}>{children}</p>;
}
