import { Children } from 'react';

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
  console.log(children);

  return (
    <div style={styles.row}>
      {Children.map(children, (child, index) => (
        <div key={index} style={styles.cell}>
          {child}
        </div>
      ))}
    </div>
  );
}

function Cell() {
  return <div style={styles.redBlock} />;
}

export default function ChildrenExample() {
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
