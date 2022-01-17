import { FC } from 'react';
import { ProfileType } from '../../types/ProfileType';
import { responseImage } from '../Users/User';

interface ProfileWrapperType extends ProfileType {
    authMe: boolean,
    status: string
}

export const Profile: FC<ProfileWrapperType> = (
    { aboutMe, photos, authMe, contacts, fullName, lookingForAJob, lookingForAJobDescription,status }
) => {

    return <div>
        <img src={responseImage(photos)} alt='' />
        <span>Name: {fullName}</span>
        <span>Status: {status}</span>
        <span>About Me: {aboutMe}</span>
        <span>{lookingForAJob ? 'Yes' : 'No'}</span>
        {
            lookingForAJobDescription &&
            <p>Desctiption for a job:{lookingForAJobDescription}</p>
        }
    </div>
}