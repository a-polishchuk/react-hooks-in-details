import { PropsTable } from 'components/PropsTable';

import { useCurrentTheme } from '../Theme/ThemeContext';
import { useUserContext } from './UserContext';
import { UserAvatar } from './UserAvatar';

export function UserProfile() {
  const user = useUserContext();
  const { primaryColor } = useCurrentTheme();

  return (
    <div style={{ display: 'flex', gap: 10 }}>
      <UserAvatar />
      <div style={{ color: primaryColor }}>
        <PropsTable title="User Profile" data={user} />
      </div>
    </div>
  );
}
