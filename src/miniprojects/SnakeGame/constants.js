export const MOVE_DELAY = 500;

export const SPAWN_DELAY = 3000;

export const VEGETABLES = [
  '\u{1F951}',
  '\u{1F346}',
  '\u{1F954}',
  '\u{1F955}',
  '\u{1F33D}',
  '\u{1F336}',
  '\u{1F966}',
];

export const CellType = {
  EMPTY: '',
  SNAKE: 's',
  SNAKE_HEAD: '\u{1F432}',
};

export const Direction = {
  UP: 'up',
  RIGHT: 'right',
  DOWN: 'down',
  LEFT: 'left',
};

export const ActionType = {
  MOVE: 'move',
  SPAWN_VEGETABLE: 'spawn_vegetable',
  RESET: 'reset',
};
