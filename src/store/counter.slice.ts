import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (c) => c + 1,
    decrement: (c) => c - 1,
  },
});
