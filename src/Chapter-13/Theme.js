export const Theme = {
  GREEN: 'green',
  BLUE: 'blue',
  RED: 'red',
};

export function getThemeColor(theme) {
  switch (theme) {
    case Theme.RED:
      return '#994444';
    case Theme.BLUE:
      return '#4444FF';
    default:
      return '#449944';
  }
}
