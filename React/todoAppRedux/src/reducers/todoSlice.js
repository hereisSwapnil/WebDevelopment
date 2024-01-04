import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  todo: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      let todo_ = { id: uuidv4(), message: action.payload, isDone: false };
      state.todo.push(todo_);
      console.log(todo_);
    },
    deleteTodo: (state, action) => {
      state.todo = state.todo.filter((todo) => todo.id !== action.payload);
    },
    markAsDone: (state, action) => {
      const todoToUpdate = state.todo.find(
        (todo) => todo.id === action.payload
      );
      if (todoToUpdate) {
        todoToUpdate.isDone = true;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo, markAsDone } = todoSlice.actions;

export default todoSlice.reducer;
