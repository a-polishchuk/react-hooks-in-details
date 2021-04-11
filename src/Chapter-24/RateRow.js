const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  item: (selected, filled, disabled) => ({
    width: selected ? 50 : 40,
    height: selected ? 50 : 40,
    margin: selected ? 5 : 10,
    fontSize: selected ? 24 : 14,
    borderRadius: 50,
    border: '2px solid #BBDDFF',
    transition: 'all linear 100ms',
    backgroundColor: filled ? '#BBDDFF' : '#FFF',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: disabled ? 0.5 : 1,
  }),
};

const DIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function RateRow({ score, onChange }) {
  return (
    <div style={styles.container}>
      {DIGITS.map((digit) => {
        const selected = digit === score;
        const filled = digit <= score;
        const disabled = !onChange;
        const style = styles.item(selected, filled, disabled);
        const onClick = () => {
          if (onChange) {
            onChange(digit);
          }
        };
        return (
          <div style={style} onClick={onClick}>
            {digit}
          </div>
        );
      })}
    </div>
  );
}
