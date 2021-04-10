import { useEffect, useState } from 'react';
import { usePrevious } from './usePrevious';

function useHistory(value) {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    setHistory((array) => [...array, value]);
  }, [value]);

  return history;
}

const DIGITS = [
  ['7', '8', '9'],
  ['4', '5', '6'],
  ['1', '2', '3'],
  ['', '0', ''],
];

const style = {
  width: 40,
  height: 40,
  margin: 5,
};

function Row({ array, onClick }) {
  return (
    <div>
      {array.map((digit) => {
        return digit ? (
          <button style={style} onClick={() => onClick(digit)}>
            {digit}
          </button>
        ) : (
          <button style={style}>&nbsp;</button>
        );
      })}
    </div>
  );
}

export default function Chapter24() {
  const [currentDigit, setCurrentDigit] = useState(0);
  const previousDigit = usePrevious(currentDigit);
  const history = useHistory(currentDigit);

  return (
    <>
      <h2>Chapter 24: usePrevious</h2>
      <h3>
        Current digit: {previousDigit} {'>>'} {currentDigit}
      </h3>
      <h3>History: {history.join(' > ')}</h3>
      {DIGITS.map((row) => (
        <Row array={row} onClick={setCurrentDigit} />
      ))}
    </>
  );
}
