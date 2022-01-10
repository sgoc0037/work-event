
export interface LoginAction {
    currentId: number
    isAuth: boolean
}

export enum LoginActionType {
    SETLOGIN = 'SETLOGIN'
}

interface SetLogin extends LoginAction {
    type: LoginActionType.SETLOGIN   
}

export type LoginState = SetLogin

export interface LoginType {
    authMe: boolean,
    acceptLogin: ()=> void,
    acceptLoggout: ()=> void
}