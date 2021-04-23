import { useRef } from 'react';
import { useElementSize } from './useElementSize';

const styles = {
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  cell: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    height: 100,
    borderRadius: 10,
    backgroundColor: '#AFA',
    color: '#040',
    fontSize: 20,
  },
};

function Row({ children }) {
  return <div style={styles.row}>{children}</div>;
}

function Cell() {
  const ref = useRef();
  const { width, height } = useElementSize(ref);
  return (
    <div ref={ref} style={styles.cell}>
      {width} x {height}
    </div>
  );
}

export default function Chapter26() {
  return (
    <>
      <h2>Chapter 26: useElementSize</h2>
      <Row>
        <Cell />
        <Cell />
        <Cell />
      </Row>
      <Row>
        <Cell />
        <Cell />
      </Row>
      <Row>
        <Cell />
      </Row>
      <Row>
        <Cell />
        <Cell />
        <Cell />
        <Cell />
      </Row>
    </>
  );
}
