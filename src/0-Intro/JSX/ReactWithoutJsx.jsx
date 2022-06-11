import { createElement } from 'react';

export function ReactWithoutJsx() {
  return createElement(
    'div',
    null,
    createElement('h2', null, 'Introduction to JSX'),
    createElement('h3', null, 'React.createElement()'),
    createElement(
      'p',
      { fontSize: '18px' },
      `You don't have to use JSX, but the code is much harder to work without it`
    )
  );
}

export function SameThingWithJsx() {
  return (
    <div>
      <h2>Introduction to JSX</h2>
      <h3>React.createElement()</h3>
      <p style={{ fontSize: '18px' }}>
        You don't have to use JSX, but the code is much harder to work without
        it
      </p>
    </div>
  );
}
