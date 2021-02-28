import { useState, useRef, forwardRef } from 'react';
import PinInput from '../Chapter-9/PinInput';

function logRender(WrappedComponent) {
  return forwardRef(function (props, ref) {
    const name = WrappedComponent.name ?? WrappedComponent.render?.name;
    console.log(`render ${name}`);
    return <WrappedComponent ref={ref} {...props} />;
  });
}

function SimpleText({ text }) {
  return <span>{text}</span>;
}

const LoggedSimpleText = logRender(SimpleText);
const LoggedPinInput = logRender(PinInput);

export default function Chapter10() {
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
        <button onClick={focus}>FOCUS</button>
      </p>
    </>
  );
}
