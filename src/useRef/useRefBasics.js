import { useState, useRef } from 'react';

export function Example() {
  const inputRef = useRef();
  const toggledRef = useRef(false);
  const [toggledState, setToggledState] = useState(false);

  const onChange = (event) => {
    const text = event.target.value;
    if (text === 'blur') {
      inputRef.current?.blur();
    }
  };

  const focus = () => {
    inputRef.current?.focus();
  };

  const changeRef = () => {
    toggledRef.current = !toggledRef.current;
    console.log(`toggled to: ${toggledRef.current}`);
  };

  const changeState = () => {
    setToggledState((prevValue) => !prevValue);
  };

  console.log(
    `toggledRef: ${toggledRef.current}, toggledState: ${toggledState}`
  );

  return (
    <div>
      <input ref={inputRef} onChange={onChange} />
      <p>
        <button onClick={focus}>FOCUS</button>
      </p>
      <p>
        <button onClick={changeRef}>TOGGLE REF</button>
        <button onClick={changeState}>TOGGLE STATE</button>
      </p>
    </div>
  );
}
