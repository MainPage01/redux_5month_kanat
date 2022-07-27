import React from 'react';
import "../App.css"
function Mode({mode, changeMode}) {

    
    let changeModeText = mode.current ==="day" ? " turn to night mode" : "turn to day mode"
    
    const handler =()=>{

       const newValue= mode.current === "day"? "night" : "day";

        changeMode({current:newValue})
    }
    
    return (
        <div>
        <button className="btn"onClick={handler}>{changeModeText}</button>

        </div>
    );
}

export default Mode;