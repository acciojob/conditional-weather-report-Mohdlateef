import React from "react"

let WeatherDsiplay=({weather,condition})=>{
console.log(condition);
    return(
        <div>
{
(weather>20)?(<div>{weather}and{condition}</div>):(<div>{weather}and{condition}</div>)
}
        </div>
    )
}

export default WeatherDsiplay;