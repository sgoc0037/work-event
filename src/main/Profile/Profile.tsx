import { FC } from 'react';
import { ProfileType } from '../../types/ProfileType';
import { responseImage } from '../Users/User';

export const Profile: FC<ProfileType> = (props) => {

    return <div>
        <img src={responseImage(props.photos)} alt='' />
        <span>Name: {props.fullName}</span>
        <span>About Me: {props.aboutMe}</span>
        <span>{props.lookingForAJob ? 'Yes' : 'No'}</span>
        {
            props.lookingForAJobDescription &&
            <p>Desctiption for a job:{props.lookingForAJobDescription}</p>
        }
    </div>
}