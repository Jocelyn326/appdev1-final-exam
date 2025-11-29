import { useState } from "react";


function TodoItem({ todo, theme, onToggle, onDelete }) {
  const [isFalling, setIsFalling] = useState(false);


  const handleDeleteClick = () => {
    setIsFalling(true);
  };


  const handleTransitionEnd = () => {
    if (isFalling) {
      onDelete(todo.id);
    }
  };


  return (
    <div
      className={`todo ${theme}-todo ${
        todo.completed ? "completed" : ""
      } ${isFalling ? "fall" : ""}`}
      onTransitionEnd={handleTransitionEnd}
    >
      <li className="todo-item">{todo.title}</li>
      <button
        className={`check-btn ${theme}-button`}
        onClick={() => onToggle(todo)}
      >
        <i className="fas fa-check"></i>
      </button>
      <button
        className={`delete-btn ${theme}-button`}
        onClick={handleDeleteClick}
      >
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}


export default TodoItem;