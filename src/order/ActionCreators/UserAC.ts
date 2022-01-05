import { Dispatch } from "redux";
import { userAPI } from "../../API/REST-API";
import { UserActionType, UserState } from "../../types/UserType";

export const getUsers = () => {
    return async (dispatch: Dispatch<UserState>) => {
        let response = await userAPI.requestUsers();
        if (response.data) {
            dispatch({ type: UserActionType.SETUSERS, users: response.data })
        }
    }
}