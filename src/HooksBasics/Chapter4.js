import { useState } from 'react';
import Button from 'components/Button';
import Toolbar from 'components/Toolbar';

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

const MAX_NUMBER = 30;
const MAX_POW = 5;

export default function Chapter4() {
  const [data, setData] = useState(() => {
    console.log('useState initialization');
    return someHeavyFunc(MAX_NUMBER, MAX_POW);
  });

  const [, setTrigger] = useState();
  const rerender = () => setTrigger({});

  const removeFirst = () => {
    setData((prevValue) => {
      const [, ...rest] = prevValue;
      return rest;
    });
  };

  console.log('Example has been rendered');

  return (
    <>
      <h2>Chapter 4. Lazy init</h2>

      <Toolbar>
        <Button onClick={removeFirst} text="Remove first" />
        <Button onClick={rerender} text="Rerender" />
      </Toolbar>

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
