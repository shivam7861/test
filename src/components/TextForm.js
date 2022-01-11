import React, { useState } from "react"; // {useState} is a Hook

export default function TextForm(props) {
const handleUpClick = () => {
  // console.log("Uppercase was clicked");
  let newText = text.toUpperCase();
  setText(newText);
  props.showAlert("converted to uppercase","success");
};
const handleDoClick = () => {
  // console.log("Uppercase was clicked");
  let newText = text.toLowerCase();
  setText(newText);
  props.showAlert("converted to lowercase","success");

};
const handleDoTrim = () => {
  // console.log("Uppercase was clicked");
  let newText = text.trim();
  setText(newText);
  props.showAlert("Trimmed successfully","success");

};
const handleOnChange = (event) => {
  // console.log("on change");
  setText(event.target.value);
};
const [text, setText] = useState(""); // this is a state we defined
return (
  <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}
        ></textarea>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          convert to uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleDoClick}>
          convert to lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleDoTrim}>
          Trim
        </button>
      </div>
      <div className="container my-3" >
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
          <br />
          <h2>Summary</h2>
          <p>{text.length>0?text:"enter something to preview"}</p>
        </p>
      </div>
    </div>
  </>
);
}
