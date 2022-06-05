function getRandomValue() {
  const numVal = Math.round(100 + Math.random() * 155);
  const stringVal = numVal.toString(16);
  return stringVal.length < 2 ? '0' + stringVal : stringVal;
}

export function getRandomColor() {
  const r = getRandomValue();
  const g = getRandomValue();
  const b = getRandomValue();
  return `#${r}${g}${b}`;
}
