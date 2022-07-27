import React from 'react';
import './App.css'
import {NavLink, Route} from "react-router-dom"
import {useState} from "react"
import About from './components/About';

function Header(props) {
    return (
        <div className='header'>
        <h1>HEADER</h1>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/profile"> Profile</NavLink>
        {/* <Route path='/about '/>  */}
        <div className='nothing'></div>
        </div>
    );
}

export default Header;