import "./App.css";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Alert from "./components/Alert";
import About from './components/About';
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  var [text, setText] = useState("dark");
  var [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [emoji,setEmoji]=useState("Hey 👩🏻 Write something here")

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  var [btnText, setBtnText] = useState("Enabled dark mode");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setBtnText("Disabled Dark mode");
      setText("light");
      document.body.style.backgroundColor = "#2d3436";
      document.body.style.color = "white";
      showAlert("Dark mode is enabled", "success");
      document.title=("Text Utils 👩🏿 Dark mode Enabled")
      setEmoji("Hey 👩🏿 Write something here")
    } else {
      setMode("light");
      setBtnText("Enabled Dark mode");
      setText("dark");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode is enabled", "success");  
      document.title=("Text Utils 👩🏻 Light mode Enabled")
      setEmoji(" Hey 👩🏻 write something here" )
    }
  };
  return (
    <>
    <Router>

      <Navbar
        title="TextUtlis"
        mode={mode}
        toggleMode={toggleMode}
        setBtnText={btnText}
        text={text}
        />
         <Switch>
          <Route exact path="/About">
            <About/>
          </Route>
        
          <Route exact path="/">
          <Form heading="Enter here to go beyond" showAlert={showAlert} emoji={emoji}/>
          </Route>
        </Switch>
      <Alert alert={alert} showAlert={showAlert} />
      <div className="container">
        
      </div>
      
        </Router>
    </>
  );
}

export default App;
