import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { Navigate } from 'react-router-dom'

interface IProtected {
    compo: React.ReactNode
}

const Protected: React.FC<IProtected> = ({ compo }) => {
    const { auth } = useSelector<RootState, any>(state => state.auth)

    return auth ? compo : <Navigate to="/auth" />
}

export default Protected