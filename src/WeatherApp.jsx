import SearchBox  from "./SearchBox"
import InfoBox  from "./InfoBox"
import { useState } from "react"
export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        city:"Delhi",
        feelsLike: 33.14,
        humidity: 52,
        temp: 31.07,
        temp_max: 31.07,
        temp_min: 31.07,
        weather:"broken clouds"
    });
      let updateInfo=(newInfo)=>{
      setWeatherInfo(newInfo);
    }
    return(
        <div style={{textAlign:"center"}}>
            <h1>Weather App</h1>
            <SearchBox updateInfo={updateInfo}/>
            <br></br>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}