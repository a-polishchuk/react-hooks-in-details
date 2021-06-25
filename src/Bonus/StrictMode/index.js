import { StrictMode, useState, useRef } from 'react';

function ClickTest() {
  const [clicksCount, setClicksCount] = useState(0);
  const rendersCountRef = useRef(0);

  const handleClick = () => {
    setClicksCount((value) => value + 1);
  };

  rendersCountRef.current++;
  console.log(`renders count: ${rendersCountRef.current}`);

  return (
    <button onClick={handleClick}>I'm in Strict Mode! ({clicksCount})</button>
  );
}

export default function StrictModeExample() {
  return (
    <>
      <h2>Strict mode</h2>
      <StrictMode>
        <ClickTest />
      </StrictMode>
    </>
  );
}
