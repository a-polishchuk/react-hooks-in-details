import { useReducer } from 'react';
import Button from 'components/Button';

const initialState = {
  count: 0,
};

const Types = {
  INCREMENT: 'INCREMENT',
  DOUBLE: 'DOUBLE',
  CLEAR: 'CLEAR',
};

function reducer(state, action) {
  switch (action.type) {
    case Types.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case Types.DOUBLE:
      return {
        ...state,
        count: state.count * 2,
      };
    case Types.CLEAR:
      return initialState;
    default:
      console.log(`actiont type: ${action.type} was not recognized`);
      return state;
  }
}

export default function Chapter14() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = () => dispatch({ type: Types.INCREMENT });
  const double = () => dispatch({ type: Types.DOUBLE });
  const clear = () => dispatch({ type: Types.CLEAR });

  return (
    <div>
      <h2>14. useReducer</h2>
      <p>Cliks count: {state.count}</p>
      <div style={{ display: 'flex', gap: 10 }}>
        <Button onClick={increment} text="+1 Click" />
        <Button onClick={double} text="Double clicks" />
        <Button onClick={clear} text="Clear" />
      </div>
    </div>
  );
}
