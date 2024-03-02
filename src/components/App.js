
import React,{useState} from "react";
import './../styles/App.css';
import WeatherDsiplay from "./WeatherDisplay";

const App = () => {
  let [weather,setWeather]=useState(25)
  let [condition,setConditon]=useState("Sunny")
  return (
    
    <div>
    
       <WeatherDsiplay weather={weather} condition={condition}/>
        {/* Do not remove the main div */}
        
    </div>
  )
}

export default App
