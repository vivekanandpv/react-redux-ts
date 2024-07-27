import { Action, ThunkMiddleware, UnknownAction } from '@reduxjs/toolkit';
import { AppState } from './app.store';

export const appLogger = (store: any) => (next: any) => (action: any) => {
  console.log('app Logger: before: state', store.getState());
  console.log('app Logger: before: action', action);
  next(action);
  console.log('app Logger: after: state', store.getState());
};
