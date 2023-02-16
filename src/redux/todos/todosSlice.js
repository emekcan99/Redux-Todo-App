import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [
      {
        title: "todo-1",
        description:"lorem ispum",
        color: "red",
        id: "1",
      },
      {
        title: "todo-2",
        description:"lorem ispum2",
        color: "green",
        id: "2",
      },
    ],
  },
  reducers:{
    addNewTodo: (state, action) =>{
      state.items.push(action.payload)
    },
    deleteTodo: (state,action) => {
      const id = action.payload;
      const filtered = state.items.filter((item) => item.id !== id)
      state.items = filtered;
    }
  }
});

export const {addNewTodo,deleteTodo} = todosSlice.actions;

export default todosSlice.reducer;
