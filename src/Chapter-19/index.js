import { useEffect, useState, useRef, memo } from 'react';

function useWhatCausedRender(name, props) {
  const prevPropsRef = useRef({});
  useEffect(() => {
    const changes = [];
    const prevProps = prevPropsRef.current;
    const keySet = new Set([...Object.keys(prevProps), ...Object.keys(props)]);

    keySet.forEach((key) => {
      if (prevProps[key] !== props[key]) {
        changes.push({
          key,
          from: prevProps[key],
          to: props[key],
        });
      }
    });

    console.log(`[${name}] rerendered because of:`);
    changes.forEach(({ key, from, to }) => {
      console.log(`  ${key}: ${from} -> ${to}`);
    });

    prevPropsRef.current = props;
  }); // no deps list, will be invoked after each rerender
}

const HeavyComponent = memo((props) => {
  useWhatCausedRender('HeavyComponent', props);

  return (
    <div>
      <div>Counter: {props.counter}</div>
      <div>Text: {props.text}</div>
    </div>
  );
});

export default function Chapter19() {
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState('');

  const incrementCounter = () => {
    setCounter((prev) => prev + 1);
  };

  const clearLocalState = () => {
    setCounter(0);
    setText('');
  };

  const onTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <h2>Chapter 19: useWhatCausedRender</h2>
      <p>
        <button onClick={incrementCounter}>Increment counter</button>
        <button onClick={clearLocalState}>Clear local state</button>
      </p>
      <p>
        <input type="text" value={text} onChange={onTextChange} />
      </p>
      <HeavyComponent counter={counter} text={text} />
    </>
  );
}
