import { StrictMode, useState, useRef } from 'react';
import { Toolbar } from 'components/Toolbar';
import { Button } from 'components/Button';
import { Label } from 'components/Label';
import { ValueLabel } from 'components/ValueLabel';

function ClickTest() {
  const [clicksCount, setClicksCount] = useState(0);
  const rendersCountRef = useRef(0);

  const handleClick = () => {
    setClicksCount((value) => value + 1);
  };

  rendersCountRef.current++;
  console.log(`renders count: ${rendersCountRef.current}`);

  return (
    <>
      <Toolbar>
        <Label text="Clicks count" />
        <ValueLabel value={clicksCount} />
        <Button text="+1" onClick={handleClick} />
      </Toolbar>
      <Toolbar>
        <Label text="Render count" />
        <ValueLabel value={rendersCountRef.current} />
      </Toolbar>
    </>
  );
}

export function StrictModeExample() {
  return (
    <>
      <h2>Strict mode</h2>
      <StrictMode>
        <ClickTest />
      </StrictMode>
    </>
  );
}
