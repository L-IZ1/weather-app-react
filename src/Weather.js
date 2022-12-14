import React from "react";
import "./Weather.css";

export default function Weather() {
    return (
        <div className="LiveWeather" > 
        <div class="live-weather" > 
        <div class="row" > 
        <div class="col-md-7 live-city" > 
        <ul> 
        <li> 
        <span class="searched-place" id="searched-city" ></span> 
        </li> 
        <li class="date" id="live-date" >
        </li> 
        </ul> 
        <div class="d-flex weather-temperature" > 
        <img src="/" alt="/" id="icon" class="float-left" /> 
        <div class="float-left" > 
        <strong class="temp-number" id="live-temperature" >
        </strong> 
        <span class="units" > <a href="/" class="active" id="celsius" > °C| </a>
         <a href="/" id="fahrenheit" > °F </a> </span> 
         </div>
          </div> 
          <ul> 
          <li class="weather-description-live"
        id="weather-description"
        ></li>
         </ul>
          </div> 
          </div> 
          </div> 
          </div>);
}