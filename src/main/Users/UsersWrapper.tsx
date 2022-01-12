import React from 'react'
import { useActionsCreators } from '../../hooks/useActionCreator'
import { useTypeSelector } from '../../hooks/useTypeSelector'
import { UserTypes } from '../../types/UserType'
import User from './User'
import Users from './Users'

export const UsersWrapper = () => {
    

    const { users } = useTypeSelector(state => state.users)
    const { postFollowing, deleteFollowing } = useActionsCreators()

    return <Users
        items={users}
        renderItem={(item: UserTypes) =>
            <User
                key={item.id}
                props={item}
                follow={postFollowing}
                unfollow={deleteFollowing}
            />}

    />
}