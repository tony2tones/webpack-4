import React from 'react';

import "./Weather.css";

const Weather = (props) => (
    <div className="wrapper">
        <div className="card">
            <img src='https://www.farmersalmanac.com/wp-content/uploads/2009/08/blueMoon2-600x398.jpg' alt="moon image" width="100%" height="400px"></img>
            <div className="topper">{props.location}</div> 
            <div className="topper2">{props.weatherNiceName}</div>
            <div className="centered">{props.cTemp}°</div>
            <p>{props.cTempMax}° /{props.cTempMin}°</p>
            <p><button>refresh</button></p>
        </div>
    </div>
);

export default Weather;