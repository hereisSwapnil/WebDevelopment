import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { AddTodo } from "./components/AddTodo/AddTodo";
import { Todos } from "./components/Todos/Todos";

function App() {

  return (
    <>
      Todo App Redux
      <br />
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
