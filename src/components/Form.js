import React, { useState } from "react";

export default function Form(props) {
  const [text, setText] = useState("");
  const clickToUppercase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const clickToLowercase = () => {
    let smallText = text.toLowerCase();
    setText(smallText);
  };
  const clickToClear = () => {
    let smallText = "";
    setText(smallText);
  };
  const charToUppercase = () => {
    let firstchar = text.charAt(0); // storing the first char of the string
    let newText = firstchar.toUpperCase(); // converting that to uppercase
    setText(newText + text.slice(1)); // printing it with rest excluding the first char by using slice
  };

  const toCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const toRemoveExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  };

  const handleOnChange = (event) => {
    console.log("Even was handled");
    setText(event.target.value);
  };
  return (
    <>
      <div className="conatiner">
        <div>
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <textarea
              type="email"
              className="form-control"
              id="myBox"
              rows="8"
              onChange={handleOnChange}
              value={text}
              placeholder="Hey 🙋‍♂️write here"
            ></textarea>
          </div>
          <button className="btn  btn-primary mx-3" onClick={clickToUppercase}>
            Convert to uppercase
          </button>
          <button className="btn  btn-primary mx-3" onClick={clickToLowercase}>
            Convert to lowercase
          </button>
          <button className="btn  btn-primary mx-3" onClick={clickToClear}>
            Clear Text
          </button>
          <button className="btn  btn-primary" onClick={charToUppercase}>
            Capitalize first char
          </button>
          <button className="btn  btn-primary mx-3" onClick={toCopy}>
            Copy Text
          </button>
          <button
            className="btn  btn-primary mx-3"
            onClick={toRemoveExtraSpaces}
          >
            Remove spaces
          </button>
        </div>
      </div>
      <div className="container my-4">
        <h1>Stats of data you write</h1>
        <p>
          You have write "{text.split(" ").length}" words and "{text.length}""
          characters
        </p>
        <p>{0.08 * text.split(" ").length} Minutes to read </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
