import { buildStyle } from './buildStyle';

export function Leaf({ path, onClick }) {
  const leafStyle = {
    ...buildStyle(),
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={leafStyle} onClick={onClick}>
      {path.join(', ')}
    </div>
  );
}
