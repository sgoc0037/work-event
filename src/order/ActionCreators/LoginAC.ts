import { Dispatch } from "redux"
import { profileAPI } from "../../API/REST-API"
import { LoginActionType, LoginState } from "../../types/LoginType"
import { FormDataType } from "../../types/types"
import { initialState } from "../reducers/Login-reducer"

export const fetchLogin = () => {
    return async (dispatch: Dispatch<LoginState>) => {
        let response = await profileAPI.getLogin()
        if (response.data) {
            dispatch({ type: LoginActionType.SETLOGIN, data: response.data, isAuth: true })
        }
    }
}

export const logoutLogin = () => {
    return async (dispatch: Dispatch<LoginState>) => {
        let response = await profileAPI.logout()
        if (response.data.resultCode === '0') {
            dispatch({ type: LoginActionType.SETLOGIN, data: initialState })
        }
    }
}

export const sendAuth = ({ login, password, rememberMe }: FormDataType) => {
    return async (dispatch: Dispatch<LoginState>) => {
        let response = await profileAPI.authLogin(login, password, rememberMe);
        if (response.data.resultCode === 0) {
            dispatch({
                type: LoginActionType.SETLOGIN, data: {
                    currentId: response.data.data.userId,
                    isAuth: true
                }
            })
        }
    }
}