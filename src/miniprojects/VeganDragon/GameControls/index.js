import { useEffect, useState } from 'react';
import Button from 'components/Button';
import { Switch, Case } from 'Bonus/Conditional/Switch';
import { useLocalStorage } from 'HooksCollection/Chapter-21/useLocalStorage';
import { useGameContext } from '../GameContext/GameContext';
import { ActionType, GameStatus, HIGH_SCORE_KEY } from '../constants';
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
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  score: {
    fontSize: 32,
    fontWeight: 'bold',
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

  const [highScore, setHighScore] = useLocalStorage(HIGH_SCORE_KEY, 0);
  const [prevHighScore, setPrevHighScore] = useState(highScore);

  useEffect(() => {
    if (gameStatus === GameStatus.FINISHED) {
      setPrevHighScore(highScore);
      setHighScore(Math.max(highScore, points));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameStatus]);

  const handlePlay = () => dispatch({ type: ActionType.PLAY });
  const handlePause = () => dispatch({ type: ActionType.PAUSE });
  const handlePlayAgain = () => dispatch({ type: ActionType.PLAY_AGAIN });

  if (gameStatus === GameStatus.FINISHED) {
    return (
      <Modal
        title="Game Over"
        message={
          <>
            You scored <b>{points}</b> points!
            {points > prevHighScore ? (
              <p>
                <b>This is a new high score!</b>
              </p>
            ) : (
              <p>High score: {prevHighScore}</p>
            )}
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
      <div style={styles.score}>{points} pts</div>
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
        </Switch>
      </div>
    </div>
  );
}
