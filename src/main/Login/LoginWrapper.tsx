import React, { FC, useEffect } from 'react';
import { Button } from 'antd';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { useActionsCreators } from '../../hooks/useActionCreator';
import { Login } from './Login';

export const LoginWrapper: FC = () => {

    const {isAuth} = useTypeSelector(state=> state.login);
    const {logoutLogin} = useActionsCreators();

    return (
        !isAuth
            ? <Login/>
            : <Button type='primary'
                onClick={() => logoutLogin()}>
                Logout</Button>
    )
}