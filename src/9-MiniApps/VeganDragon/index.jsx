import { GameContextProvider } from './GameContext/GameContextProvider';
import { Grid } from './Grid';
import { GameControls } from './GameControls';

export function VeganDragon() {
  return (
    <GameContextProvider>
      <Grid />
      <GameControls />
    </GameContextProvider>
  );
}
