import { useEffect } from 'react';
import { useCounter } from 'HooksBasics/Chapter3';
import Button from 'components/Button';

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

export default function Chapter6() {
  const [count, increment] = useCounter(0, 1);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  // useEffect(() => {
  //   (async () => {
  //     const response = await updateClicksCount(count);
  //     console.log(response);
  //   })();
  // }, [count]);

  useEffect(() => {
    console.log(`>> running effect ${count}`);

    return () => {
      // cleanup function
      console.log(`<< cleaning up ${count}`);
    };
  }, [count]);

  useEffect(() => {
    console.log('component did mount');

    return () => {
      console.log('component will unmount');
    };
  }, []);

  useEffect(() => {
    console.log('executed AFTER each render');
  }); // deps list is missing

  return (
    <>
      <h2>Chapter 6. useEffect</h2>

      <p>
        Current count: <strong>{count}</strong>
      </p>

      <div style={{ width: 150 }}>
        <Button onClick={increment} text="+1" />
      </div>
    </>
  );
}
