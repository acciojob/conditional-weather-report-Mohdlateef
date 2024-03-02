import React from "react"

let WeatherDsiplay = ({ weather, condition }) => {
    console.log(condition);
    return (
        <div>
            {
                (weather > 20) ? (<div><p>{weather}<span></span></p><p>{condition}</p> </div>) : (<div><p>{weather}<span></span></p><p>{condition}</p></div>)
            }
        </div>
    )
}

export default WeatherDsiplay;