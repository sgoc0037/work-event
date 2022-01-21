import { Pagination } from 'antd'
import React, { useEffect } from 'react'
import { useActionsCreators } from '../../hooks/useActionCreator'
import { useTypeSelector } from '../../hooks/useTypeSelector'
import { UserTypes } from '../../types/UserType'
import User from './User'
import Users from './Users'

export const UsersWrapper = () => {

    const { users,totalCount } = useTypeSelector(state => state.users)
    const { postFollowing, deleteFollowing, getUsers, saveCurrentId } = useActionsCreators()
    
    const onChange=(page:number)=> {
        getUsers(page,10)
    }

    useEffect(() => {
        getUsers(1,10)
    }, [])

    return <div>
        <Pagination 
        defaultCurrent={1} 
        total={totalCount}
        onChange={onChange}
        />
        <Users
            items={users}
            renderItem={(item: UserTypes) =>
                <User
                    key={item.id}
                    props={item}
                    follow={postFollowing}
                    unfollow={deleteFollowing}
                    sendId={saveCurrentId}
                />}

        />
    </div>

}