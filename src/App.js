import "./App.css";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Alert from "./components/Alert";
// import About from './components/About';
import React, { useState } from "react";

function App() {
  var [text, setText] = useState("dark");
  var [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

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
    } else {
      setMode("light");
      setBtnText("Enabled Dark mode");
      setText("dark");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode is enabled", "success");
    }
  };
  return (
    <>
      <Navbar
        title="TextUtlis"
        mode={mode}
        toggleMode={toggleMode}
        setBtnText={btnText}
        text={text}
      />
      <Alert alert={alert} showAlert={showAlert} />
      <div className="container">
        <Form heading="Enter here to go beyond" showAlert={showAlert} />
      </div>
      {/* <About/> */}
    </>
  );
}

export default App;
