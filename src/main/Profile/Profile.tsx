import { FC } from 'react';
import { ProfileType } from '../../types/ProfileType';
import { responseImage } from '../Users/User';
import ProfileStatus from './Profile-status';

interface ProfileWrapperType extends ProfileType {
    authMe: boolean,
    status: string
}

export const Profile: FC<ProfileWrapperType> = (
    { aboutMe, photos, authMe, contacts, fullName, lookingForAJob, lookingForAJobDescription, status }
) => {

    return <div>
        <img src={responseImage(photos)} alt='' />
        <span>Name: {fullName}</span>
        <ProfileStatus
        status={status}
        autMe={authMe}
        />
        <span>About Me: {aboutMe}</span>
        <span>{lookingForAJob ? 'Yes' : 'No'}</span>
        {
            lookingForAJobDescription &&
            <p>Desctiption for a job:{lookingForAJobDescription}</p>
        }
        <div>
            {
                Object.keys(contacts).map((item) => {

                    return <a
                        key={item}
                        href={(contacts as any)[item]}>{item}</a>
                })
            }
        </div>
    </div>
}