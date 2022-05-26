import { useEffect } from 'react';
import { useCounter } from 'HooksBasics/Chapter3';
import Button from 'components/Button';
import ValueLabel from 'components/ValueLabel';

// function updateClicksCount(clicksCount) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({
//         success: true,
//         clicksCount,
//       });
//     }, 1000);
//   });
// }

export function Chapter6() {
  const { value, increase } = useCounter(0, 1);

  useEffect(() => {
    document.title = `Count: ${value}`;
  }, [value]);

  // useEffect(() => {
  //   (async () => {
  //     const response = await updateClicksCount(value);
  //     console.log(response);
  //   })();
  // }, [value]);

  useEffect(() => {
    console.log(`>> running effect ${value}`);

    return () => {
      // cleanup function
      console.log(`<< cleaning up ${value}`);
    };
  }, [value]);

  useEffect(() => {
    console.log('component did mount');

    return () => {
      console.log('component will unmount');
    };
  }, []);

  useEffect(() => {
    console.log('executed AFTER each render');
  }); // NOTE: deps list is missing

  return (
    <>
      <h2>Chapter 6. useEffect</h2>
      <div style={{ marginTop: 24, marginBottom: 24 }}>
        Current count:
        <ValueLabel value={value} />
      </div>
      <div style={{ width: 150 }}>
        <Button onClick={increase} text="+1" />
      </div>
    </>
  );
}
