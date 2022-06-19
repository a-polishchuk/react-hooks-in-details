export function getRandomArrayElement(array) {
  const randomIndex = Math.round(Math.random() * (array.length - 1));
  return array[randomIndex];
}
