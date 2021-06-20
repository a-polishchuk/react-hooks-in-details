import { memo } from 'react';

const styles = {
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  cell: {
    flex: 1,
    margin: 10,
  },
  redBlock: {
    height: 40,
    backgroundColor: 'red',
  },
};

function FlexRow({ children }) {
  console.log();

  return (
    <div style={styles.row}>
      {children.map((child) => (
        <div style={styles.cell}>{child}</div>
      ))}
    </div>
  );
}

const MemoRow = memo(FlexRow);

export default function ChildrenExample() {
  return (
    <MemoRow>
      <div style={styles.redBlock} />
      <div style={styles.redBlock} />
      <div style={styles.redBlock} />
      <div style={styles.redBlock} />
      <div style={styles.redBlock} />
    </MemoRow>
  );
}
