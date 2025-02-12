
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    { text: "Exempeluppgift", completed: false },
  ]);
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const addTodo = () => {
    if (inputValue.trim() === "") return;
    setTodos([...todos, { text: inputValue, completed: false }]);
    setInputValue("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addTodo();
    }
  };

  const toggleTodo = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
  );
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((todo, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>React Todo-App</h1>
      {/* Inputfält och knapp */}
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Lägg till en uppgift..."
        />
        <button onClick={addTodo}>Lägg till
        </button>

        {/* Lista med uppgifter */}
        <ul>
          {todos.map((todo, index) => (
            <li
            key={index}
            onClick={() => toggleTodo(index)}
            style={{ textDecoration: todo.completed ? "Line-through" : "none" }} 
            >
              {todo.text}
              <button onClick={(e) => {
                e.stopPropagation();
                deleteTodo(index);
              }}>
               ❌ 
              </button>
              </li>
          ))}
        </ul>
      </div>
  );     
}

export default App;
