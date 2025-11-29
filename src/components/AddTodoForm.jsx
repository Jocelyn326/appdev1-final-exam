import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos/todosSlice";


function AddTodoForm({ theme }) {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    dispatch(addTodo(title.trim()));
    setTitle("");
  };


  const inputClass = `todo-input ${theme}-input`;
  const buttonClass = `todo-btn ${theme}-button`;


  return (
    <div id="form">
      <form onSubmit={handleSubmit}>
        <input
          className={inputClass}
          type="text"
          placeholder="Add a task."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className={buttonClass} type="submit">
          I Got This!
        </button>
      </form>
    </div>
  );
}


export default AddTodoForm;