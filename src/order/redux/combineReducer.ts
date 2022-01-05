import { combineReducers } from "redux";
import { loginReducer } from "../reducers/Login-reducer";
import { profileReducer } from "../reducers/Profile-reducer";
import { userReducer } from '../reducers/User-reducer';

export const rootStore = combineReducers({
    profile: profileReducer,
    login: loginReducer,
    users: userReducer
});

export type RootState = ReturnType<typeof rootStore>