import './App.css';
import Tourlist from './components/Tourlist';
import TourItem from './components/TourItem';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import Modes from './Modes'
import About from  './components/About'
import Profile from './components/Profile';
import Header from './Header';



import Mode from './components/Mode';
function App() {

  


  return (


   


<BrowserRouter>
<Header/>
    <Routes>
      <Route path="/" element={ <Modes /> } />
      <Route path="/about" element={<About/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route />






    </Routes>

  </BrowserRouter>



  )
}

export default App;
