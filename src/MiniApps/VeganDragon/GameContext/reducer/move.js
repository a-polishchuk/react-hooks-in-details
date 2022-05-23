import { CellType, GameStatus, POINTS_INCREMENT } from '../../constants';
import { getNextCell, buildGrid, findDirection, findTail } from './gridUtils';
import { setGameStatus } from './setGameStatus';

function moveSnake(state) {
  const { rows, cols, snakeHead, grid, direction } = state;
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

function checkIntersection(state, oldSnakeHead, snakeHead) {
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

  if (intersections === 0) {
    return 0;
  }

  const oldTail = findTail(oldSnakeHead);
  tail.next = {
    row: oldTail.row,
    col: oldTail.col,
  };
  tail = tail.next;

  const nextDirection = findDirection(tail, oldTail);
  for (let i = 1; i < intersections; i++) {
    const [newRow, newCol] = getNextCell(
      tail.row,
      tail.col,
      rows,
      cols,
      nextDirection
    );
    tail.next = {
      row: newRow,
      col: newCol,
    };
    tail = tail.next;
  }
  return intersections;
}

export function move(state) {
  const { rows, cols, vegetables, points, snakeHead } = state;
  const newSnakeHead = moveSnake(state);
  if (!newSnakeHead) {
    return setGameStatus(state, GameStatus.FINISHED);
  }
  const intersections = checkIntersection(state, snakeHead, newSnakeHead);
  return {
    ...state,
    snakeHead: newSnakeHead,
    grid: buildGrid(rows, cols, newSnakeHead, vegetables),
    points: points + POINTS_INCREMENT * intersections,
  };
}
