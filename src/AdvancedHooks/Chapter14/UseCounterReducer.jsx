import { useReducer } from 'react';
import { Toolbar } from 'components/Toolbar';
import { Button } from 'components/Button';
import { ValueLabel } from 'components/ValueLabel';

const INITIAL_COUNT = 0;
const Actions = {
  INCREMENT: 'INCREMENT',
  DOUBLE: 'DOUBLE',
  POWER_2: 'POWER_2',
  RESET: 'RESET',
};

function counterReducer(count, action) {
  switch (action) {
    case Actions.INCREMENT:
      return count + 1;
    case Actions.DOUBLE:
      return count * 2;
    case Actions.POWER_2:
      return count * count;
    case Actions.RESET:
      return INITIAL_COUNT;
    default:
      throw new Error(`Action ${action} was not recognized`);
  }
}

export function UseCounterReducer() {
  const [count, dispatch] = useReducer(counterReducer, INITIAL_COUNT);

  return (
    <>
      <h2>14. useReducer</h2>
      <h3>Simple counter example</h3>

      <Toolbar>
        <ValueLabel value={count} />
      </Toolbar>

      <Toolbar>
        <Button text="+ 1" onClick={() => dispatch(Actions.INCREMENT)} />
        <Button text="* 2" onClick={() => dispatch(Actions.DOUBLE)} />
        <Button text="^ 2" onClick={() => dispatch(Actions.POWER_2)} />
        <Button text="Reset" onClick={() => dispatch(Actions.RESET)} />
      </Toolbar>
    </>
  );
}
