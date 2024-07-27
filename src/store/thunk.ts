import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from './user.slice';

const dummyApiProvider = (username: string) => {
  return new Promise<User>((resolve, reject) => {
    setTimeout(() => {
      resolve({
        username,
        country: 'germany',
      });
    }, 5000);
  });
};

export const getUserByUsername = createAsyncThunk(
  'users/getUserByUsername',
  async (username: string, thunkApi) => {
    //    make the axios call here
    return await dummyApiProvider(username);
  }
);
