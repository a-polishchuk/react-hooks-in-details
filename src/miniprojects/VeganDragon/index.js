import GameProvider from './ContextProvider';
import Grid from './Grid';

export default function VeganDragon() {
  return (
    <GameProvider>
      <Grid />
    </GameProvider>
  );
}
