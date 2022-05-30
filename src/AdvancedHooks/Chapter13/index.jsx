import { ThemeProvider } from './ThemeContext';
import { ThemeToolbar } from './ThemeToolbar';
import { ThemeLabel } from './ThemeLabel';
import { UserPanel } from './User/UserPanel';

export function UseContextExample() {
  return (
    <>
      <h2>Chapter 13. useContext</h2>
      <ThemeProvider>
        <UserPanel />
        <ThemeLabel />
        <ThemeToolbar />
      </ThemeProvider>
    </>
  );
}
