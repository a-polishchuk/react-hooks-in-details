function squareStyle(size, backgroundColor) {
  return {
    width: size,
    height: size,
    backgroundColor,
  };
}

export function ThemeOption({ theme, selected, onSelect }) {
  const { primaryColor, secondaryColor } = theme;
  const cellSize = selected ? 50 : 40;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
      onClick={() => onSelect(theme)}
    >
      <div style={squareStyle(cellSize, primaryColor)} />
      <div style={squareStyle(cellSize, secondaryColor)} />
    </div>
  );
}
