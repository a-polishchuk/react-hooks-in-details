import { useState } from 'react';
import { Button } from 'components/Button';
import { LoggedLifecycle, useLoggedLifecycle } from './LoggedLifecycle';

function getRandomElement(array) {
  const maxIndex = array.length - 1;
  const randomIndex = Math.round(Math.random() * maxIndex);
  return array[randomIndex];
}

function RandomContainer({ children }) {
  useLoggedLifecycle('Random Container', '#DDDDDD');

  if (Array.isArray(children)) {
    return getRandomElement(children);
  }

  return children;
}

function paragraphStyle(color) {
  return {
    backgroundColor: color,
    borderRadius: 8,
    color: 'white',
    padding: 16,
    marginBottom: 16,
  };
}

export default function RandomContainerTest() {
  const [, setDummyState] = useState(null);

  const rerender = () => {
    setDummyState({});
  };

  return (
    <>
      <h2>Components lifecycle. Random container</h2>

      <RandomContainer>
        <LoggedLifecycle key={1} tag="First" color="red">
          <p style={paragraphStyle('red')}>First random paragraph</p>
        </LoggedLifecycle>
        <LoggedLifecycle key={2} tag="Second" color="green">
          <p style={paragraphStyle('green')}>Second random paragraph</p>
        </LoggedLifecycle>
        <LoggedLifecycle key={3} tag="Third" color="blue">
          <p style={paragraphStyle('blue')}>Third random paragraph</p>
        </LoggedLifecycle>
      </RandomContainer>

      <LoggedLifecycle tag="Button" color="orange">
        <Button text="Click me to trigger new render" onClick={rerender} />
      </LoggedLifecycle>
    </>
  );
}
