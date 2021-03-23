import { useCallback, useState } from 'react';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  SUCCESS: 'success',
  ERROR: 'error',
};

function useAsync(asyncFunc) {
  const [status, setStatus] = useState(Status.IDLE);
  const [result, setResult] = useState();
  const [error, setError] = useState();

  const run = useCallback(() => {
    if (status === Status.PENDING) {
      console.error('Still pending, cannot run again...');
      return;
    }

    setStatus(Status.PENDING);
    asyncFunc()
      .then((r) => {
        setResult(r);
        setError(null);
        setStatus(Status.SUCCESS);
      })
      .catch((error) => {
        setError(error);
        setStatus(Status.ERROR);
      });
  }, [status, asyncFunc]);

  return { run, status, result, error };
}

function requestRandomNumber() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.random() * 100;
      if (randomNumber > 50) {
        resolve(randomNumber);
      } else {
        reject('Maybe next time');
      }
    }, 3000);
  });
}

export default function Chapter23() {
  const { run, status, result, error } = useAsync(requestRandomNumber);

  return (
    <>
      <h2>Chapter 23: useAsync</h2>
      {status === Status.IDLE ? (
        <button onClick={run}>Request random number</button>
      ) : status === Status.PENDING ? (
        <p>Request in progress...</p>
      ) : status === Status.SUCCESS ? (
        <>
          <button onClick={run}>Request again</button>
          <p>Current random number: {result}</p>
        </>
      ) : (
        <>
          <button onClick={run}>Request again</button>
          <p style={{ color: 'red' }}>
            <b>Error:</b> {error}
          </p>
        </>
      )}
    </>
  );
}
