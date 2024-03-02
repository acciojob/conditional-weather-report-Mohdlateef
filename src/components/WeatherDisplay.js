import React from "react"

let WeatherDsiplay=({weather,condition})=>{
console.log(condition);
    return(
        <div>
{
(weather>20)?(<div><p>{weather}</p> <spain>{condition}</spain></div>):(<div><p>{weather}</p><spain>{condition}</spain></div>)
}
        </div>
    )
}

export default WeatherDsiplay;