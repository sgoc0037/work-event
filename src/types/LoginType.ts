
export interface LoginAction {
    currentId: number
    isAuth: boolean
}

export enum LoginActionType {
    SETLOGIN = 'SETLOGIN'
}

interface SetLogin {
    type: LoginActionType.SETLOGIN,
    data: LoginAction
}

export type LoginState = SetLogin

export interface LoginType {
    authMe: boolean,
    acceptLogin: ()=> void,
    acceptLoggout: ()=> void
}