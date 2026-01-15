import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../store/redux/store';

export const useFavoritesDispatch = useDispatch.withTypes<AppDispatch>();
export const useFavoritesSelector = useSelector.withTypes<RootState>();