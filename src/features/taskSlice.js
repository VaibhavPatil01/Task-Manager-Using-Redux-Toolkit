import { createSlice, nanoid } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
    filters: "all",
  },
  reducers: {
    addTask: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
      prepare: (text) => {
        return {
          payload: {
            id: nanoid(),
            text,
            isCompleted: false,
          },
        };
      },
    },

    deleteTask:(state, action) => {
        state.items = state.items.filter((task) => task.id !== action.payload);
    },

    toggleTask:(state, action) => {
        const task = state.items.find(task => task.id === action.payload);
        if(task) task.isCompleted = !task.isCompleted
    },

    setFilters:(state, action) => {
        state.filters = action.payload;
    }
  },
});

export const {addTask, deleteTask, toggleTask, setFilters} = taskSlice.actions;
export default taskSlice.reducer;
