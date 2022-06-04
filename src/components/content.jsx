import React from "react";
import Avatar from "./avatar";
import Game from "./game";
import { useState } from "react";
// import Victory from "./victory";
//<Game></Game>
//<Victory></Victory>

function content () {
  const [isPlay, setIsPlay] = useState(false);
  const [name, setName] = useState("");
  const [index, setIndex] = useState(0);
  function logItem(inputText) {
    console.log(inputText);
    setName (inputText);
  }
  function retrieveIndex(index) {
    setIndex(index);
    console.log(index);
  }
  const handleClick = () => {
    setIsPlay(true);
    
  }

  
  
  return (
    <div className="container justify-content-center" >
    <div id="content" align="center" className="" >
        {isPlay ?  <Game name={name} index={index}/> : <Avatar onSubmit={logItem} onClick={handleClick} retrieveIndex={retrieveIndex}/>}
    </div>
    </div>
  );
}

export default content;
