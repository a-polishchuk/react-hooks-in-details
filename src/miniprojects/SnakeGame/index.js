import SnakeContextProvider from './SnakeContextProvider';
import SnakeGrid from './SnakeGrid';

export default function SnakeGame() {
  return (
    <SnakeContextProvider>
      <SnakeGrid />
    </SnakeContextProvider>
  );
}
