import { useEffect, useRef } from 'react';

export function LoggedLifecycle({ name }) {
  const nameRef = useRef(name);

  useEffect(() => {
    nameRef.current = name;
  }, [name]);

  useEffect(() => {
    console.log(`> ${nameRef.current}: mounted`);
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      console.log(`> ${nameRef.current}: unmounted`);
    };
  }, []);

  return <div>{name}</div>;
}
