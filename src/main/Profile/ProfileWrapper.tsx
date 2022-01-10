import React, { useEffect } from 'react'
import { useActionsCreators } from '../../hooks/useActionCreator'
import { useTypeSelector } from '../../hooks/useTypeSelector'
import { Profile } from './Profile'

export const ProfileWrapper = () => {

    const { aboutMe, fullName, lookingForAJob, lookingForAJobDescription }
        = useTypeSelector(state => state.profile.profile)
    const { currentId } = useTypeSelector(state => state.login)
    const { fieldProfile } = useActionsCreators()

    useEffect(() => {
        fieldProfile(currentId)
    }, [])

    return <Profile
        aboutMe={aboutMe}
        fullName={fullName}
        lookingForAJob={lookingForAJob}
        lookingForAJobDescription={lookingForAJobDescription}
    />
}