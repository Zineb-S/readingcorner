import React from 'react'
import { Outlet } from 'react-router-dom'
import Account from '../user/Account'
import Dashboard from '../admin/Dashboard'
import Login from './Login'


const ProtectedRoutes = () => {

    const role = localStorage.getItem('role')
    if (role == "admin") { return <Dashboard /> }
    else {
        if (role == "user") { return <Account /> }
        else {
            return <Login />
        }
    }


}
export default ProtectedRoutes