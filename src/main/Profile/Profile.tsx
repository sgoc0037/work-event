import { Badge, Descriptions } from 'antd';

import React, { FC, useEffect } from 'react';
import { useActionsCreators } from '../../hooks/useActionCreator';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import style from './Profile.module.css';

export const Profile: FC = () => {

    const { aboutMe, fullName, lookingForAJob, lookingForAJobDescription }
        = useTypeSelector(state => state.profile.profile)
    const { currentId } = useTypeSelector(state => state.login)
    const { fieldProfile } = useActionsCreators()

    useEffect(() => {
        fieldProfile(currentId)
    }, [])

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