import { memo, useCallback, useState } from 'react';
import { getRandomColor } from 'utils/getRandomColor';

function Cell({ id, col, row, selected, onClick }) {
  const cellColor = getRandomColor();
  const borderColor = selected ? '#0008' : '#0003';
  const style = {
    gridColumn: col,
    gridRow: row,
    backgroundColor: cellColor,
    border: `1px solid ${borderColor}`,
    borderRadius: 8,
    boxShadow: '2px 2px 0px 0px #0005',
  };
  return <div id={id} style={style} onClick={() => onClick(id)} />;
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

export function EventDelegation() {
  return <Grid cols={30} rows={20} />;
}
