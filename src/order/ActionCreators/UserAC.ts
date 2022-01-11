import { Dispatch } from "redux";
import { userAPI } from "../../API/REST-API";
import { UserActionType, UserState } from "../../types/UserType";

export const getUsers = () => {
    return async (dispatch: Dispatch<UserState>) => {
        let response = await userAPI.requestUsers();
        if (response.error === null) {
            dispatch({ type: UserActionType.SETUSERS, users: response.items })
        }
    }
}

export const postFollowing = (id: number) => {
    return async (dispatch: Dispatch<UserState>) => {
        let response = await userAPI.postUsersFollowing(id);
        if (response.data.resultCode === 0) {
            dispatch({ type: UserActionType.FOLLOW, userId: response.data, following: true })
        }
    }
}

export const deleteFollowing = (id: number) => {
    return async (dispatch: Dispatch<UserState>) => {
        let response = await userAPI.deleteUsersFollowing(id)
        if (response.data.resultCode === 0) {
            dispatch({ type: UserActionType.UNFOLLOW, userId: response.data, following: false })
        }
    }
}
