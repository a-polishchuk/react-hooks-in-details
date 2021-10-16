import { memo } from 'react';
import { CellType } from '../constants';

function getStyle(gridRow, gridColumn, isSnake) {
  return {
    width: 40,
    height: 40,
    margin: 2,
    borderRadius: 4,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '2em',
    gridRow,
    gridColumn,
    backgroundColor: isSnake ? '#2B27' : '#FFF',
    border: `2px solid ${isSnake ? '#2B2' : '#DDD'}`,
  };
}

function Cell({ row, col, content }) {
  const isSnake = content === CellType.SNAKE || content === CellType.SNAKE_HEAD;
  const style = getStyle(row, col, isSnake);

  return <div style={style}>{content === CellType.SNAKE ? '' : content}</div>;
}

export default memo(Cell);
