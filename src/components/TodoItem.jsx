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
      <button 
        className={`check-btn ${theme}-button`} 
        onClick={toggleComplete}
      >
        <i className="fas fa-check"></i>
      </button>
      <button 
        className={`delete-btn ${theme}-button`} 
        onClick={handleDelete}
      >
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default TodoItem;