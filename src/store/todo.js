import { createSlice } from "@reduxjs/toolkit";

const initTodoState = { todo: [], showTodo: false };
export const todoSlice = createSlice({
  name: "todo",
  initialState: initTodoState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        name: action.payload.task,
        id: action.payload.id,
        todo: [],
      };
      state.todo.push(newTodo);
    },
    addCard: (state, action) => {
      console.log(action);
      const { task, id } = action.payload;
      state.todo.map((el) => {
        if (el.id === id) {
          el.todo.push({ task, id: Math.random().toString() });
        }
      });
    },

    deleteTodo: (state) => {
      state.showTodo = false;
    },
    togleTodo(state) {
      state.showTodo = true;
    },
  },
});

export const todoActions = todoSlice.actions;
export default todoSlice;
