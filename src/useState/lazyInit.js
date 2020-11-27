import { useState } from 'react';

/**
 * This is a "heavy" and "expensive" function,
 * which generates our data.
 * We want to run it only once.
 */
function someHeavyFunc(maxNumber, maxPow) {
  const data = [];
  for (let i = 0; i < maxNumber; i++) {
    const record = {};
    for (let pow = 1; pow <= maxPow; pow++) {
      record[pow] = Math.pow(i, pow);
    }
    data.push(record);
  }
  return data;
}

function Row({ record }) {
  return (
    <tr>
      {Object.values(record)
        .sort((a, b) => a - b)
        .map((value, i) => (
          <td key={i}>{value}</td>
        ))}
    </tr>
  );
}

function HeaderRow({ maxPow }) {
  const cells = [];
  for (let pow = 1; pow <= maxPow; pow++) {
    cells.push(
      <th style={{ minWidth: 100 }} key={pow}>
        ^{pow}
      </th>
    );
  }
  return <tr>{cells}</tr>;
}

const MAX_POW = 5;

export function Example() {
  const [data, setData] = useState(() => {
    console.log('useState initialization');
    return someHeavyFunc(20, MAX_POW);
  });

  const removeFirst = () => {
    setData((prevValue) => {
      const [, ...rest] = prevValue;
      return rest;
    });
  };

  console.log('render');

  return (
    <>
      <p>
        <button onClick={removeFirst}>REMOVE FIRST</button>
      </p>
      <table>
        <thead>
          <HeaderRow maxPow={MAX_POW} />
        </thead>
        <tbody>
          {data.map((record) => (
            <Row key={record['1']} record={record} />
          ))}
        </tbody>
      </table>
    </>
  );
}
