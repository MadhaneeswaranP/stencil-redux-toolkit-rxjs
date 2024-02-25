import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
  },
  reducers: {
    incrementCounter: (state?): void => {
      state.count++
    },
    decrementCounter: (state?): void => {
      state.count--
    },
  },
});

export const { incrementCounter, decrementCounter } = counterSlice.actions;
export default counterSlice.reducer;
