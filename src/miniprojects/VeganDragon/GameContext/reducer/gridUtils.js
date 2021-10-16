import { Direction } from '../../constants';

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
