import TodoItem from "./TodoItem";

function TodoList({ todos, theme }) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} theme={theme} />
      ))}
    </ul>
  );
}

export default TodoList;