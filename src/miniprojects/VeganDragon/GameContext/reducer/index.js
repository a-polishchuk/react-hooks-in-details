import { ActionType, CellType, GameStatus, VEGETABLES } from './constants';
import { getNextCell, getPrevCell } from './gridUtils';

const GRID_SIZE = 10;
const SNAKE_HEAD = {
  row: Math.floor(GRID_SIZE / 2),
  col: Math.floor(GRID_SIZE / 2),
};

export const INITIAL_STATE = {
  gameStatus: GameStatus.IDLE,
  rows: GRID_SIZE,
  cols: GRID_SIZE,
  vegetables: [],
  snakeHead: SNAKE_HEAD,
  grid: buildGrid(GRID_SIZE, GRID_SIZE, SNAKE_HEAD, []),
};

function buildGrid(rows, cols, snakeHead, vegetables) {
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
}

function move(state, direction) {
  const { rows, cols, snakeHead, vegetables } = state;
  const newSnakeHead = moveSnake(rows, cols, snakeHead, direction);
  checkIntersection(rows, cols, newSnakeHead, vegetables, direction);
  return {
    ...state,
    snakeHead: newSnakeHead,
    grid: buildGrid(rows, cols, newSnakeHead, vegetables),
  };
}

function getRandomInt(max) {
  return Math.round(Math.random() * max);
}

function spawnVegetable(state) {
  const { rows, cols, snakeHead, vegetables } = state;

  const randomVegetable = {
    row: getRandomInt(rows - 1),
    col: getRandomInt(cols - 1),
    character: VEGETABLES[getRandomInt(VEGETABLES.length - 1)],
  };

  return {
    ...state,
    vegetables: [...vegetables, randomVegetable],
    grid: buildGrid(rows, cols, snakeHead, vegetables),
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case ActionType.MOVE:
      return move(state, action.payload);
    case ActionType.SPAWN_VEGETABLE:
      return spawnVegetable(state);
    case ActionType.RESET:
      return INITIAL_STATE;
    default:
      return state;
  }
}
