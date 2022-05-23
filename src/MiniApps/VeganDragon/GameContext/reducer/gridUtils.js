import { CellType, Direction } from '../../constants';

export function getRandomInt(max) {
  return Math.round(Math.random() * max);
}

export function getNextCell(row, col, rows, cols, direction) {
  let newRow = row;
  let newCol = col;

  switch (direction) {
    case Direction.LEFT:
      newCol = col > 0 ? col - 1 : cols - 1;
      break;
    case Direction.RIGHT:
      newCol = col < cols - 1 ? col + 1 : 0;
      break;
    case Direction.DOWN:
      newRow = row < rows - 1 ? row + 1 : 0;
      break;
    case Direction.UP:
      newRow = row > 0 ? row - 1 : rows - 1;
      break;
    default:
      break;
  }

  return [newRow, newCol];
}

export function getPrevCell(row, col, rows, cols, direction) {
  let newRow = row;
  let newCol = col;

  switch (direction) {
    case Direction.LEFT:
      newCol = col < cols - 1 ? col + 1 : 0;
      break;
    case Direction.RIGHT:
      newCol = col > 0 ? col - 1 : cols - 1;
      break;
    case Direction.DOWN:
      newRow = row > 0 ? row - 1 : rows - 1;
      break;
    case Direction.UP:
      newRow = row < rows - 1 ? row + 1 : 0;
      break;
    default:
      break;
  }

  return [newRow, newCol];
}

export function buildGrid(rows, cols, snakeHead, vegetables) {
  const grid = [];

  for (let r = 0; r < rows; r++) {
    const row = [];
    for (let c = 0; c < cols; c++) {
      row.push('');
    }
    grid.push(row);
  }

  for (const v of vegetables) {
    grid[v.row][v.col] = v.character;
  }

  let segment = snakeHead;
  while (segment) {
    const { row, col } = segment;
    grid[row][col] = CellType.SNAKE;
    segment = segment.next;
  }

  const { row: headRow, col: headCol } = snakeHead;
  grid[headRow][headCol] = CellType.SNAKE_HEAD;

  return grid;
}

export function findDirection(fromCell, toCell) {
  if (fromCell === toCell) {
    return null;
  }
  if (fromCell.row === toCell.row) {
    return fromCell.col > toCell.col ? Direction.LEFT : Direction.RIGHT;
  } else {
    return fromCell.row > toCell.row ? Direction.UP : Direction.DOWN;
  }
}

export function findTail(head) {
  let segment = head;
  while (segment.next) {
    segment = segment.next;
  }
  return segment;
}
