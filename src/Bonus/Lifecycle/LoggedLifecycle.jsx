import { useEffect } from 'react';

function logColored(tag, message, tagColor) {
  console.log(
    `%c[${tag}]%c ${message}`,
    `background-color: ${tagColor}; color: white`,
    ''
  );
}

export function useLoggedLifecycle(tag, color) {
  useEffect(() => {
    logColored(tag, '++ Mounted', color);

    return () => {
      logColored(tag, '-- Unmounting', color);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  logColored(tag, 'Rendering', color);
}

export function LoggedLifecycle({ tag, color, children }) {
  useLoggedLifecycle(tag, color);

  return <>{children}</>;
}
