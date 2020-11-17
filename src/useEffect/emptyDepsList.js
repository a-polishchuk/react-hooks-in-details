import { useEffect } from 'react';

// IMPORTANT:
// Unlike componentDidMount and componentDidUpdate,
// the function passed to useEffect fires after layout and paint,
// during a deferred event.

// Main idea here is "we shouldn't block the browser from updating the screen"

export function EmptyDepsList() {
  // NOTE: second useEffect param is omitted
  useEffect(() => {
    console.log('executed asynchronously AFTER render');
  });

  console.log('render');

  return <p>Empty dependencies list example.</p>;
}
