import React, {useEffect, useState} from "react";
import Trophy from "../assets/trophy.png";
import axios from "axios";
import About from './about';

function header() {
  const [data, setData] = useState({})
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=Tangerang&appid=988ee8ed037e9195f00f49f78c2e85b8';

  useEffect(() => {
    axios.get(url)
      .then(res => {
        setData(res.data)
        console.log(data)
        console.log(res.data)
      })
  },  [])

// const Weather = () => {
//   if (data.length > 0) {
//     return data.map((data, index) => {
//       console.log(data);
//       return (
//           <h4>{data.weather.main}</h4>  
//       );
//     });
//   } else {
//     return <h4>tidak ada info</h4>;
//   }
// }
  return (
    <div id="header" className>
      <img src={Trophy} alt="" />
      <h3>7 Days Student</h3>
      {/* {Weather} */}
      <hr />
    
      {/* {data.weather ? <h4>{data.weather.main}</h4> : null} */}
    </div>
  );

}

export default header;
