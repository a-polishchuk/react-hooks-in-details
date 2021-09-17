import { useTodoContext } from '../TodoContext';
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

function TodoList() {
  const { loading, data } = useTodoContext();
  const todos = loading ? [] : data;

  return (
    <div className="dfc-todo-list">
      <table>
        <thead>
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

export default TodoList;
