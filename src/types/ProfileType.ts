
export interface ProfileAction {
    profile: ProfileType,
    status: string,
    authMeId?: boolean
}

export enum ProfileActionType {
    SETPROFILE = 'SETPROFILE',
    SETSTATUS = 'SETSTATUS',
    SETPHOTOS = 'SETPHOTOS'
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
export type ProfileState = SetProfileType | SetStatusType | SetPhotoType;

export interface ProfileType {
    aboutMe: string,
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
    photos: {
        small?: Blob
        large?: Blob
    }
}

export interface ProfileWrapper {
    aboutMe: string,
    fullName: string,
    lookingForAJob: boolean
    lookingForAJobDescription: string

}