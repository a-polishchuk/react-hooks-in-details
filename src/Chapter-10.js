import { useState, useRef, forwardRef } from 'react';
import PinInput from './PinInput';

function logRender(WrappedComponent) {
  return forwardRef(function (props, ref) {
    const name = WrappedComponent.name ?? WrappedComponent.render?.name;
    console.log(`render ${name}`);
    console.log(props);
    return <WrappedComponent ref={ref} {...props} />;
  });
}

const LoggedPinInput = logRender(PinInput);

function SimpleText({ text }) {
  return <span>{text}</span>;
}

const LoggedSimpleText = logRender(SimpleText);

export function Chapter10() {
  const [digits, setDigits] = useState(['', '', '']);
  const inputRef = useRef();
  const focus = () => inputRef.current?.focus();

  return (
    <>
      <p>
        <LoggedSimpleText text="Some text" />
      </p>
      <LoggedPinInput ref={inputRef} digits={digits} onChange={setDigits} />
      <p>
        <button onClick={focus}>focus</button>
      </p>
    </>
  );
}
