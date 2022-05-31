export function generateDummies(number) {
  const array = [];
  for (let i = 0; i < number; i++) {
    array.push(
      <div
        key={i}
        style={{
          position: 'absolute',
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: 10,
          height: 10,
          borderRadius: 5,
          backgroundColor: '#EEEEEE44',
          pointerEvents: 'none',
          zIndex: -1,
        }}
      />
    );
  }
  return array;
}
