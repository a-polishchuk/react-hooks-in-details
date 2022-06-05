import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { getRandomColor } from 'utils/getRandomColor';
import { Toolbar } from 'components/Toolbar';

import { Box } from './Box';

const LIGHT_POINT = [10, 10, 10];
const BOX_POSITION = [0, 0, 0];

export function ThreeJsDemo() {
  const [speed, setSpeed] = useState(0.02);
  const [scale, setScale] = useState(1);
  const [color, setColor] = useState(getRandomColor);

  const applySpeedChange = (event) => {
    setSpeed(parseFloat(event.target.value || 0));
  };

  const applyScaleChange = (event) => {
    setScale(parseFloat(event.target.value || 0));
  };

  const handleBoxClick = () => {
    setColor(getRandomColor());
  };

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <Canvas>
        <ambientLight />
        <pointLight position={LIGHT_POINT} />
        <Box
          position={BOX_POSITION}
          speed={speed}
          scale={scale}
          color={color}
          onClick={handleBoxClick}
        />
      </Canvas>

      <div style={{ position: 'absolute', left: 0, top: 0 }}>
        <h2>@react-three/fiber</h2>
        <Toolbar>
          Speed
          <input
            type="number"
            min={0}
            max={0.1}
            step={0.01}
            value={speed}
            onChange={applySpeedChange}
          />
          Scale
          <input
            type="number"
            min={0.1}
            max={3}
            step={0.1}
            value={scale}
            onChange={applyScaleChange}
          />
        </Toolbar>
      </div>
    </div>
  );
}
