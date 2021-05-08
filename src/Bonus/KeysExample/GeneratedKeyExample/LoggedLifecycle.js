import { useEffect } from 'react';

export default function LoggedLifecycle() {
  useEffect(() => {
    console.log('> LoggedLifecyle: mounted');
    return () => {
      console.log('> LoggedLifecyle: unmounted');
    };
  }, []);

  return <div>This component logs mounts and umounts.</div>;
}
