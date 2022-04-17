import GameContextProvider from './GameContext/GameContextProvider';
import Grid from './Grid';

export default function VeganDragon() {
  return (
    <GameContextProvider>
      <Grid />
    </GameContextProvider>
  );
}
