import { getRandomColor } from 'utils/getRandomColor';

function generateTheme() {
  const primaryColor = getRandomColor();
  return {
    primaryColor,
    secondaryColor: primaryColor + '33',
  };
}

export function generateThemes(count) {
  const themes = [];
  for (let i = 0; i < count; i++) {
    themes.push(generateTheme());
  }
  return themes;
}
