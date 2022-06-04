import React, { useState, useEffect } from 'react';
import PlayerInput from "./player_input";
import RandomAvatar from "../assets/random_avatar.jpg";
import RandomName from "../assets/random_name.jpg";
import Avatar1 from "../assets/avatar/char1.png";
import Avatar2 from "../assets/avatar/char2.png";
import Avatar3 from "../assets/avatar/char3.png";
import Avatar4 from "../assets/avatar/char4.png";
import '../style.css';

var adjective = ["Hope","Obie", "Launa", "Katherine", "Walker", "Moses", "Tayna", "Rosia", "Yahaira", "Tommy", "Elwanda", "Clorinda", "Sheron", "Kayla", "Clementina", "Rene", "Rex", "Kathy", "Latoya", "Shirleen", "Shoshana"]; 
var object = ["Chauncey", "Houchins", "Lama", "Frasca", "Houston", "Ake", "Shankles", "Cantor", "Mizell", "Cleland", "Maltby", "Tirrell", "Cary", "Mace", "Horta", "Carlile", "Deegan", "Torrez", "Humfeld", "Helgeson"];

function generator() {
  document.querySelector("#nama").value = adjective[Math.floor(Math.random() * adjective.length)] + " " + object[Math.floor(Math.random() * object.length)];
}

const Slideshow = ( {getIndex, imgs }) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setIndex(0)
    getIndex(index);
  }, [])

  const next = () => {
    if (index === imgs.length - 1) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }
  const prev = () => {
    if (index === 0) {
      setIndex(imgs.length - 1)
    } else {
      setIndex(index - 1)
    }
  }


  return (
    <div className="slideshow">
      <div className="col">
          <button className="btn-lg" onClick={prev}>
            ❮
          </button>
      </div>
      <div className="col-2">
          <img
            id="image_shower"
            src={imgs[index]}
            alt="avatar+"
            className="slider-img"
            onChange={getIndex(index)}
          />
      </div>
      <div className="col">
          <button className="btn-lg" onClick={next}>
            ❯
          </button>
      </div>
    </div>
  )
}

function avatar (props) {
  const [index, setIndex] = useState()
  const [name, setName] = useState("")
  function logItem (inputText) {
    console.log(inputText);
    props.onSubmit(inputText);
  }
  
  function getIndex(getIndex) {
    props.retrieveIndex(getIndex);
  }
  
  return (
    <div id="slider" className="row mt-3" style={{alignItems: 'center'}}>
      <div id="image_shower" className="col" >
        <Slideshow
          getIndex={getIndex}
          imgs = {[
            Avatar1,
            Avatar2,
            Avatar3,
            Avatar4
          ]}
        />
      </div>
      <div id="avatar" className="justify-content-center align-items-center" >
          <div id="random" className="row mt-2">
            <div className="col">
              <img
                src={RandomName}
                className="randomName"
                onClick={generator}
                id="genButton"
                alt="random name"
              />
            </div>
          </div>
          <PlayerInput onSubmit={logItem } onClick={() => {
            props.onClick();
            }}/>
      </div>
    </div>
  );
}

export default avatar;
