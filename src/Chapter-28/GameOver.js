export default function GameOver({ score, restartGame }) {
  return (
    <>
      <p>Game over! Your score: {score}</p>
      <button onClick={restartGame}>Restart</button>
    </>
  );
}
