import React, { FC, useState } from 'react'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
import { UserTypes } from '../../types/UserType'
import image from '../../img/user.jpg'
import style from './User.module.css'

interface UserProps {
    props: UserTypes,
    follow: (id: number) => void,
    unfollow: (id: number) => void
}

const User: FC<UserProps> = ({ props, follow, unfollow }) => {

    const [disabledBtn,setDisabledBtn] = useState<boolean>(false)
    const Guardian = ()=> {
        setDisabledBtn(true)
        setTimeout(()=> setDisabledBtn(false),1000)
    }

    const img: string = props.photos.large
        ? props.photos.large
        : props.photos.small
            ? props.photos.small
            : image;

    return <div className={style.card} key={props.id}>
        <div>
            <Link to={'Profile/' + props.id} className={style.card__imgContainer}>
                <img src={img} alt='default user' />
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
