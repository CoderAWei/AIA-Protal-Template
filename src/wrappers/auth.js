import React from 'react'
import { Navigate, Outlet } from 'umi'

export default function RequiredAuth() {
    const isLogin = React.useState<boolean>(false)
    if (!isLogin) {
        return <Navigate to={'/login'} replace={true}/>
    }

    return <Outlet/>
}

const AuthContext = React.createContext();

export function useAuth() {
    return React.useContext(AuthContext);
}