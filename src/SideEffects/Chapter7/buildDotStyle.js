export function buildDotStyle(position, color, size) {
  const { x, y } = position;
  return {
    position: 'absolute',
    left: x,
    top: y,
    width: size,
    height: size,
    borderRadius: size / 2,
    backgroundColor: color,
    transform: 'translate(-50%, -50%)',
  };
}
