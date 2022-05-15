import { ThemeProvider } from './ThemeContext';
import { ThemeToolbar } from './ThemeToolbar';
import { Label } from './Label';
import { ThemeLabel } from './ThemeLabel';
import { UserPanel } from './User/UserPanel';

export default function Chapter13() {
  return (
    <div>
      <ThemeProvider>
        <Label>useContext example</Label>
        <UserPanel />
        <ThemeLabel />
        <ThemeToolbar />
      </ThemeProvider>
    </div>
  );
}
