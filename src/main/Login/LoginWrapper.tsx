import React, { FC } from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { useActionsCreators } from '../../hooks/useActionCreator';

let LoginWrapper: FC = () => {

    const {isAuth} = useTypeSelector(state=> state.login);
    const {fetchLogin,logoutLogin} = useActionsCreators();

    fetchLogin()

    return (
        !isAuth
            ? <Button type='primary'>
                <Link to="/Login">Log in</Link>
            </Button >
            : <Button type='primary'
                onClick={() => logoutLogin()}>
                Logout</Button>
    )
}