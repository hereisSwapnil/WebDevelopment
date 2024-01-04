import { configureStore } from "@reduxjs/toolkit";
import todoReducers from "../reducers/todoSlice";

export const store = configureStore({
  reducer: { todo: todoReducers },
});
