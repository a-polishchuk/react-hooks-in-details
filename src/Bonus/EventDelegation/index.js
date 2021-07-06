import { memo, useCallback, useState } from 'react';

function getRandomCssColor() {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;
  return `rgb(${r}, ${g}, ${b})`;
}

function Cell({ id, col, row, selected, onClick }) {
  const cellColor = getRandomCssColor();
  const borderColor = selected ? 'white' : cellColor;
  const style = {
    gridColumn: col,
    gridRow: row,
    backgroundColor: cellColor,
    border: `4px solid ${borderColor}`,
  };
  const handleClick = () => {
    onClick(id);
  };
  return <div id={id} style={style} onClick={handleClick} />;
}

const MemoCell = memo(Cell);

function Grid({ cols, rows }) {
  const [selectedId, setSelectedId] = useState();

  const style = {
    display: 'grid',
    width: '100%',
    height: '100%',
    gridTemplateColumns: `repeat(${cols}, 1fr)`,
    gridTemplateRows: `repeat(${rows}, 1fr)`,
  };

  const handleCellClick = useCallback((cellId) => {
    setSelectedId(cellId);
  }, []);

  const cells = [];
  for (let c = 1; c <= cols; c++) {
    for (let r = 1; r <= rows; r++) {
      const id = `${c}x${r}`;
      cells.push(
        <MemoCell
          key={id}
          id={id}
          col={c}
          row={r}
          selected={id === selectedId}
          onClick={handleCellClick}
        />
      );
    }
  }

  // const handleContainerClick = (event) => {
  //   setSelectedId(event.target.id);
  // };

  return <div style={style}>{cells}</div>;
}

export default function EventDelegationExample() {
  return <Grid cols={30} rows={20} />;
}
