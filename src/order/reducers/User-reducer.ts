import { UserAction, UserActionType, UserState } from '../../types/UserType';

const initialState: UserAction = {
    users: [],
    userPage: 10,
    totalCount: 10,
    currentPage: 1,
    isFetching: true,
    followingProgress: []
}

export const userReducer = (state = initialState, action: UserState): UserAction => {
    debugger
    switch (action.type) {
        // case UserActionType.FOLLOW:
        //     return {
        //         ...state,
        //         users: state.users.map((item: any) => {
        //             if (item.id === action.userId) {
        //                 return { ...item, followed: true }
        //             }
        //             return item
        //         })
        //     }
        // case UserActionType.UNFOLLOW:
        //     return {
        //         ...state,
        //         users: state.users.map((item: any) => {
        //             if (item.id === action.userId) {
        //                 return { ...item, followed: false }
        //             }
        //             return item
        //         })
        //     }
        case UserActionType.SETUSERS:
            return { ...state, users: action.users }
        case UserActionType.SETCURRENT:
            return { ...state, currentPage: action.currentPage }
        case UserActionType.SETTOTALCOUNT:
            return { ...state, totalCount: action.totalCount }
        case UserActionType.TOGGLEISFETCHING:
            return { ...state, isFetching: action.userId }
        case UserActionType.TOGGLEISFOLLOWING:
            return {
                ...state,
                followingProgress: action.following
                    ? [...state.followingProgress, action.userId]
                    : state.followingProgress.filter(id => id !== action.userId)
            }
        default: return state;
    }
}