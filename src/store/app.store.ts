import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './counter.slice';
import { User, userSlice } from './user.slice';
import reduxLogger from 'redux-logger';
import { appLogger } from './custom.middleware';

export interface AppState {
  counter: number;
  user: User;
}

export const appStore = configureStore<AppState>({
  reducer: {
    counter: counterSlice.reducer,
    user: userSlice.reducer,
  },
  middleware: (d) => d().concat(reduxLogger) as any,
});

export type AppDispatch = typeof appStore.dispatch;
