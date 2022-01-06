import React, { FC } from 'react'
import { Navigate } from 'react-router-dom'
import { useTypeSelector } from '../hooks/useTypeSelector'

export const RequiredAuth: FC = ({ children }) => {

    const { isAuth } = useTypeSelector(state => state.login)

    if (!isAuth) {
        return <Navigate to="/Login" />
    }

    return <>{children}</>
}