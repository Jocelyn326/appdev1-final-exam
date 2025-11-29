import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos, setTheme } from "../features/todos/todosSlice";
import AddTodoForm from "../components/AddTodoForm";
import TodoList from "../components/TodoList";

function Todos() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.items);
  const theme = useSelector((state) => state.todos.theme);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    dispatch(fetchTodos());
    
    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem("savedTheme");
    if (savedTheme) {
      dispatch(setTheme(savedTheme));
      document.body.className = savedTheme;
    } else {
      document.body.className = "standard";
    }

    // Update time every second
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, [dispatch]);

  const changeTheme = (newTheme) => {
    dispatch(setTheme(newTheme));
    localStorage.setItem("savedTheme", newTheme);
    document.body.className = newTheme;
  };

  return (
    <div>
      <div id="header">
        <div className="flexrow-container">
          <div 
            className="standard-theme theme-selector" 
            onClick={() => changeTheme('standard')}
          ></div>
          <div 
            className="light-theme theme-selector" 
            onClick={() => changeTheme('light')}
          ></div>
          <div 
            className="darker-theme theme-selector" 
            onClick={() => changeTheme('darker')}
          ></div>
        </div>
        <h1 id="title" className={theme === 'darker' ? 'darker-title' : ''}>
          Just do it.
        </h1>
      </div>

      <div id="form">
        <AddTodoForm theme={theme} />
      </div>

      <div id="datetime">
        <p>{currentTime.toLocaleString('en-US', {
          month: '2-digit',
          day: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        })}</p>
      </div>

      <div id="myUnOrdList">
        <TodoList todos={todos} theme={theme} />
      </div>
    </div>
  );
}

export default Todos;