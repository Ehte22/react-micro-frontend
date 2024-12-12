import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { Navigate } from 'react-router-dom'

const Protected = ({ compo }: { compo: JSX.Element }) => {
    const { auth } = useSelector<RootState, any>(state => state.auth)

    return auth ? <>{compo}</> : <Navigate to="/auth" />
}

export default Protected