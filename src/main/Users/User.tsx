import React, { FC } from 'react'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
import { UserTypes } from '../../types/types'

interface UserProps {
    props: UserTypes,
    follow: (id:number) => void,
    unfollow: (id:number) => void
}

const User: FC<UserProps> = (
    { props, follow, unfollow }
) => {

    return <div key={props.id}>
        <div>
            <Link to={'Profile/' + props.id}>
                {/* <img src={propszimage} alt='default user' /> */}
            </Link>
        </div>
        <div>
            <span>{props.name}</span>
            <span>{props.status}</span>
        </div>
        {/* <div>props.
            {
                props.followed
                    ? <Button type="primary"
                        disabled={props.followingProgress.some((item: number) => item === props.id)}
                        onClick={() => {
                            unfollow(props.id)
                        }}>unfollow</Button>
                    : <Button type="primary"
                        disabled={props.followingProgress.some((item: number) => item === props.id)}
                        onClick={() => {
                            follow(props.id)
                        }}>follow</Button>
            }
        </div> */}
    </div>
}

export default User
