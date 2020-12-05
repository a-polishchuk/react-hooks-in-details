import { useRef, useImperativeHandle, forwardRef } from 'react';

const inputStyle = {
  width: 30,
  height: 30,
  fontSize: 20,
  textAlign: 'center',
  margin: 5,
};

function PinInput(props, ref) {
  const { digits, onChange } = props;
  const inputRefs = useRef(new Array(6));

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRefs.current[0].focus();
    },
  }));

  const updateDigits = (index, value) => {
    const copy = [...digits];
    copy[index] = value;
    return copy;
  };

  const handleChange = (index, text) => {
    const inputs = inputRefs.current;
    const oldDigit = digits[index];
    const newDigit = text.trim().replace(oldDigit, '');

    if (newDigit < '0' || newDigit > '9') {
      return;
    }

    onChange(updateDigits(index, newDigit));
    if (index < inputs.length - 1) {
      inputs[index + 1].focus();
    } else {
      inputs[index].blur();
    }
  };

  const handleKeyDown = (index, keyPressed) => {
    if (keyPressed !== 'Backspace') {
      return;
    }
    if (digits[index]) {
      onChange(updateDigits(index, ''));
    } else if (index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div>
      {digits.map((digit, index) => (
        <input
          key={index}
          style={inputStyle}
          value={digit}
          onChange={(event) => handleChange(index, event.target.value)}
          onKeyDown={(event) => handleKeyDown(index, event.nativeEvent.key)}
          ref={(ref) => {
            inputRefs.current[index] = ref;
          }}
        />
      ))}
    </div>
  );
}

export default forwardRef(PinInput);
