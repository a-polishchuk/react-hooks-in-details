import { useAsync, AsyncStatus } from './useAsync';
import { useAnimatedText } from './useAnimatedText';

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

function AnimatedText({ text }) {
  const currentText = useAnimatedText(text, 100);
  return <p>{currentText}</p>;
}

export default function Chapter23() {
  const { run, status, result, error } = useAsync(requestRandomNumber);
  return (
    <>
      <h2>Chapter 23: useAsync, useAnimatedText</h2>
      {status === AsyncStatus.IDLE ? (
        <button onClick={run}>Request random number</button>
      ) : status === AsyncStatus.PENDING ? (
        <AnimatedText text="Request in progress..." />
      ) : status === AsyncStatus.SUCCESS ? (
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
