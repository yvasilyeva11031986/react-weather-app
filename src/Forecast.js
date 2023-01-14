import React from "react";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div class="weather-forecast" id="forecast">
        <div class="row">
          <div class="col-2">
            <div class="weather-forecast-date">DAY</div>
            <img
              src="https://static.vecteezy.com/system/resources/previews/001/500/512/non_2x/cloudy-weather-icon-free-vector.jpg"
              alt="Weather"
              width="40"
            />
            <div class="weather-forecast-temp"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
