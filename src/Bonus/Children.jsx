import { Children } from 'react';
import { ColoredBlock } from 'components/ColoredBlock';

const styles = {
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  cellContainer: {
    flex: 1,
    margin: 10,
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

export function ChildrenExample() {
  return (
    <>
      <h2>Children</h2>
      <FlexRow></FlexRow>
      <FlexRow>
        <ColoredBlock />
      </FlexRow>
      <FlexRow>
        <ColoredBlock />
        <ColoredBlock />
      </FlexRow>
      <FlexRow>
        <ColoredBlock />
        <ColoredBlock />
        <ColoredBlock />
        <ColoredBlock />
        <ColoredBlock />
      </FlexRow>
      <FlexRow>
        <ColoredBlock />
        <ColoredBlock />
        <ColoredBlock />
      </FlexRow>
    </>
  );
}
