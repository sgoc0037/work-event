import { LoginAction, LoginActionType, LoginState } from "../../types/LoginType";

export const initialState:LoginAction = {
	currentId: NaN,
	isAuth: false
}

export let loginReducer = (state = initialState,action:LoginState):LoginAction=> {
	debugger
	switch(action.type) {
		case LoginActionType.SETLOGIN:
			console.log(state)
			return {...state,...action.data}
		default: return state;			
	}
}