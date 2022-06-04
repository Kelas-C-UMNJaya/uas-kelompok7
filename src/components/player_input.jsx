import React from "react";
import PlayButton from "../assets/play.jpg";
import { useState } from 'react';
// import About from "./about";

function playerInput (props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event){
    const newValue = event.target.value;
    setInputText(newValue);
  }
 
  return (
    <div id="playerInput" className="col-5 mt-3">
      <div id="random_name">
        <input
          onChange={handleChange}
          value={inputText}
          type="text"
          id="nama"
          name="nama"
          placeholder="Enter your name here..."
        />
      </div>
      <div className="mt-3">
        <select className="custom-select">
          <option value="Teknik Informatika">Teknik Informatika</option>
          <option value="Teknik Elektro">Teknik Elektro</option>
          <option value="Teknik Mesin">Teknik Mesin</option>
        </select>
      </div>
      <div
        className="playButton d-flex justify-content-center"
        
      >
        <img src={PlayButton} className="play" alt=""
        onClick={() => {
          props.onSubmit(inputText);
          props.onClick();
          }} />
      </div>
      {/* <div>
        <About />
      </div> */}
    </div>
  );
}


export default playerInput;
