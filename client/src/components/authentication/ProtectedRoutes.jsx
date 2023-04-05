import React from 'react'
import { Outlet } from 'react-router-dom'
import Account from '../user/Account'
import Dashboard from '../admin/Dashboard'
import Login from './Login'
import Orders from '../admin/Orders'
import Books from '../admin/Books'
import Users from '../admin/Users'


const ProtectedRoutes = (props) => {

    var path = props.name
    var role = localStorage.getItem('role')

    if (role == "admin") {
        if (path == 'dashboard'){
            return <Dashboard />
        }
        if (path == 'orders'){
            return <Orders />
        }
        if (path == 'books'){
            return <Books />
        }
        if (path == 'users'){
            return <Users />
        }
    }
    else {
        if (role == "user") { return <Account /> }
        else {
            return <Login />
        }
    }


}
export default ProtectedRoutes