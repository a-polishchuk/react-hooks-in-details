import { useState } from 'react';
import { Toolbar } from 'components/Toolbar';
import { Button } from 'components/Button';
import { ColoredBlock } from 'components/ColoredBlock';

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

function Child({ tag, tagColor }) {
  return (
    <LoggedLifecycle tag={tag} color={tagColor}>
      <ColoredBlock>{tag}</ColoredBlock>
    </LoggedLifecycle>
  );
}

export function RandomContainerTest() {
  const [, setDummyState] = useState(null);

  const rerender = () => {
    setDummyState({});
  };

  return (
    <>
      <h2>Components lifecycle. Random container</h2>

      <RandomContainer>
        <Child key={1} tag="First" tagColor="red" />
        <Child key={2} tag="Second" tagColor="green" />
        <Child key={3} tag="Third" tagColor="blue" />
        <Child key={4} tag="Fourth" tagColor="orange" />
      </RandomContainer>

      <LoggedLifecycle tag="Button" color="orange">
        <Toolbar>
          <Button text="Click me to trigger new render" onClick={rerender} />
        </Toolbar>
      </LoggedLifecycle>
    </>
  );
}
