import { useAnimatedText } from '../Chapter-23/useAnimatedText';
import { AsyncStatus } from './constants';
import { useAsync } from './useAsync';

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

function RandomNumber() {
  const { run, status, result, error } = useAsync(requestRandomNumber);

  switch (status) {
    case AsyncStatus.IDLE:
      return <button onClick={run}>Request random number</button>;
    case AsyncStatus.PENDING:
      return <AnimatedText text="Request in progress..." />;
    case AsyncStatus.SUCCESS:
      return (
        <>
          <button onClick={run}>Request again</button>
          <p>Current random number: {result}</p>
        </>
      );
    case AsyncStatus.ERROR:
      return (
        <>
          <button onClick={run}>Request again</button>
          <p style={{ color: 'red' }}>
            <b>Error:</b> {error}
          </p>
        </>
      );
    default:
      return null;
  }
}

export default function Chapter31() {
  return (
    <>
      <h2>Chapter 31: useAsync 2.0</h2>
      <RandomNumber />
    </>
  );
}
