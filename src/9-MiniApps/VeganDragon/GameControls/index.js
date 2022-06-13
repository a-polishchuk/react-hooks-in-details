import { useEffect, useState } from 'react';
import { Button } from 'components/Button';
import { Switch, Case } from '7-Bonus/Conditional/Switch';
import { useLocalStorage } from '6-HooksCollection/Chapter-21/useLocalStorage';

import { useGameContext } from '../GameContext/GameContext';
import { ActionType, GameStatus, HIGH_SCORE_KEY } from '../constants';
import Modal from './Modal';
import Score from './Score';
import CurrentDirection from './CurrentDirection';

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
    textAlign: 'center',
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
  const { gameStatus, points, direction } = state;

  const [highScore, setHighScore] = useLocalStorage(HIGH_SCORE_KEY, 0);
  const [prevHighScore, setPrevHighScore] = useState(highScore);

  useEffect(() => {
    if (gameStatus === GameStatus.FINISHED) {
      setPrevHighScore(highScore);
      setHighScore(Math.max(highScore, points));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameStatus]);

  if (gameStatus === GameStatus.FINISHED) {
    return (
      <GameOverModal
        points={points}
        prevHighScore={prevHighScore}
        onPlayAgain={() => dispatch({ type: ActionType.PLAY_AGAIN })}
      />
    );
  }

  return (
    <div style={styles.root}>
      <div style={styles.score}>
        {gameStatus !== GameStatus.IDLE && (
          <>
            <Score value={points} delay={100} step={15} />
            <br />
            <CurrentDirection direction={direction} />
          </>
        )}
      </div>
      <div style={styles.buttons}>
        <Switch value={gameStatus}>
          <Case value={GameStatus.IDLE}>
            <Button
              text="Start"
              onClick={() => dispatch({ type: ActionType.PLAY })}
            />
          </Case>
          <Case value={GameStatus.PLAYING}>
            <Button
              text="Pause"
              onClick={() => dispatch({ type: ActionType.PAUSE })}
            />
          </Case>
          <Case value={GameStatus.PAUSED}>
            <Button
              text="Resume"
              onClick={() => dispatch({ type: ActionType.PLAY })}
            />
          </Case>
        </Switch>
      </div>
    </div>
  );
}

function GameOverModal({ points, prevHighScore, onPlayAgain }) {
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
        'Play Again': onPlayAgain,
      }}
    />
  );
}
