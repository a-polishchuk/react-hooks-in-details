import { useTodoList } from '../../hooks/useTodoList';
import './index.css';

export function TodoCounter() {
  const { data } = useTodoList();
  const todoCount = data?.length ?? 0;

  return (
    <div className="rq-todo-counter">
      Todos:
      <br />
      <strong>{todoCount}</strong>
    </div>
  );
}
