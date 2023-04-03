import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Login from './authentication/Login';
import Home from './homepage/Home';


const Router = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>

    );
}

export default Router