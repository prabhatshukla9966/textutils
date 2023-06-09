import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");
  const handleupclick = () => {
    console.log("Uppercase was clicked");
    let nayatext = text.toUpperCase();
    setText(nayatext);
  };
  const handlelowlick = () => {
    console.log("Lowercase was clicked");
    let nayatext = text.toLowerCase();
    setText(nayatext);
  };
  const Handleonchange = (event) => {
    console.log("onchange");
    setText(event.target.value);
  };

  return (
    <div>
      <div className="container">
        <div className="mb-3">
          <label htmlFor="mybox" className="form-label">
            <h1>{props.Heading}</h1>
          </label>
          <textarea
            className="form-control"
            value={text}
            placeholder="Enter Text Here to start"
            onChange={Handleonchange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "grey",
            }}
            id="mybox"
            rows="8"
          ></textarea>
          <button className="btn btn-primary mx-1 my-2 " onClick={handleupclick}>
            Uppercase Button
          </button>
          <button className="btn btn-primary mx-1 my-2 " onClick={handlelowlick}>
            LowerCase Button
          </button>
        </div>
      </div>

      <div className="container my-5 ">
        <h1>Your text summary</h1>
        <p>
          {" "}
          {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters{" "}
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
