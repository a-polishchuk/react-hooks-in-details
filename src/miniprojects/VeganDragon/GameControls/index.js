import Button from 'components/Button';
import { Switch, Case } from 'Bonus/Conditional/Switch';
import { useGameContext } from '../GameContext/GameContext';
import { ActionType, GameStatus } from '../constants';
import Modal from './Modal';

const styles = {
  root: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  points: {
    fontSize: 24,
    marginLeft: 20,
  },
};

export default function GameControls() {
  const [state, dispatch] = useGameContext();
  const { gameStatus, points } = state;

  const handlePlay = () => dispatch({ type: ActionType.PLAY });
  const handlePause = () => dispatch({ type: ActionType.PAUSE });
  const handlePlayAgain = () => dispatch({ type: ActionType.PLAY_AGAIN });

  // TODO: store high scores in a local storage

  if (gameStatus === GameStatus.FINISHED) {
    return (
      <Modal
        title="Game Over"
        message={
          <>
            You scored <b>{points}</b> points.
          </>
        }
        buttons={{
          'Play Again': handlePlayAgain,
        }}
      />
    );
  }

  return (
    <div style={styles.root}>
      <div style={styles.buttons}>
        <Switch value={gameStatus}>
          <Case value={GameStatus.IDLE}>
            <Button text="Start" onClick={handlePlay} />
          </Case>
          <Case value={GameStatus.PLAYING}>
            <Button text="Pause" onClick={handlePause} />
          </Case>
          <Case value={GameStatus.PAUSED}>
            <Button text="Resume" onClick={handlePlay} />
          </Case>
          <Case condition={(value) => value !== GameStatus.IDLE}>
            <div style={styles.points}>
              Points: <strong>{points}</strong>
            </div>
          </Case>
        </Switch>
      </div>
    </div>
  );
}
