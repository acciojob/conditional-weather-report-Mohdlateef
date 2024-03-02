import React from "react"

let WeatherDsiplay=({weather,condition})=>{
console.log(condition);
    return(
        <div>
{
(weather>20)?(<p>{weather}and{condition}</p>):(<p>{weather}and{condition}</p>)
}
        </div>
    )
}

export default WeatherDsiplay;