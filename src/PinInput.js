import { useImperativeHandle, useRef, forwardRef } from 'react';

const inputStyle = {
  width: 30,
  height: 30,
  fontSize: 20,
  textAlign: 'center',
  margin: 5,
};

function updateArray(array, index, value) {
  const copy = [...array];
  copy[index] = value;
  return copy;
}

function PinInput(props, ref) {
  const { digits, onChange } = props;
  const inputRefs = useRef(new Array(digits.length));

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRefs.current[0].focus();
    },
  }));

  const handleChange = (index, text) => {
    const oldDigit = digits[index];
    const newDigit = text.trim().replace(oldDigit, '');

    if (newDigit < '0' || newDigit > '9') {
      return;
    }

    onChange(updateArray(digits, index, newDigit));

    const inputs = inputRefs.current;
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
      onChange(updateArray(digits, index, ''));
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
