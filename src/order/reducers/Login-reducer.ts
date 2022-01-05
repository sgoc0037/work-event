import { LoginAction, LoginActionType, LoginState } from "../../types/LoginType";

export const initialState:LoginAction = {
	email: '',
	login: '',
	isFetching: false,
	isAuth: false
}

export let loginReducer = (state = initialState,action:LoginState):LoginAction=> {
	switch(action.type) {
		case LoginActionType.SETLOGIN:
			return {...state,...action.data}
		default: return state;			
	}
}