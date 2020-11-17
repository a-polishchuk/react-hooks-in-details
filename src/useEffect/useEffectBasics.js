import { useEffect, useState } from 'react';

export function UseEffectBasics() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('is mounted');

    return () => {
      // clean-up function runs before the component is removed
      // from the UI to prevent memory leaks
      console.log('will be unmounted');
    };
  }, []);

  useEffect(() => {
    document.title = `Current count: ${count}`;
  }, [count]);

  useEffect(() => {
    if (count < 5) {
      return;
    }

    const handle = setInterval(() => {
      console.log(`count == ${count}`);
    }, 1000);

    // NOTE: previous effect is cleaned up before executing the next effect
    return () => {
      clearInterval(handle);
    };
  }, [count]);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <p>Current count: {count}</p>
      <button onClick={increment}>+1</button>
    </div>
  );
}
