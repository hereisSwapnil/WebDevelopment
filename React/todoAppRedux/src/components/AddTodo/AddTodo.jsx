import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../reducers/todoSlice";

export const AddTodo = () => {
  const [todoValue, setTodoValue] = useState("");
  const dispatch = useDispatch();
  const handleAddTodo = () => {
    dispatch(addTodo(todoValue));
    setTodoValue("");
  };
  return (
    <>
      <input
        type="text"
        name="todoValue"
        value={todoValue}
        onChange={(e) => setTodoValue(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </>
  );
};
