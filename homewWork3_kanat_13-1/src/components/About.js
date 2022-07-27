import React from 'react';

import {NavLink, Route} from "react-router-dom"

function About(props) {
    return (
        <div className='App'>
            <h1 className='about'>ABOUT</h1>
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eos cupiditate sunt quas libero sapiente temporibus mollitia obcaecati iure tenetur?  </p> */}
        <p>this is about text and exctra</p>
            <NavLink to="/">back</NavLink>
        </div>
    );
}

export default About;