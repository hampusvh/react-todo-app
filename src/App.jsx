
import { useState } from "react";
import styles from "./Todo.module.css";

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

<>
<h1>React : to-do app</h1>
    <div className={styles.listContainer}>

      {/* Inputfält och knapp */}
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="... add something to do ..."
        className={styles.inputField}
        />
        <button onClick={addTodo} className={styles.addButton}>Add
        </button>
      </div>
        {/* Lista med uppgifter */}
        <div className={styles.listContainer}>
        <ul>
          {todos.map((todo, index) => (
            <li
            key={index}
            onClick={() => toggleTodo(index)}
            className={`${styles.todoItem} ${todo.completed ? styles.completed : ""}`}
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
      </>
  );     
}

export default App;
