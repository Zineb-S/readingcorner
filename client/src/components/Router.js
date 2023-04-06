import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './homepage/Home';
import Bestsellers from './homepage/Bestsellers';
import ProtectedRoutes from './authentication/ProtectedRoutes';
import Cart from '../components/user/Cart'
import Success from './user/Success';
import Cancel from './user/Cancel';

const Router = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<ProtectedRoutes name='login' />} />
                <Route path="/dashboard" element={<ProtectedRoutes name='dashboard' />} />
                <Route path="/profile" element={<ProtectedRoutes name='profile'/>} />
                <Route path="/bestsellers" element={<Bestsellers/>} />
                <Route path="/orders" element={<ProtectedRoutes name='orders'/>} />
                <Route path="/books" element={<ProtectedRoutes name='books'/>} />
                <Route path="/users" element={<ProtectedRoutes name='users'/>} />
                <Route path="/success" element={<Success/>} />
                <Route path="/cancel" element={<Cancel/>} />
            </Routes>
        </div>

    );
}

export default Router