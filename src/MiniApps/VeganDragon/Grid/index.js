import { useGameContext } from '../GameContext/GameContext';
import Cell from './Cell';
import { styles } from './styles';

function mapCells(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const cells = [];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      cells.push(
        <Cell
          key={`[${i}, ${j}]`}
          row={i + 1}
          col={j + 1}
          content={grid[i][j]}
        />
      );
    }
  }
  return cells;
}

export default function Grid() {
  const [state] = useGameContext();
  const { grid } = state;

  return (
    <div style={styles.gridContainer}>
      <div style={styles.grid}>{mapCells(grid)}</div>
    </div>
  );
}
