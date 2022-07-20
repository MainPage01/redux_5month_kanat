import './App.css';
import TourList from './components/TourList';
import { useState } from 'react';
import Mode from './components/Mode/Mode';
import Footer from './components/Footer';
import { Context } from './context';

function App() {

  const [mode, setMode] = useState({ current: "day" })

  const style = {
    day: {
      color: "black",
      backgroundColor: "white",
      transition: ".3s"
    },
    night: {
      color: "white",
      backgroundColor: "black",
      transition: ".3s",
    },
  }

  const currentStyle = mode.current === "day" ? style.day : style.night

  return (
    <Context.Provider value={{
      style, currentStyle
    }}>
      <div className="App">
        <Mode mode={mode} changeMode={setMode} />
        <TourList mode={mode} />
        <Footer mode={mode} />
      </div>
    </Context.Provider>
  );
}

export default App;
