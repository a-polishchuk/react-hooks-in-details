import { CellType, GameStatus, POINTS_INCREMENT } from '../../constants';
import { getPrevCell, getNextCell, buildGrid } from './gridUtils';
import { setGameStatus } from './setGameStatus';

function moveSnake(state, direction) {
  const { rows, cols, snakeHead, grid } = state;
  const { row, col } = snakeHead;
  const [newRow, newCol] = getNextCell(row, col, rows, cols, direction);
  if (grid[newRow][newCol] === CellType.SNAKE) {
    return null;
  }
  return moveSegment(snakeHead, newRow, newCol);
}

function moveSegment(segment, row, col) {
  return {
    row,
    col,
    next: segment.next && moveSegment(segment.next, segment.row, segment.col),
  };
}

// TODO: fix the position of new cell (get the direction from tail)
function checkIntersection(state, direction, snakeHead) {
  const { rows, cols, vegetables } = state;
  let intersections = 0;
  let segment = snakeHead;
  let tail = snakeHead;
  while (segment) {
    const { row, col } = segment;
    const index = vegetables.findIndex((veg) => {
      return veg.row === row && veg.col === col;
    });
    if (index !== -1) {
      intersections++;
      vegetables.splice(index, 1);
    }
    tail = segment;
    segment = segment.next;
  }
  for (let i = 0; i < intersections; i++) {
    const [newRow, newCol] = getPrevCell(
      tail.row,
      tail.col,
      rows,
      cols,
      direction
    );
    tail.next = {
      row: newRow,
      col: newCol,
    };
    tail = tail.next;
  }
  return intersections;
}

export function move(state, direction) {
  const { rows, cols, vegetables, points } = state;
  const newSnakeHead = moveSnake(state, direction);
  if (!newSnakeHead) {
    return setGameStatus(state, GameStatus.FINISHED);
  }
  const intersections = checkIntersection(state, direction, newSnakeHead);
  return {
    ...state,
    snakeHead: newSnakeHead,
    grid: buildGrid(rows, cols, newSnakeHead, vegetables),
    points: points + POINTS_INCREMENT * intersections,
  };
}
