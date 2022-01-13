import { ProfileActionType, SaveProfiletype } from './../../types/ProfileType';
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

export const saveProfile = (obj: SaveProfiletype) => {
    return async (dispatch: Dispatch<ProfileState>) => {
        const response = await profileAPI.saveProfile(obj)
        if (response.data.resultCode === 0) {
            fieldProfile(obj.userId)
        }
    }
}

export const saveStatus = (status: string) => {
    return async (dispatch:Dispatch<ProfileState>) => {
        const response = await profileAPI.uppdateStatus(status)
        if(response.data.resultCode=== 0) {
            dispatch({type: ProfileActionType.SETSTATUS,status})
        }
    }
}

export const savePhoto = (file:Blob)=> {
    return async (dispatch:Dispatch<ProfileState>)=> {
        const response = await profileAPI.savePhotos(file)
        if(response.data.resultCode === 0) {
            dispatch({type: ProfileActionType.SETPHOTOS,photos:response.data.data.photos})
        }
    }
}