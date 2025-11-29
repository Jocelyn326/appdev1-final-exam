import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTodo, deleteTodo } from "../features/todos/todosSlice";

function TodoItem({ todo, theme }) {
  const dispatch = useDispatch();
  const [isFalling, setIsFalling] = useState(false);

  const toggleComplete = () => {
    dispatch(updateTodo({ ...todo, completed: !todo.completed }));
  };

  const handleDelete = () => {
    setIsFalling(true);
    setTimeout(() => {
      dispatch(deleteTodo(todo.id));
    }, 500);
  };

  return (
    <div className={`todo ${theme}-todo ${todo.completed ? 'completed' : ''} ${isFalling ? 'fall' : ''}`}>
      <li className="todo-item">{todo.title}</li>
      <div style={{ display: 'flex', gap: '5px' }}>
        <button 
          className={`check-btn ${theme}-button`} 
          onClick={toggleComplete}
          aria-label="Complete todo"
        >
          <i className="fas fa-check"></i>
        </button>
        <button 
          className={`delete-btn ${theme}-button`} 
          onClick={handleDelete}
          aria-label="Delete todo"
        >
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
}

export default TodoItem;