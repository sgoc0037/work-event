import { Dispatch } from "redux"
import { profileAPI } from "../../API/REST-API"
import { LoginActionType, LoginState } from "../../types/LoginType"
import { FormDataType } from "../../types/types"
import { fieldProfile } from "./ProfileAC"

const LoginActionDispatch = (id:number,auth:boolean) => {
    return {
        type: LoginActionType.SETLOGIN,
        authId:id,
        isAuth:auth
    }
}

export const fetchLogin = () => {
    return async (dispatch: Dispatch<LoginState>) => {
        let response = await profileAPI.getLogin()
        if (response.data.resultCode === 0) {
            dispatch(LoginActionDispatch(response.data.data.id, true))
        }
    }
}

export const logoutLogin = () => {
    return async (dispatch: Dispatch<LoginState>) => {
        let response = await profileAPI.logout()
        if (response.data.resultCode === 0) {
            dispatch(LoginActionDispatch(NaN,false))
        }
    }
}

export const sendAuth = ({ login, password, rememberMe }: FormDataType) => {
    return async (dispatch: Dispatch<LoginState>) => {
        let response = await profileAPI.authLogin(login, password, rememberMe);
        if (response.data.resultCode === 0) {
            dispatch(LoginActionDispatch(response.data.data.userId,true))
        }
    }
}