import { ProfileActionType } from './../../types/ProfileType';
import { Dispatch } from 'redux';
import { profileAPI } from '../../API/REST-API';
import { ProfileState } from '../../types/ProfileType';

export const fieldProfile = (id: number) => {
    return async (dispatch: Dispatch<ProfileState>) => {
        const response = await profileAPI.getProfile(id)
        dispatch({ type: ProfileActionType.SETPROFILE, profile: response })
    }
}

export const saveCurrentId = (id: number) => {
    return (dispatch: Dispatch<ProfileState>) => {
        dispatch({ type: ProfileActionType.SETCURRENTID, currentId: id })
    }
}