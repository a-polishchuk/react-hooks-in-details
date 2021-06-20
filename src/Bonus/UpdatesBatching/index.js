import { useEffect, useState, useRef } from 'react';

export default function UpdatesBatchingExample() {
  const [clicksCount, setClicksCount] = useState(0);
  const [isEvenClick, setEvenClick] = useState(true);
  const buttonRef = useRef();

  console.log(`clicks: ${clicksCount}, isEven: ${isEvenClick}`);

  const handleUpdate = () => {
    setClicksCount((value) => value + 1);
    setEvenClick((value) => !value);
  };

  const handleUpdateWithTimeout = () => {
    setTimeout(() => {
      setClicksCount((value) => value + 1);
      setEvenClick((value) => !value);
    }, 1000);
  };

  const handleUpdateWithPromise = (event) => {
    event.stopPropagation();
    requestSomething().then(() => {
      setClicksCount((value) => value + 1);
      setEvenClick((value) => !value);
    });
  };

  useEffect(() => {
    const button = buttonRef.current;
    const onWindowClick = () => {
      setClicksCount((value) => value + 1);
      setEvenClick((value) => !value);
    };
    button.addEventListener('click', onWindowClick);
    return () => {
      button.removeEventListener('click', onWindowClick);
    };
  }, []);

  return (
    <>
      <h2>Updates batching</h2>
      <p>
        <span>
          Clicks count: <b>{clicksCount}</b>
        </span>
        <br />
        <span>
          Is event click: <b>{isEvenClick.toString()}</b>
        </span>
      </p>
      <p>
        <button onClick={handleUpdate}>Update state</button>
      </p>
      <p>
        <button onClick={handleUpdateWithTimeout}>
          Update state with timeout
        </button>
      </p>
      <p>
        <button onClick={handleUpdateWithPromise}>Update with promise</button>
      </p>
      <p>
        <button ref={buttonRef}>Update with event listener</button>
      </p>
    </>
  );
}

function requestSomething() {
  return new Promise((resolve) => {
    resolve();
  });
}
