import { useTodoList } from '../hooks/useTodoList';
import { Button } from 'components/Button';
import './index.css';

function TodoRow({ number, data }) {
  const { title, completed } = data;
  return (
    <tr>
      <td>{number}</td>
      <td>{title}</td>
      <td>{completed && '\u{2705}'}</td>
    </tr>
  );
}

export function TodoList() {
  const { loading, data, invalidate } = useTodoList();
  const todos = loading ? [] : data;

  const handleRefresh = () => {
    invalidate();
  };

  return (
    <div className="rq-todo-list">
      <table>
        <thead>
          <tr>
            <th></th>
            <th className="title">Todos List</th>
            <th>
              <Button text="Refresh" onClick={handleRefresh} />
            </th>
          </tr>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <TodoRow key={todo.id} number={index + 1} data={todo} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
