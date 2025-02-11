
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const addTodo = () => {
    if (inputValue.trim() === "") return;
    setTodos([...todos, inputValue]);
    setInputValue("");
  };

  return (
    <div>
      <h1>React Todo-App</h1>
      {/* Inputfält och knapp */}
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Lägg till en uppgift..."
        />
        <button onClick={addTodo}>Lägg till
        </button>

        {/* Lista med uppgifter */}
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
  );     
}

export default App;
