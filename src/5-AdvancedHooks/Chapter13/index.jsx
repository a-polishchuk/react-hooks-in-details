import { Toolbar } from 'components/Toolbar';

import { ThemeProvider } from './Theme/ThemeContext';
import { ThemeButton } from './Theme/ThemeButton';
import { ThemeToolbar } from './Theme/ThemeToolbar';
import { UserProvider } from './User/UserContext';
import { UserProfile } from './User/UserProfile';

export function UseContextExample() {
  return (
    <>
      <h2>Chapter 13. useContext</h2>

      <ThemeProvider>
        {/* you can get current theme in any component here */}
        <ThemeToolbar />
        <Toolbar>
          <ThemeButton text="Primary Button" />
          <ThemeButton text="Disabled Button" disabled />
        </Toolbar>
        <UserProvider userId={1}>
          {/* you can get user details in any component here */}
          <UserProfile />
        </UserProvider>
      </ThemeProvider>
    </>
  );
}
