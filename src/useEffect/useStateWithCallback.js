import { useEffect, useState } from 'react';

export function Example() {
  const [text, setText] = useState('');

  useEffect(() => {
    console.log(text);
  }, [text]);

  return (
    <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
  );
}
