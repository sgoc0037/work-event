
import { Button } from 'antd';
import { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Popup from '../../reComponent/PopUp';
import { ProfileType } from '../../types/ProfileType';
import { responseImage } from '../Users/User';
import ProfileStatus from './Profile-status';

interface ProfileWrapperType extends ProfileType {
    authMe: boolean;
    status: string;
    savePhoto:(file:Blob)=>void;
}

interface FormPhotoType {
    changePhoto: any;
}

export const Profile: FC<ProfileWrapperType> = (
    { aboutMe, photos, authMe, contacts, fullName, lookingForAJob, lookingForAJobDescription, status,savePhoto }
) => {

    const { register, handleSubmit } = useForm<FormPhotoType>()
    const [toggle, setToggle] = useState(false);

    const sendPhoto:SubmitHandler<FormPhotoType>=(data)=> {
        savePhoto(data.changePhoto[0])
    }

    return <div>
        <div onClick={() => setToggle(true)}>
            <img src={responseImage(photos)} alt='' />
            <Popup
                changePopup={toggle}
                setChangePopup={setToggle}
            >

                {
                    authMe &&
                    <form>
                        <img src={responseImage(photos)} alt='' />
                        <b>Dowload new avatar:<input {...register('changePhoto')} type='file' /></b>
                        <Button onClick={handleSubmit(sendPhoto)}>Send</Button>
                    </form>
                }
            </Popup>
        </div>
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