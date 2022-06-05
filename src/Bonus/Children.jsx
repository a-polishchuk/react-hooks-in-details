import { Children } from 'react';
import { getRandomColor } from 'utils/getRandomColor';

const styles = {
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  cellContainer: {
    flex: 1,
    margin: 10,
  },
  cell: {
    height: 40,
    borderRadius: 8,
    border: '1px solid #0005',
    boxShadow: '3px 3px 0px 0px #0002',
  },
};

function FlexRow({ children }) {
  console.log(children);

  return (
    <div style={styles.row}>
      {Children.map(children, (child, index) => (
        <div key={index} style={styles.cellContainer}>
          {child}
        </div>
      ))}
    </div>
  );
}

function Cell() {
  return (
    <div
      style={{
        ...styles.cell,
        backgroundColor: getRandomColor(),
      }}
    />
  );
}

export function ChildrenExample() {
  return (
    <>
      <h2>Children</h2>
      <FlexRow></FlexRow>
      <FlexRow>
        <Cell />
      </FlexRow>
      <FlexRow>
        <Cell />
        <Cell />
      </FlexRow>
      <FlexRow>
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
      </FlexRow>
    </>
  );
}
