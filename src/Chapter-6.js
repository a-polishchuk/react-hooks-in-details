import { useEffect, useState } from 'react';
import { useCounter } from './useState/useCounter';

function updateClicksCount(clicksCount) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        clicksCount,
      });
    }, 1000);
  });
}

export function Counter() {
  const [count, increment] = useCounter();

  useEffect(() => {
    document.title = count;
  }, [count]);

  useEffect(() => {
    (async () => {
      const response = await updateClicksCount(count);
      console.log(response);
    })();
  }, [count]);

  useEffect(() => {
    console.log(`>> running effect ${count}`);

    return () => {
      console.log(`<< cleaning up ${count}`);
    };
  }, [count]);

  useEffect(() => {
    console.log('component is mounted');

    return () => {
      console.log('component will unmount');
    };
  }, []);

  useEffect(() => {
    console.log('executed AFTER each render');
  }); // dependencies list is missing

  return (
    <div>
      <p>Current count: {count}</p>
      <button onClick={increment}>+1</button>
    </div>
  );
}
