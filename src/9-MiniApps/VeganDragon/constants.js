export const MOVE_DELAY = 500;
export const SPAWN_DELAY = 3000;
export const POINTS_INCREMENT = 100;

export const HIGH_SCORE_KEY = 'vegan-dragon-high-score';

export const VEGETABLES = [
  '🍏',
  '🍎',
  '🍐',
  '🍊',
  '🍋',
  '🍌',
  '🍉',
  '🍇',
  '🍓',
  '🍈',
  '🍒',
  '🍑',
  '🥭',
  '🍍',
  '🥥',
  '🥝',
  '🍅',
  '🍆',
  '🥑',
  '🥦',
  '🥬',
  '🥒',
  '🌶',
  '🌽',
  '🥕',
  '🧄',
  '🧅',
  '🥔',
  '🍠',
];

export const CellType = {
  EMPTY: '',
  SNAKE: 's',
  SNAKE_HEAD: '🐲',
};

export const Direction = {
  UP: 'up',
  RIGHT: 'right',
  DOWN: 'down',
  LEFT: 'left',
  opposite: (direction) => {
    switch (direction) {
      case Direction.DOWN:
        return Direction.UP;
      case Direction.LEFT:
        return Direction.RIGHT;
      case Direction.UP:
        return Direction.DOWN;
      case Direction.RIGHT:
        return Direction.LEFT;
      default:
        throw new Error(`Unknown direction ${direction}`);
    }
  },
};

export const ActionType = {
  PLAY: 'play',
  PAUSE: 'pause',
  FINISH: 'finish',
  PLAY_AGAIN: 'play_again',
  MOVE: 'move',
  SPAWN_VEGETABLE: 'spawn_vegetable',
  SET_DIRECTION: 'set_direction',
};

export const GameStatus = {
  IDLE: 'idle',
  PLAYING: 'playing',
  PAUSED: 'paused',
  FINISHED: 'finished',
};
