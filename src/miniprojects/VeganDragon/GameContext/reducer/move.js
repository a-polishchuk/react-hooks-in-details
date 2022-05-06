import { getPrevCell, getNextCell, buildGrid } from './gridUtils';
import { POINTS_INCREMENT } from '../../constants';

function moveSnake(rows, cols, head, direction) {
  const { row, col } = head;
  const [newRow, newCol] = getNextCell(row, col, rows, cols, direction);
  return moveSegment(head, newRow, newCol);
}

function moveSegment(segment, row, col) {
  return {
    row,
    col,
    next: segment.next && moveSegment(segment.next, segment.row, segment.col),
  };
}

// TODO: fix the position of new cell (get the direction from tail)
// TODO: check game over condition
function checkIntersection(rows, cols, snakeHead, vegetables, direction) {
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
  const { rows, cols, snakeHead, vegetables, points } = state;
  const newSnakeHead = moveSnake(rows, cols, snakeHead, direction);
  const intersections = checkIntersection(
    rows,
    cols,
    newSnakeHead,
    vegetables,
    direction
  );
  return {
    ...state,
    snakeHead: newSnakeHead,
    grid: buildGrid(rows, cols, newSnakeHead, vegetables),
    points: points + POINTS_INCREMENT * intersections,
  };
}
