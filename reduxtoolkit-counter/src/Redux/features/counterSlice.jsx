import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 0
  },
  reducers: {
    increment: (state, action) => {
      state.counter = state.counter + 1;
    },
    decrement: (state, action) => {
      state.counter = state.counter - 1;
    },
    reset: (state, action) => {
      state.counter = 0;
    },
    addby5: (state, action) => {
      state.counter = state.counter + action.payload;
    }
  }
});

export const { increment, decrement, reset, addby5 } = counterSlice.actions;
export default counterSlice.reducer;
