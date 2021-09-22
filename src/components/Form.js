import React,{useState} from "react";

export default function Form(props) {
    const[text,setText]=useState("Hey 🙋‍♂️write here")
    const clickToUppercase= ()=>{
        let newText=text.toUpperCase();
        setText(newText)
    }
    const handleOnChange=(event)=>{
        console.log("Even was handled")
        setText(event.target.value)
    }
  return (
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
          placeholder="name@example.com"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={clickToUppercase}>Convert to uppercase</button>
    </div>
  );
}
