import React, { FC, useState } from 'react'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
import { UserTypes } from '../../types/UserType'
import image from '../../img/user.jpg'
import style from './User.module.css'

interface UserProps {
    props: UserTypes,
    follow: (id: number) => void,
    unfollow: (id: number) => void,
    sendId: (id: number) => void
}

export const responseImage = (photos: {large: string,small: string}) => {
    
    return photos.large
        ? photos.large
        : photos.small
            ? photos.small
            : image;
}

const User: FC<UserProps> = ({ props, follow, unfollow, sendId }) => {

    const [disabledBtn, setDisabledBtn] = useState<boolean>(false)
    const Guardian = () => {
        setDisabledBtn(true)
        setTimeout(() => setDisabledBtn(false), 1000)
    }

    return <div className={style.card} key={props.id}>
        <div>
            <Link
                to={`/Profile/${props.id}`}
                className={style.card__imgContainer}
                onClick={() => sendId(props.id)}
            >
                <img src={responseImage(props.photos)} alt='default user' />
            </Link>
        </div>
        <div className={style.card__mainInfo}>
            <span className={style.card__name}>{props.name}</span>
            <span className={style.card__status}>{props.status}</span>
        </div>
        <div>
            {
                props.followed
                    ? <Button type="primary"
                        disabled={disabledBtn}
                        onClick={() => {
                            unfollow(props.id)
                            Guardian()
                        }}>unfollow</Button>
                    : <Button type="primary"
                        disabled={disabledBtn}
                        onClick={() => {
                            follow(props.id)
                            Guardian()
                        }}>follow</Button>
            }
        </div>
    </div>
}

export default User
