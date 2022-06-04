import React, { useEffect, useState } from "react";

//IMPORT BACKGROUND
import HomeMorning from "../assets/background/morning/rumah.png";
import HomeAfternoon from "../assets/background/afternoon/rumah.png";
import HomeNight from "../assets/background/night/rumah.png";
import KampusMorning from "../assets/background/morning/kampus.png";
import KampusAfternoon from "../assets/background/afternoon/kampus.png";
import KampusNight from "../assets/background/night/kampus.png";
import MallMorning from "../assets/background/morning/mall.png";
import MallAfternoon from "../assets/background/afternoon/mall.png";
import MallNight from "../assets/background/night/mall.png";
import WarnetMorning from "../assets/background/morning/warnet.png";
import WarnetAfternoon from "../assets/background/afternoon/warnet.png";
import WarnetNight from "../assets/background/night/warnet.png";

//IMPORT LOCATION
import Options from "./options";
import Kampus from "./kampus";
import Mall from "./mall";
import Warnet from "./warnet";



let j = 0;
let hunger = 50
let health = 50
let happiness = 50
let knowledge = 0
let social = 50
let jam;
let menit;
var m = 0;
const Days = ['Minggu ', 'Senin ', 'Selasa ', 'Rabu ', 'Kamis ', 'Jumat ', 'Sabtu ' ];
const images = ['char1.png', 'char2.png', 'char3.png','char4.png'];
var warningHunger = 0;
var warningHappiness = 0;
var warningHealth = 0;
var warningSocial = 0;

var i = 0;
var k = 0;
var l = 0;
var limit = 20;

function game (props){
  const [index, setIndex] = useState(props.index);
  const [isHome, setIsHome] = useState(true);
  const [isKampus, setIsKampus] = useState(false);
  const [isMall, setIsMall] = useState(false);
  const [isWarnet, setIsWarnet] = useState(false);
  
  function progressBar  (id, value)   {
    const progressBar = document.getElementById(id);
    progressBar.setAttribute("style", "width: " + value + "%");
    progressBar.innerHTML = value;
  }
  // const checkClock = setInterval(() => {
  //   cekJam(jam);
  //   if (m > 6){
  //     clearInterval(checkClock);
  //   }
  // }, 1);

  function waktuBerjalan(){
    const clock = setInterval(() => {
        var hour = document.getElementById("hours");
        var minutes = document.getElementById("minutes");
        var today = document.getElementById('day');
        
        j++;
        k++;
        l++;
        
        if (j > 59) {
            jam++;
            if (jam > 23) {
                jam = 0;
                m++;
                if (m > 6) {
                    if (warningHunger > 2){
                      clearInterval(clock);
                      document.getElementById("game").classList.add("d-none");
                      alert("Sejak masuk kuliah anda kurang makan. jagalah kebutuhan makan anda");
                  }
                  if (warningHappiness > 2){
                      clearInterval(clock);
                      document.getElementById("game").classList.add("d-none");
                      alert("Sejak masuk kuliah anda kurang senang. Jagalah mental anda");
                  }
                  if (warningHealth > 2){
                      clearInterval(clock);
                      document.getElementById("game").classList.add("d-none");
                      alert("Sejak masuk kuliah anda kurang tidur. Waktunya cuti kuliah");
                  }
                  if (warningSocial > 2){
                    clearInterval(clock);
                    document.getElementById("game").classList.add("d-none");
                    alert("Sejak masuk kuliah anda kurang bersosialisasi. Jangan lupa bersosialisasi ");
                  }
                  if (knowledge <= 25 && knowledge > 0){
                      clearInterval(clock);
                      document.getElementById("game").classList.add("d-none");
                      alert("Dropout, coba pilih jurusan lain.");
                  } else if (knowledge <= 50 && knowledge > 25){
                      clearInterval(clock);
                      document.getElementById("game").classList.add("d-none");
                      alert("Kamu lumayan bisa, coba belajar lebih banyak.");
                  } else if (knowledge <= 75 && knowledge > 50){
                      clearInterval(clock);
                      document.getElementById("game").classList.add("d-none");
                      alert("Kamu lulus, tapi bisa lebih rajin lagi");
                  } else if (knowledge <= 100 && knowledge > 75){
                      clearInterval(clock);
                      document.getElementById("game").classList.add("d-none");
                      alert("Kamu lulus dengan nilai baik, cocok untuk mata kuliah ini");
                  }
                }
            }
            cekJam(jam);
            j = 0;
        }
        if(hunger < 20 && l > 10){
            alert("Status : Lapar, segera makan");
            l = 0;
            warningHunger++;
        }
        if(happiness < 20 && l > 10){
            alert("Status : Stress, segera lepaskan stress");
            l = 0;
            warningHappiness++;
        }
        if(health < 20 && l > 10){
            alert("Status : Capek, segera tidur");
            l = 0;
            warningHealth++;
        }
        if(social < 20 && l > 10){
          alert("Status : Manusia makhluk sosial, waktunya bersosialisasi");
          l = 0;
          warningSocial++;
        }
        
    
        hunger--;
        happiness--;
        health--;
        social--;
        menit = j;
        if(hunger < 0){
            hunger = 0;
        }
        if(happiness < 0){
            happiness = 0;
        }
        if(health < 0){
            health = 0;
        }
        if(social < 0){
          social = 0;
      }

        progressBar("hunger", hunger);
        progressBar("health", health);
        progressBar("happiness", happiness);
        progressBar("social", social);
        progressBar("knowledge", knowledge);
        if (menit < 10) {
        menit = "0" + j;
        }
    
    today.innerHTML = Days[m];
    hour.innerHTML = jam;
    minutes.innerHTML = menit;
    }, 3000);
  }



  function gameStart(){
      var hour = document.getElementById("hours");
      var minutes = document.getElementById("minutes");
      var today = document.getElementById('day');
      var avatar = document.getElementById("avatarAction");
      i = index;
      jam = 0;
      menit = 0;
      if (menit < 10) {
          menit = "0" + j;
      }
      today.innerHTML = Days[m];
      hour.innerHTML = jam;
      minutes.innerHTML = menit;
      cekJam(jam);
      
      avatar.src = require('../assets/avatar/' + images[index]); 
      progressBar("hunger", hunger);
      progressBar("health", health);
      progressBar("happiness", happiness);
      progressBar("social", social);
      progressBar("knowledge", knowledge);
      waktuBerjalan();
      
  }

  function cekJam(jam) {
      var greeting = document.getElementById("greeting");
      var greet;
      if (jam > 2 && jam <= 10) {
          greet = "Good Morning ";
          if(isHome === true){
            document.body.style.backgroundImage = 'url(' + HomeMorning +')';
          }
          else if(isKampus === true){
            document.body.style.backgroundImage = 'url(' + KampusMorning +')';
          }
          else if(isMall === true){
            document.body.style.backgroundImage = 'url(' + MallMorning +')';
          }
          else if(isWarnet === true){
            document.body.style.backgroundImage = 'url(' + WarnetMorning +')';
          }
      } else if (jam > 10 && jam <= 16) {
          greet = "Good Afternoon ";
          if(isHome === true){
            document.body.style.backgroundImage = 'url(' + HomeAfternoon +')';
          }
          else if(isKampus === true){
            document.body.style.backgroundImage = 'url(' + KampusAfternoon +')';
          }
          else if(isMall === true){
            document.body.style.backgroundImage = 'url(' + MallAfternoon +')';
          }
          else if(isWarnet === true){
            document.body.style.backgroundImage = 'url(' + WarnetAfternoon +')';
          }
      } else if (jam > 16 && jam <= 23) {
          greet = "Good Night ";
          if(isHome === true){
            document.body.style.backgroundImage = 'url(' + HomeNight +')';
          }
          else if(isKampus === true){
            document.body.style.backgroundImage = 'url(' + KampusNight +')';
          }
          else if(isMall === true){
            document.body.style.backgroundImage = 'url(' + MallNight +')';
          }
          else if(isWarnet === true){
            document.body.style.backgroundImage = 'url(' + WarnetNight +')';
          }
      } else if (jam == 0) {
          greet = "Good Night ";
          if(isHome === true){
            document.body.style.backgroundImage = 'url(' + HomeNight +')';
          }
          else if(isKampus === true){
            document.body.style.backgroundImage = 'url(' + KampusNight +')';
          }
          else if(isMall === true){
            document.body.style.backgroundImage = 'url(' + MallNight +')';
          }
          else if(isWarnet === true){
            document.body.style.backgroundImage = 'url(' + WarnetNight +')';
          }
      } else if (jam > 0 && jam <= 2) {
          greet = "Good Night ";
          if(isHome === true){
            document.body.style.backgroundImage = 'url(' + HomeNight +')';
          }
          else if(isKampus === true){
            document.body.style.backgroundImage = 'url(' + KampusNight +')';
          }
          else if(isMall === true){
            document.body.style.backgroundImage = 'url(' + MallNight +')';
          }
          else if(isWarnet === true){
            document.body.style.backgroundImage = 'url(' + WarnetNight +')';
          }
      }
      greeting.innerHTML = greet;
  }


  function resetAvatar(){
    var avatar = document.getElementById("avatarAction");
    avatar.src = require('../assets/avatar/' + images[index]); 
  } 

  //RUMAH
  function mainIncrease() {
    var hour = document.getElementById("hours");
    var minutes = document.getElementById("minutes");   
    var today = document.getElementById("day"); 
    var avatar = document.getElementById("avatarAction");
    if (happiness < 20) {
        happiness += 5;
        health-= 5;
    } else {
        happiness += 10;
        health -= 5;
    }
    j += 30;
    if (j > 59) {
        jam++;
        if (jam > 23) {
            jam = 0;
            m++;
          
        }
        j -= 60;
    }
    menit = j;
    if (menit < 10) {
        menit = "0" + j;
    }
    today.innerHTML = Days[m];
    hour.innerHTML = jam;
    minutes.innerHTML = menit;
    if(happiness > 100){
        happiness = 100;
    }
    if(health < 0){
        health = 0;
    }
    cekJam(jam);
    progressBar("health", health)
    progressBar("happiness", happiness)
    avatar.src = require('../assets/avatar/main/' + images[index]); 
    setTimeout(resetAvatar, 5000)
  }

  function tidurIncrease() {
    var hour = document.getElementById("hours");
    var minutes = document.getElementById("minutes");   
    var today = document.getElementById("day"); 
    var avatar = document.getElementById("avatarAction");
    if (hunger < 20) {
        health += 5;
        hunger-= 5;
    } else {
      health += 10;
      hunger-= 5;
    }
    j += 30;
    if (j > 59) {
        jam++;
        if (jam > 23) {
            jam = 0;
            m++;
          
        }
        j -= 60;
    }
    menit = j;
    if (menit < 10) {
        menit = "0" + j;
    }
    today.innerHTML = Days[m];
    hour.innerHTML = jam;
    minutes.innerHTML = menit;
    if(health > 100){
        health = 100;
    }
    if(hunger < 0){
        hunger = 0;
    }
    cekJam(jam);
    progressBar("health", health)
    progressBar("hunger", hunger)
    avatar.src = require('../assets/avatar/tidur/' + images[index]); 
    setTimeout(resetAvatar, 5000)
  }
  
  function belajarIncrease() {
    var hour = document.getElementById("hours");
    var minutes = document.getElementById("minutes");   
    var today = document.getElementById("day"); 
    var avatar = document.getElementById("avatarAction");
    if (hunger < 20) {
      knowledge += 5;
      happiness -= 5;
      health -= 5;
      hunger -= 5;
    } else {
      knowledge += 10;
      happiness -= 5;
      health -= 5;
      hunger -= 5;
    }
    j += 60;
    if (j > 59) {
        jam++;
        if (jam > 23) {
            jam = 0;
            m++;
            
        }
        j -= 60;
    }
    menit = j;
    if (menit < 10) {
        menit = "0" + j;
    }
    today.innerHTML = Days[m];
    hour.innerHTML = jam;
    minutes.innerHTML = menit;
    if(health > 100){
        health = 100;
    }
    if(hunger < 0){
        hunger = 0;
    }
    cekJam(jam);
    progressBar("hunger", hunger);
    progressBar("happiness", happiness);
    progressBar("health", health);
    progressBar("knowledge", knowledge);
    avatar.src = require('../assets/avatar/belajar/' + images[index]); 
    setTimeout(resetAvatar, 5000)
  }
  
  
  function makanIncrease() {
    var hour = document.getElementById("hours");
    var minutes = document.getElementById("minutes");   
    var today = document.getElementById("day"); 
    var avatar = document.getElementById("avatarAction");
    if (happiness < 20) {
        hunger += 5;
        happiness -= 5;
    } else {
        hunger += 10;
        happiness -= 5;
    }
    j += 15;
    if (j > 59) {
        jam++;
        if (jam > 23) {
            jam = 0;
            m++;
          
        }
        j -= 60;
    }
    menit = j;
    if (menit < 10) {
        menit = "0" + j;
    }
    today.innerHTML = Days[m];
    hour.innerHTML = jam;
    minutes.innerHTML = menit;
    if(hunger > 100){
        hunger = 100;
    }
    if(happiness < 0){
        happiness = 0;
    }
    cekJam(jam);
    progressBar("hunger", hunger)
    progressBar("happiness", happiness)
    avatar.src = require('../assets/avatar/makan/' + images[index]); 
    setTimeout(resetAvatar, 5000)
  }
  
  //KAMPUS
  function kuliah() {
    var hour = document.getElementById("hours");
    var minutes = document.getElementById("minutes");   
    var today = document.getElementById("day"); 
    var avatar = document.getElementById("avatarAction");
    if (health < 20) {
        knowledge += 10;
        health -= 5;
        happiness -= 5;
    } else {
        knowledge += 20;
        happiness -= 5;
        health -= 5;
    }
    j += 60;
    if (j > 59) {
        jam++;
        if (jam > 23) {
            jam = 0;
            m++;
          
        }
        j -= 60;
    }
    menit = j;
    if (menit < 10) {
        menit = "0" + j;
    }
    today.innerHTML = Days[m];
    hour.innerHTML = jam;
    minutes.innerHTML = menit;
    if(knowledge > 100){
        knowledge = 100;
    }
    if(happiness < 0){
        happiness = 0;
    }
    if(health < 0){
      health = 0;
  }
    cekJam(jam);
    progressBar("knowledge", knowledge)
    progressBar("happiness", happiness)
    progressBar("health", health)
    avatar.src = require('../assets/avatar/belajar/' + images[index]); 
    setTimeout(resetAvatar, 5000)
  }

  function perpustakaan() {
    var hour = document.getElementById("hours");
    var minutes = document.getElementById("minutes");   
    var today = document.getElementById("day"); 
    var avatar = document.getElementById("avatarAction");
    if (health < 20) {
        knowledge += 5;
        social += 5;
        health -= 5;
        happiness -= 5;
    } else {
        knowledge += 10;
        social += 10;
        happiness -= 5;
        health -= 5;
    }
    j += 60;
    if (j > 59) {
        jam++;
        if (jam > 23) {
            jam = 0;
            m++;
        }
        j -= 60;
    }
    menit = j;
    if (menit < 10) {
        menit = "0" + j;
    }
    today.innerHTML = Days[m];
    hour.innerHTML = jam;
    minutes.innerHTML = menit;
    if(knowledge > 100){
        knowledge = 100;
    }
    if(social > 100){
        social = 100;
    }
    if(happiness < 0){
        happiness = 0;
    }
    if(health < 0){
      health = 0;
  }
    cekJam(jam);
    progressBar("knowledge", knowledge)
    progressBar("happiness", happiness)
    progressBar("health", health)
    progressBar("social", social)
    avatar.src = require('../assets/avatar/makan/' + images[index]); 
    setTimeout(resetAvatar, 5000)
  }
  
  function organisasi() {
    var hour = document.getElementById("hours");
    var minutes = document.getElementById("minutes");   
    var today = document.getElementById("day"); 
    var avatar = document.getElementById("avatarAction");
    if (social < 20) {
        social += 5;
        happiness -= 5;
    } else {
        social += 10;
        happiness -= 5;
    }
    j += 60;
    if (j > 59) {
        jam++;
        if (jam > 23) {
            jam = 0;
            m++;
          
        }
        j -= 60;
    }
    menit = j;
    if (menit < 10) {
        menit = "0" + j;
    }
    today.innerHTML = Days[m];
    hour.innerHTML = jam;
    minutes.innerHTML = menit;
    if(social > 100){
        social = 100;
    }
    if(happiness < 0){
        happiness = 0;
    }
    cekJam(jam);
    
    progressBar("happiness", happiness)
    progressBar("social", social)
    avatar.src = require('../assets/avatar/belajar/' + images[index]); 
    setTimeout(resetAvatar, 5000)
  }
  
  //MALL
  function bioskop() {
    var hour = document.getElementById("hours");
    var minutes = document.getElementById("minutes");   
    var today = document.getElementById("day"); 
    var avatar = document.getElementById("avatarAction");
    if (happiness < 20) {
        social += 10;
        happiness += 15;
        knowledge -= 5;
        health -= 5;
    } else {
        social += 10;
        happiness += 10;
        knowledge -= 5;
        health -= 5;
    }
    j += 60;
    if (j > 59) {
        jam++;
        if (jam > 23) {
            jam = 0;
            m++;
        }
        j -= 60;
    }
    menit = j;
    if (menit < 10) {
        menit = "0" + j;
    }
    today.innerHTML = Days[m];
    hour.innerHTML = jam;
    minutes.innerHTML = menit;
    if(happiness > 100){
        happiness = 100;
    }
    if(social > 100){
      social = 100;
    }
    if(knowledge < 0){
      knowledge = 0;
    }
    if(health < 0){
        health = 0;
    }
    cekJam(jam);
    progressBar("knowledge", knowledge)
    progressBar("happiness", happiness)
    progressBar("health", health)
    progressBar("social", social)
    avatar.src = require('../assets/avatar/main/' + images[index]); 
    setTimeout(resetAvatar, 5000)
  }
  
  function hangout() {
    var hour = document.getElementById("hours");
    var minutes = document.getElementById("minutes");   
    var today = document.getElementById("day"); 
    var avatar = document.getElementById("avatarAction");
    if (social < 20) {
        social += 25;
        health -= 5;
    } else {
        social += 20;
        health -= 5;
    }
    j += 40;
    if (j > 59) {
        jam++;
        if (jam > 23) {
            jam = 0;
            m++;
        }
        j -= 60;
    }
    menit = j;
    if (menit < 10) {
        menit = "0" + j;
    }
    today.innerHTML = Days[m];
    hour.innerHTML = jam;
    minutes.innerHTML = menit;
    if(social > 100){
        social = 100;
    }
    if(health < 0){
        health = 0;
    }
    cekJam(jam);
    progressBar("social", social)
    progressBar("health", health)
    avatar.src = require('../assets/avatar/main/' + images[index]); 
    setTimeout(resetAvatar, 5000)
  }

  function arcade() {
    var hour = document.getElementById("hours");
    var minutes = document.getElementById("minutes");   
    var today = document.getElementById("day"); 
    var avatar = document.getElementById("avatarAction");
    if (happiness < 20) {
        happiness += 15;
        knowledge -= 5;
        health -= 5;
    } else {
        happiness += 10;
        knowledge -= 5;
        health -= 5;
    }
    j += 40;
    if (j > 59) {
        jam++;
        if (jam > 23) {
            jam = 0;
            m++;
        }
        j -= 60;
    }
    menit = j;
    if (menit < 10) {
        menit = "0" + j;
    }
    today.innerHTML = Days[m];
    hour.innerHTML = jam;
    minutes.innerHTML = menit;
    if(happiness > 100){
        happiness = 100;
    }
    if(knowledge < 0){
      knowledge = 0;
    }
    if(health < 0){
        health = 0;
    }
    cekJam(jam);
    progressBar("knowledge", knowledge)
    progressBar("happiness", happiness)
    progressBar("health", health)
    avatar.src = require('../assets/avatar/main/' + images[index]); 
    setTimeout(resetAvatar, 5000)
  }

  function restoran() {
    var hour = document.getElementById("hours");
    var minutes = document.getElementById("minutes");   
    var today = document.getElementById("day"); 
    var avatar = document.getElementById("avatarAction");
    if (hunger < 20) {
        hunger += 25;
        health -= 5;
    } else {
        hunger += 20;
        health -= 5;
    }
    j += 35;
    if (j > 59) {
        jam++;
        if (jam > 23) {
            jam = 0;
            m++;
        }
        j -= 60;
    }
    menit = j;
    if (menit < 10) {
        menit = "0" + j;
    }
    today.innerHTML = Days[m];
    hour.innerHTML = jam;
    minutes.innerHTML = menit;
    if(hunger > 100){
        hunger = 100;
    }
    if(health < 0){
        health = 0;
    }
    cekJam(jam);
    progressBar("hunger", hunger)
    progressBar("health", health)
    avatar.src = require('../assets/avatar/makan/' + images[index]); 
    setTimeout(resetAvatar, 5000)
  }

  //WARNET
  function warnet() {
    var hour = document.getElementById("hours");
    var minutes = document.getElementById("minutes");   
    var today = document.getElementById("day"); 
    var avatar = document.getElementById("avatarAction");
    if (happiness < 20) {
        happiness += 25;
        health -= 5;
    } else {
        happiness += 20;
        health -= 5;
    }
    j += 60;
    if (j > 59) {
        jam++;
        if (jam > 23) {
            jam = 0;
            m++;
        }
        j -= 60;
    }
    menit = j;
    if (menit < 10) {
        menit = "0" + j;
    }
    today.innerHTML = Days[m];
    hour.innerHTML = jam;
    minutes.innerHTML = menit;
    if(happiness > 100){
        happiness = 100;
    }
    if(health < 0){
        health = 0;
    }
    cekJam(jam);
    progressBar("happiness", happiness)
    progressBar("health", health)
    avatar.src = require('../assets/avatar/main/' + images[index]); 
    setTimeout(resetAvatar, 5000)
  }

  //PINDAH LOKASI
  function goKampus () {
    setIsHome(false);
    setIsKampus(true);
    setIsMall(false);
    setIsWarnet(false);

  }
  function goHome () {
    setIsHome(true);
    setIsKampus(false);
    setIsMall(false);
    setIsWarnet(false);  

  }

  function goMall () {
    setIsHome(false);
    setIsKampus(false);
    setIsMall(true);
    setIsWarnet(false);

  }

  function goWarnet () {
    setIsHome(false);
    setIsKampus(false);
    setIsMall(false);
    setIsWarnet(true);
    
  }

  function renderConditionally() {
    if (isHome === true) {
      return <Options makanIncrease={makanIncrease} mainIncrease={mainIncrease} belajarIncrease={belajarIncrease} tidurIncrease={tidurIncrease}  goKampus={goKampus} goMall={goMall} goWarnet={goWarnet} />;
    } else if (isKampus === true) {
      return <Kampus kuliah={kuliah} perpustakaan={perpustakaan} organisasi={organisasi} goMall={goMall} goWarnet={goWarnet} goHome={goHome} />;
    } else if (isMall === true) {
      return <Mall restoran={restoran} arcade={arcade} hangout={hangout} bioskop={bioskop} goHome={goHome} goWarnet={goWarnet} goKampus={goKampus}/>;
    } else if (isWarnet === true) {
      return <Warnet warnet={warnet} makanIncrease={makanIncrease} goKampus={goKampus} goMall={goMall} goHome={goHome}/>;
    }
    // changeBackground();
  }
  
  useEffect(()=>{
    gameStart();
  }, [])
  return (
    <div id="game" className="pt-2">
      
      <div
      id="Status-bar"
      className="p-3 mb-4 mt-4 wd-75"
      style={{
        borderRadius: "10px",
        maxWidth: "500px"
      }}
      >
        <div className="row">
          <div className="col-sm-6 d-flex gap-2 justify-content-between align-items-center my-2">
            <i className="fa-solid fa-utensils" />
            <div className="progress">
              <div
                id="hunger"
                className="progress-bar"
                role="progressbar"
                style={{
                  width: "50%"
                }}
                aria-valuenow={50}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
          </div>
          <div className="col-sm-6 d-flex gap-2 justify-content-between align-items-center">
            <i className="fa-solid fa-bed" />
            <div className="progress">
              <div
                id="health"
                className="progress-bar"
                role="progressbar"
                style={{
                  width: "50%"
                }}
                aria-valuenow={50}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 d-flex gap-2 justify-content-between align-items-center my-2">
            <i className="fa-solid fa-gamepad" />
            <div className="progress">
              <div
                id="happiness"
                className="progress-bar"
                role="progressbar"
                style={{
                  width: "50%"
                }}
                aria-valuenow={50}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
          </div>
          <div className="col-sm-6 d-flex gap-2 justify-content-between align-items-center">
            <i class="fa-solid fa-users" />
            <div className="progress">
              <div
                id="social"
                className="progress-bar"
                role="progressbar"
                style={{
                  width: "50%"
                }}
                aria-valuenow={50}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
          </div>
        </div>
        <div className="">
          <div className="col-sm-6 d-flex gap-2 justify-content-between align-items-center my-2">
              <i className="fa-solid fa-graduation-cap" />
              <div className="progress">
                <div
                  id="knowledge"
                  className="progress-bar"
                  role="progressbar"
                  style={{
                    width: "0%"
                  }}
                  aria-valuenow={0}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
        </div>
      </div>
      <div className="greet">
      <h3>
        <span id="greeting" />
        <span id="username">{props.name}</span>
      </h3>
      <div id="clock">
        <span className="time" />
        <span id="day"> </span>
        <span id="hours">00</span>
        <span>:</span>
        <span id="minutes">00</span>
      </div>
      </div>
      <div id="avatarPlay">
        <img id="avatarAction" src={require("../assets/avatar/char1.png")} alt="" className="avatarPlay-img pt-2" />
        <audio id="voiceline" src />
      </div>
      {renderConditionally()}
      
      
    </div>
  );
}


export default game;
