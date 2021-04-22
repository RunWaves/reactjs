import React from 'react';
import logo from '../../assets/images/logo-transparent.png'
import Login from './Login';

export default function Header() {
    return (
        <header className="flex justify-between h-10">
            <img src={logo} alt="logo" className="order-first"/>
            <span className="text-3xl font-bold text-white">Runwaves</span>
            <div className="order-last">
                <Login/>
            </div>
        </header>
    );
}