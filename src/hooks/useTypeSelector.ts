import { RootState } from './../order/redux/combineReducer';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

export const useTypeSelector:TypedUseSelectorHook<RootState> = useSelector