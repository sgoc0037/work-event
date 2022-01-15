import moment from 'moment';
import React, { useState, useEffect, FC } from 'react';
import style from './main.module.css';
import Colors from './Colors/colors';
import { Route, Routes } from 'react-router-dom';
import { Login } from './Login/Login';
import { RequiredAuth } from '../HOC/RequiredAuth';
import { UsersWrapper } from './Users/UsersWrapper';
import { ProfileWrapper } from './Profile/ProfileWrapper';
import { LoginWrapper } from './Login/LoginWrapper';
import { useActionsCreators } from '../hooks/useActionCreator';
import { useTypeSelector } from '../hooks/useTypeSelector';
import { Settings } from './Settings/Settings';
import axios from 'axios';


const Main: FC = (props: any) => {

    const { fetchLogin, fieldProfile } = useActionsCreators()
    const { isAuth, authId } = useTypeSelector(state => state.login)

    useEffect(() => {
        fetchLogin()
    }, [])

    useEffect(() => {
        if (!isNaN(authId)) {
            fieldProfile(authId)
        }
    }, [authId])

    // const [daysInMonth, setDaysInMonth] = useState<object[]>([]);
    // const [currentMonth, setCurrentMonth] = useState<object>({});
    // const [currentDay, setCurrentDay] = useState<number>(0);

    // useEffect(() => {
    //     moment.updateLocale('ru', { week: { dow: 1 } })

    //     setCurrentMonth(moment())
    // }, [])

    // useEffect(() => {

    //     const startDay: any = moment(currentMonth).startOf('month').startOf('week')

    //     let additionArray: object[] = []
    //     let day = startDay.clone();

    //     while (additionArray.length < 42) {
    //         additionArray.push(moment(day.clone()).toObject())
    //         day.add(1, 'day')
    //     }

    //     setDaysInMonth(additionArray)

    // }, [currentMonth])

    return <div className={style.main}>
        {/* <Workspace daysIsMonth={daysInMonth} setCurrentDay={setCurrentDay}/>
        <Button onClick={() => setCurrentMonth(moment(currentMonth).subtract(1, 'M'))}>left</Button>
        <span className={style.currentMonth}>{moment(currentMonth).format('MMMM YYYY')}</span>
        <Button onClick={() => setCurrentMonth(moment(currentMonth).add(1, 'M'))}>right</Button> */}
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
    </div>
}

export default Main;