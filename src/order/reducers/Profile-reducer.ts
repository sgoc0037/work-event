import { ProfileAction, ProfileActionType, ProfileState } from "../../types/ProfileType"

const initialState: ProfileAction = {
    profile: {
        aboutMe: '',
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        contacts: {
            github: '',
            vk: '',
            facebook: '',
            instagram: '',
            twitter: '',
            website: '',
            youtube: '',
            mainLink: '',
        },
        photos: {
            small: undefined,
            large: undefined
        }
    },
    status: '',
    authMeId: false
}

export const profileReducer = (state = initialState, action: ProfileState): ProfileAction => {
    switch (action.type) {
        case ProfileActionType.SETPROFILE:
            return { ...state, profile: action.profile }
        case ProfileActionType.SETSTATUS:
            return { ...state, status: action.status }
        case ProfileActionType.SETPHOTOS:
            return { ...state, profile: { ...state.profile, photos: action.photos } }
        default:
            return state
    }
}