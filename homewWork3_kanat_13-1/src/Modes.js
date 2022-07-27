// import React from 'react';
// import Tourlist from './components/Tourlist';
// import TourItem from './components/TourItem';
// import { useState } from 'react';
// import {BrowserRouter, Route, Routes} from "react-router-dom";
// import App from './App';
// import About from './components/About';

// function Routes(props) {
//     return (
            
//     <BrowserRouter>
//     <About/>
//     <Routes>
//     <Route path="/" element={ <App/> } />
//     <Route path="/about" element={ <About /> } />
//         <Route/>
//         <Route/>
//         <Route/>






//     </Routes>

//     </BrowserRouter>
//     );
// }

// export default Routes;

import './App.css';
import Tourlist from './components/Tourlist';
import TourItem from './components/TourItem';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavLink } from 'react-router-dom';



import Mode from './components/Mode';
function Modes() {



  const [mode, setMode] = useState({
    current: "day"

  })
  return (


    <div className='App'>
      <Mode mode={ mode } changeMode={ setMode } />
      <Tourlist mode={ mode } />
    </div>






  )
}

export default Modes;
