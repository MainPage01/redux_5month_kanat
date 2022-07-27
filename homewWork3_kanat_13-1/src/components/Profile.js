import React from 'react';
import { Nav } from 'react-bootstrap';
import {NavLink, Route} from "react-router-dom"

import Modes from '../Modes';
function Profile() {

    // const [mode, setMode] = useState({
    //     current: "day"
    
    //   })

         
    // let changeModeText = mode.current ==="day" ? " turn to night mode" : "turn to day mode"
    
    // const handler =()=>{

    //    const newValue= mode.current === "day"? "night" : "day";

    //     changeMode({current:newValue})
    // }
    return (
        <div className='App'>
        <h1 className='profile'>THIS IS PROFILE</h1>

        {/* <button onClick={handler}>{changeModeText}</button> */}
        <NavLink to="/">BACK TO THE MAIN </NavLink>

            <Modes/>

        </div>
    );
}

export default Profile;