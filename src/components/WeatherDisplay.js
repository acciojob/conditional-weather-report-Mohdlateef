import React from "react"

let WeatherDsiplay = ({ weather, condition }) => {
    console.log(condition);
    return (
        <div>
            {
                (weather > 20) ? (<div><p>{weather}<spain></spain></p><p>{condition}</p> </div>) : (<div><p>{weather}<spain></spain></p><p>{condition}</p></div>)
            }
        </div>
    )
}

export default WeatherDsiplay;