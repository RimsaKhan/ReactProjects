import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';
export default function SearchBox ({updateInfo}){
let [city,setCity]=useState("");
let [error,setError]=useState(false);
  const API_URL= "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY="ea037b2cdefdaac7b5f2c1bebf027b43";

  let getWeatherInfo=async()=>{
    try{
        let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonResponse=await response.json();
    let result={
    city:city,
    temp:jsonResponse.main.temp,
    temp_max:jsonResponse.main.temp_max,
    temp_min:jsonResponse.main.temp_min,
    humidity:jsonResponse.main.humidity,
    feelsLike:jsonResponse.main.feels_like,
    weather:jsonResponse.weather[0].description
   };
   console.log(result);
   return result;
}
  
catch(error){
    throw err;
}
  }

let handleChange=(event)=>{
setCity(event.target.value);
}
let handleSubmit=async(event)=>{
    try{
    event.preventDefault();
    console.log(city);
    setCity("");
    let newInfo= await getWeatherInfo();
    updateInfo(newInfo);
    }

catch(err){
    setError(true);
}
}
return(
    <div className='SearchBox'>
    <form onSubmit={handleSubmit}>
      <div>
        <TextField
          required
          id="city"
          label="City Name"
          value={city}
          onChange={handleChange}
        />
    </div>
    <br></br>
    <Button variant="contained"size="small"type="submit">Search</Button>
    {error && <p style={{color:"red"}}>No such place exits</p>}
    </form>
    </div>
);
}