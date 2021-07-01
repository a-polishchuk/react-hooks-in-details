import { useState } from 'react';

function getRandomCssColor() {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;
  return `rgb(${r}, ${g}, ${b})`;
}

function Cell({ id, col, row, selected }) {
  const cellColor = getRandomCssColor();
  const borderColor = selected ? 'white' : cellColor;
  const style = {
    gridColumn: col,
    gridRow: row,
    backgroundColor: cellColor,
    border: `4px solid ${borderColor}`,
  };
  return <div id={id} style={style} />;
}

function Grid({ cols, rows }) {
  const [selectedId, setSelectedId] = useState();

  const style = {
    display: 'grid',
    width: '100%',
    height: '100%',
    gridTemplateColumns: `repeat(${cols}, 1fr)`,
    gridTemplateRows: `repeat(${rows}, 1fr)`,
  };

  const cells = [];
  for (let c = 1; c <= cols; c++) {
    for (let r = 1; r <= rows; r++) {
      const id = `${c}x${r}`;
      cells.push(
        <Cell key={id} id={id} col={c} row={r} selected={id === selectedId} />
      );
    }
  }

  const handleClick = (event) => {
    setSelectedId(event.target.id);
  };

  return (
    <div style={style} onClick={handleClick}>
      {cells}
    </div>
  );
}

export default function EventDelegationExample() {
  return <Grid cols={3} rows={3} />;
}
