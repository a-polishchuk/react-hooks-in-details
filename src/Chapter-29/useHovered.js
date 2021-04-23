import { useEffect, useState } from 'react';

export function useHovered(elementRef) {
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (!elementRef.current) {
      return;
    }

    const handleMouseOver = () => {
      setHovered(true);
    };

    const handleMouseOut = () => {
      setHovered(false);
    };

    const node = elementRef.current;
    node.addEventListener('mouseover', handleMouseOver);
    node.addEventListener('mouseout', handleMouseOut);

    return () => {
      node.removeEventListener('mouseover', handleMouseOver);
      node.removeEventListener('mouseout', handleMouseOut);
    };
  }, [elementRef]);

  return hovered;
}
