import { rootStore } from './combineReducer';
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

export const store = createStore(rootStore,applyMiddleware(thunk));