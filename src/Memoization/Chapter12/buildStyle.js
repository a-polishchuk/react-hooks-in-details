function generateColorComponent() {
  return 120 + Math.random() * 135;
}

function generateRandomColor() {
  const r = generateColorComponent();
  const g = generateColorComponent();
  const b = generateColorComponent();
  return `rgb(${r}, ${g}, ${b})`;
}

export function buildStyle() {
  return {
    flex: 1,
    minHeight: 40,
    display: 'flex',
    flexDirection: 'column',
    padding: 20,
    gap: 10,
    borderRadius: 8,
    border: '1px solid #00000088',
    boxShadow: '3px 3px 0px 0px #00000044',
    transition: 'all 0.5s ease-in-out',
    color: 'white',
    textShadow: '1px 1px #00000099',
    backgroundColor: generateRandomColor(),
  };
}
