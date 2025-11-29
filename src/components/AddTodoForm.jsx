



import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos/todosSlice";

function AddTodoForm({ theme }) {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleAdd = (e) => {
    e.preventDefault();
    const todoText = title.trim();
    
    if (todoText === "") {
      alert("You must write something!");
      return;
    }
    
    dispatch(addTodo(todoText));
    setTitle("");
  };

  return (
    <form onSubmit={handleAdd}>
      <input
        className={`todo-input ${theme}-input`}
        type="text"
        placeholder="Add a task."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className={`todo-btn ${theme}-button`} type="submit">
        I Got This!
      </button>
    </form>
  );
}

export default AddTodoForm;