import { useTodoContext } from '../../TodoContext';
import './index.css';

export default function TodoCounter() {
  const { data } = useTodoContext();
  const todoCount = data?.length ?? 0;

  return (
    <div className="dfc-todo-counter">
      Todos:
      <br />
      <strong>{todoCount}</strong>
    </div>
  );
}
