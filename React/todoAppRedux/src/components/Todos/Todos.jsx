import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { markAsDone } from "../../reducers/todoSlice";

export const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo);
  return (
    <>
      <h2>Todos</h2>
      <ul>
        {todos.todo.map((todo) => (
          <div key={todo.id}>
            <li style={{ textDecoration: todo.isDone ? "line-through" : "" }}>
              {todo.message}
            </li>
            <button onClick={() => dispatch(markAsDone(todo.id))}>Done</button>
          </div>
        ))}
      </ul>
    </>
  );
};
