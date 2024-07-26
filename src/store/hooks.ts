import { useSelector, useDispatch } from 'react-redux';
import { AppState, AppDispatch } from './app.store';

export const useAppSelector = useSelector.withTypes<AppState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
