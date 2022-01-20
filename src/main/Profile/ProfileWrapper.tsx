import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useActionsCreators } from '../../hooks/useActionCreator'
import { useTypeSelector } from '../../hooks/useTypeSelector'
import { Profile } from './Profile'

export const ProfileWrapper = () => {

    const { id } = useParams()
    const { aboutMe, fullName, lookingForAJob, lookingForAJobDescription, contacts,photos }
        = useTypeSelector(state => state.profile.profile)
    const { status } = useTypeSelector(state => state.profile)
    const { authId } = useTypeSelector(state => state.login)
    const { fieldProfile,fetchStatus,savePhoto } = useActionsCreators()

    useEffect(() => {
        fieldProfile(Number(id))
        fetchStatus(Number(id))
    }, [id])

    const authMe: boolean = authId === Number(id) ? true : false;

    return <Profile
        aboutMe={aboutMe}
        fullName={fullName}
        lookingForAJob={lookingForAJob}
        lookingForAJobDescription={lookingForAJobDescription}
        contacts={contacts}
        photos={photos}
        authMe={authMe}
        status={status}
        savePhoto={savePhoto}
    />
}