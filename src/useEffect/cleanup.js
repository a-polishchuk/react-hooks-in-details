import { useEffect, useState } from 'react';

export function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`>> running effect ${count}`);

    return () => {
      console.log(`<< cleaning up ${count}`);
    };
  }, [count]);

  const increment = () => {
    setCount((prevValue) => prevValue + 1);
  };

  return <button onClick={increment}>{count}</button>;
}
