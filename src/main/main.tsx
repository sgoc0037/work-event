import React, { useEffect, FC } from 'react';
import style from './main.module.css';
import Colors from './Colors/colors';
import { Route, Routes } from 'react-router-dom';
import { RequiredAuth } from '../HOC/RequiredAuth';
import { UsersWrapper } from './Users/UsersWrapper';
import { ProfileWrapper } from './Profile/ProfileWrapper';
import { LoginWrapper } from './Login/LoginWrapper';
import { useActionsCreators } from '../hooks/useActionCreator';
import { useTypeSelector } from '../hooks/useTypeSelector';
import { Settings } from './Settings/Settings';
import Sidebar from '../sidebar/sidebar';
import { Layout, Row } from 'antd';
import { Content } from 'antd/lib/layout/layout';

const Main: FC = (props: any) => {

    const { fetchLogin, fieldProfile } = useActionsCreators()
    const { authId } = useTypeSelector(state => state.login)

    useEffect(() => {
        fetchLogin()
    }, [])

    useEffect(() => {
        if (!isNaN(authId)) {
            fieldProfile(authId)
        }
    }, [authId])

    return <Layout style={{
        flexDirection: 'row'
    }}>
        <Sidebar />
        <Layout className="site-layout-background">
            <Content>
                <Routes>
                    <Route path={'/Color'} element={<Colors />} />
                    <Route path={'/Login'} element={<LoginWrapper />} />
                    <Route path={'/Profile/:id'} element={
                        <RequiredAuth>
                            <ProfileWrapper />
                        </RequiredAuth>
                    } />
                    <Route path={'/Users'} element={
                        <RequiredAuth>
                            <UsersWrapper />
                        </RequiredAuth>
                    } />
                    <Route path={'/Settings'} element={
                        <RequiredAuth>
                            <Settings />
                        </RequiredAuth>
                    } />
                </Routes>
            </Content>
        </Layout>
    </Layout>
}

export default Main;