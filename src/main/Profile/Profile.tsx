import { Descriptions } from 'antd';
import { FC } from 'react';
import { ProfileWrapper } from '../../types/ProfileType';
import style from './Profile.module.css';

export const Profile: FC<ProfileWrapper> = (
    { aboutMe, fullName, lookingForAJob, lookingForAJobDescription }
) => {

    return (
        <Descriptions title="User Info" layout="vertical" bordered>
            <Descriptions.Item label="About Me">{aboutMe}</Descriptions.Item>
            <Descriptions.Item label="Full Name">{fullName}</Descriptions.Item>
            <Descriptions.Item
                label="Looking for a job">
                {
                    lookingForAJob ? 'Yes' : 'No'
                }
            </Descriptions.Item>
            {
                lookingForAJobDescription &&
                <Descriptions.Item label='A job description'>
                    {lookingForAJobDescription}</Descriptions.Item>
            }
        </Descriptions>)
}