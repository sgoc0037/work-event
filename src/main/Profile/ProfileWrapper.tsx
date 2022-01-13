import React, { useEffect } from 'react'
import { useActionsCreators } from '../../hooks/useActionCreator'
import { useTypeSelector } from '../../hooks/useTypeSelector'
import { Profile } from './Profile'

export const ProfileWrapper = () => {

    const { aboutMe, fullName, lookingForAJob, lookingForAJobDescription, }
        = useTypeSelector(state => state.profile.profile)
    const { currentId } = useTypeSelector(state => state.profile)
    const { authId } = useTypeSelector(state => state.login)
    const { fieldProfile } = useActionsCreators()

    const fetchId = (): number => {
        
        if (!isNaN(currentId)) {
            return currentId
        }
        return authId
    }

    useEffect(() => {
        fieldProfile(fetchId())
    }, [])

    return <Profile
        aboutMe={aboutMe}
        fullName={fullName}
        lookingForAJob={lookingForAJob}
        lookingForAJobDescription={lookingForAJobDescription}
    />
}