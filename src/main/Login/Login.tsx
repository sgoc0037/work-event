import { Button, Checkbox, Input } from 'antd';
import React, { FC, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useActionsCreators } from '../../hooks/useActionCreator';
import { FormDataType } from '../../types/types';
import style from './Login.module.css';

export const Login: FC = ({ children }) => {

    const { control, handleSubmit } = useForm<FormDataType>();
    const [check, setCheck] = useState<boolean>(false)
    const { sendAuth } = useActionsCreators()


    const onClick = () => setCheck(!check);

    const onSubmit: SubmitHandler<FormDataType> = (data) => {
        const { login, password, rememberMe } = data;
        sendAuth({login,password,rememberMe})
    }



    return <form className={style.login} >
        <Controller
            name="login"
            control={control}
            defaultValue=''
            render={({ field }) => <Input {...field}
                placeholder='login'
            />} />
        <Controller
            name="password"
            control={control}
            defaultValue=''
            render={({ field }) => <Input {...field}
                placeholder='password'
                type='password'
            />}
        />
        <Controller
            name="rememberMe"
            control={control}
            defaultValue={check}
            render={({ field }) => <Checkbox {...field}
                checked={check}
                onClick={onClick} />}
        />
        <Button onClick={handleSubmit(onSubmit)} type='primary'>Log in</Button>
    </form >
}