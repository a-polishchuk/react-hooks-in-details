import { ColoredBlock } from 'components/ColoredBlock';

import { nodeStyle } from './nodeStyle';

export function Leaf({ path, onClick }) {
  const leafStyle = {
    ...nodeStyle,
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <ColoredBlock style={leafStyle} onClick={onClick}>
      {path.join(', ')}
    </ColoredBlock>
  );
}
