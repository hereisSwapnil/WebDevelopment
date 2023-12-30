import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todoInput, setTodoInput] = useState("");
  const [todo, setTodo] = useState([]);
  const Add = () => {
    todo.push([todoInput, uuidv4(), false]);
    setTodo([...todo]);
    setTodoInput("");
  };
  const deleteTodo = (id) => {
    let newTodo = todo.filter((e) => e[1] != id);
    setTodo(newTodo);
  };
  const upperCaseAll = () => {
    let newTodo = todo.map((e) => {
      return [e[0].toUpperCase(), e[1], e[2]];
    });
    setTodo(newTodo);
  };

  const upperCaseMe = (id) => {
    let newTodo = todo.map((e) => {
      if (e[1] == id) {
        return [e[0].toUpperCase(), e[1], e[2]];
      } else {
        return e;
      }
    });
    setTodo(newTodo);
  };

  const doneTask = (id) => {
    let newTodo = todo.map((e) => {
      if (e[1] == id) {
        return [e[0], e[1], true];
      } else {
        return e;
      }
    });
    setTodo(newTodo);
  };

  return (
    <>
      <input
        type="text"
        name="todo"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
      />
      <button onClick={Add}>Add</button>
      <hr />
      <ul>
        {todo.map((e) => (
          <li
            key={e[1]}
            style={{ textDecoration: e[2] ? "line-through" : "none" }}
          >
            {e[0]}
            <button onClick={() => deleteTodo(e[1])}>Delete</button>
            <button onClick={() => upperCaseMe(e[1])}>UpperCase</button>
            <button onClick={() => doneTask(e[1])}>Done</button>
          </li>
        ))}
      </ul>
      <button onClick={upperCaseAll}>UpperCase All</button>
    </>
  );
}

export default App;
