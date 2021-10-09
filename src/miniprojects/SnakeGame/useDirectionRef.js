import { useCallback, useRef } from 'react';
import { useEvent } from 'react-use';
import { Direction } from './constants';

export function useDirectionRef() {
  const directionRef = useRef(Direction.UP);

  const handleKeyDown = useCallback((event) => {
    switch (event.code) {
      case 'ArrowUp':
        directionRef.current = Direction.UP;
        break;
      case 'ArrowRight':
        directionRef.current = Direction.RIGHT;
        break;
      case 'ArrowDown':
        directionRef.current = Direction.DOWN;
        break;
      case 'ArrowLeft':
        directionRef.current = Direction.LEFT;
        break;
      default:
        break;
    }
  }, []);

  useEvent('keydown', handleKeyDown);

  return directionRef;
}
