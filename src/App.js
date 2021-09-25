
import './App.css';
import Navbar from "./components/Navbar";
import Form from './components/Form';
// import About from './components/About';
import React, { useState } from 'react'


function App() {
  var [text,setText]=useState('dark')
  var [mode,setMode] = useState('light');
  var [btnText,setBtnText]= useState("Enabled dark mode")
  const toggleMode=()=>{
    if (mode === 'light'){
      setMode('dark')
      setBtnText("Disabled Dark mode")
      setText('light')
      document.body.style.backgroundColor = "#2d3436"
      document.body.style.color = "white"

    } 
    else{
      setMode('light')
      setBtnText("Enabled Dark mode")
      setText('dark')
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"

    }
  }
  return (
  <>
<Navbar title="TextUtlis" mode={mode} toggleMode={toggleMode} setBtnText={btnText} text={text}
 />
<div className="container"><Form heading="Enter here to go beyond"/></div>
{/* <About/> */}
  </>
  );
}

export default App;
