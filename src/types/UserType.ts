
export enum UserActionType {
    UNFOLLOW = 'UNFOLLOW',
    FOLLOW = 'FOLLOW',
    SETUSERS = 'SETUSERS',
    SETCURRENT = 'SETCURRENT',
    SETTOTALCOUNT = 'SETTOTALCOUNT',
    TOGGLEISFETCHING = 'TOGGLEISFETCHING',
    TOGGLEISFOLLOWING = 'TOGGLEISFOLLOWING'
}

interface Unfollow {
    type: UserActionType.UNFOLLOW,
    userId: number,
    following: boolean
}
interface Follow {
    type: UserActionType.FOLLOW,
    userId: number,
    following: boolean
}
interface SetUsers {
    type: UserActionType.SETUSERS,
    users: []
}
interface SetCurrent {
    type: UserActionType.SETCURRENT,
    currentPage: number
}
interface SetTotalCount {
    type: UserActionType.SETTOTALCOUNT,
    totalCount: number
}
interface ToggleIsFetching {
    type: UserActionType.TOGGLEISFETCHING,
    userId: boolean
}

export type UserState = Unfollow | Follow | SetCurrent
    | SetTotalCount | SetUsers | ToggleIsFetching


export interface UserTypes {
    followed: boolean,
    id: number,
    name: string,
    photos: {
        large: string
        small: string
    },
    status: string
}
export interface UserAction {
    users: UserTypes[],
    userPage: number,
    totalCount: number,
    currentPage: number,
    isFetching: boolean,
    followingProgress: number[]
}
