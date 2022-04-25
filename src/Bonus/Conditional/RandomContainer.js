import { useState } from 'react';
import Button from 'components/Button';
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
    color: 'white',
    padding: 8,
  };
}

export function RandomContainerTest() {
  const [, setDummyState] = useState();

  const rerender = () => {
    setDummyState({});
  };

  return (
    <>
      <LoggedLifecycle tag="Button" color="orange">
        <Button text="Re-render" onClick={rerender} />
      </LoggedLifecycle>
      <RandomContainer>
        <LoggedLifecycle tag="First" color="red">
          <p style={paragraphStyle('red')}>First random paragraph</p>
        </LoggedLifecycle>
        <LoggedLifecycle tag="Second" color="green">
          <p style={paragraphStyle('green')}>Second random paragraph</p>
        </LoggedLifecycle>
        <LoggedLifecycle tag="Third" color="blue">
          <p style={paragraphStyle('blue')}>Third random paragraph</p>
        </LoggedLifecycle>
      </RandomContainer>
    </>
  );
}
