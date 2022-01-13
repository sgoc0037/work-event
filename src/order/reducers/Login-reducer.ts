import { LoginAction, LoginActionType, LoginState } from "../../types/LoginType";

export const initialState:LoginAction = {
	authId: NaN,
	isAuth: false
}

export let loginReducer = (state = initialState,action:LoginState):LoginAction=> {
	
	switch(action.type) {
		case LoginActionType.SETLOGIN:
			console.log(state)
			return {...state,...action}
		default: return state;			
	}
}