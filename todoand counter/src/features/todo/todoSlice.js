import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addData: (state, action) => {
      state.todo.push(action.payload);
    },
    deleteData: (state, action) => {
      state.todo = state.todo.filter((i) => i.id !== action.payload);
    },
    editData: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.todo.find((i) => i.id !== id);
      if (todo) {
        todo.text = text;
      }
    },
  },
});

export const { addData, deleteData, editData } = todoSlice.actions;
export default todoSlice.reducer;
