import { createSlice } from '@reduxjs/toolkit';
import { getUserByUsername } from './thunk';

export interface User {
  username: string;
  country: string;
}

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: 'default',
    country: 'india',
  } as User,
  reducers: {
    changeCountry: (state, action) => {
      state.country = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getUserByUsername.fulfilled, (state, action) => {
      state.username = action.payload.username;
      state.country = action.payload.country;
    });
  },
});
