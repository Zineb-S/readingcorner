import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Login from './authentication/Login';
import Home from './homepage/Home';
import Dashboard from './admin/Dashboard';
import Account from './user/Account';
import Bestsellers from './homepage/Bestsellers';
import ProtectedRoutes from './authentication/ProtectedRoutes';
import Books from './admin/Books';
import Orders from './admin/Orders';
import Users from './admin/Users';

const Router = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<ProtectedRoutes />} />
                <Route path="/dashboard" element={<ProtectedRoutes />} />
                <Route path="/profile" element={<ProtectedRoutes/>} />
                <Route path="/bestsellers" element={<Bestsellers/>} />
                <Route path="/orders" element={<Orders/>} />
                <Route path="/books" element={<Books/>} />
                <Route path="/users" element={<Users/>} />
            </Routes>
        </div>

    );
}

export default Router