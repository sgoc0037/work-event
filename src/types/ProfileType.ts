
export interface ProfileAction {
    profile: ProfileType,
    status: string,
    authMeId?: boolean,
    currentId: number
}

export enum ProfileActionType {
    SETPROFILE = 'SETPROFILE',
    SETSTATUS = 'SETSTATUS',
    SETPHOTOS = 'SETPHOTOS',
    SETCURRENTID = 'SETCURRENTID'
}
interface SetProfileType {
    type: ProfileActionType.SETPROFILE,
    profile: ProfileType
}
interface SetStatusType {
    type: ProfileActionType.SETSTATUS,
    status: string
}
interface SetPhotoType {
    type: ProfileActionType.SETPHOTOS,
    photos: {}
}
interface SetCurrentIdType {
    type: ProfileActionType.SETCURRENTID,
    currentId: number
}
export type ProfileState = SetProfileType | SetStatusType | SetPhotoType | SetCurrentIdType;

export interface commonProfileType {
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    contacts: {
        github: string,
        vk: string,
        facebook: string,
        instagram: string,
        twitter: string,
        website: string,
        youtube: string,
        mainLink: string,
    }
}

export interface ProfileType extends commonProfileType {
    aboutMe: string,
    photos: {
        small?: Blob
        large?: Blob
    }
}

export interface SaveProfiletype extends commonProfileType {
    userId: number
}

export interface ProfileWrapper {
    aboutMe: string,
    fullName: string,
    lookingForAJob: boolean
    lookingForAJobDescription: string
}