import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useActionsCreators } from '../../hooks/useActionCreator'
import { useTypeSelector } from '../../hooks/useTypeSelector'
import { Profile } from './Profile'

export const ProfileWrapper = () => {

    const { id } = useParams()
    const { aboutMe, fullName, lookingForAJob, lookingForAJobDescription, contacts,photos}
        = useTypeSelector(state => state.profile.profile)
    const { fieldProfile } = useActionsCreators()

    useEffect(() => {
        fieldProfile(Number(id))
    }, [id])

    return <Profile
        aboutMe={aboutMe}
        fullName={fullName}
        lookingForAJob={lookingForAJob}
        lookingForAJobDescription={lookingForAJobDescription}
        contacts={contacts}
        photos={photos}
    />
}