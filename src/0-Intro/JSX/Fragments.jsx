import { Fragment } from 'react';

function FewPoints() {
  return (
    <>
      <li>Declarative</li>
      <li>Uni-directional data flow</li>
      <li>Virtual DOM</li>
      <li>Flexibility</li>
    </>
  );
}

function FewMorePoints() {
  return (
    <>
      <li>Sometimes it has too much flexibility</li>
      <li>It's a library, not a framework</li>
      <li>Supports different platforms</li>
    </>
  );
}

export function Fragments() {
  return (
    <Fragment>
      <h2>Introduction to JSX</h2>
      <h3>React.Fragment</h3>
      React is famous for:
      <ol>
        <FewPoints />
        <FewMorePoints />
      </ol>
    </Fragment>
  );
}
