import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login"); 
  };

  return (
    <div>
      <h1>Welcome to the Todo App</h1>
      <button onClick={goToLogin}>Go to Login</button>
    </div>
  );
}

export default Home;