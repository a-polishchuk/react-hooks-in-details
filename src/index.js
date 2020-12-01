import ReactDOM from 'react-dom';
import { List } from './useCallback/useCallbackBasics';

const items = [
  { id: 1, name: 'First' },
  { id: 2, name: 'Second' },
  { id: 3, name: 'Third' },
];

ReactDOM.render(<List items={items} />, document.getElementById('root'));
