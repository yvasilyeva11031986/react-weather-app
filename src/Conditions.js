import React from "react";

export default function Conditions() {
  return (
    <div className="Conditions">
      <div class="row">
        <div class="col-6">
          <div class="d-flex weather-temp">
            <img
              src="https://www.diariohispaniola.com/fotos/1/iconosoleado_6_thumb_620.jpg"
              id="icon"
              alt="Weather"
              class="d-flex"
            />
            <div class="d-flex">
              <strong id="temp"></strong>
              <span class="units">
                <a href="#" id="celsius">
                  C
                </a>{" "}
                |{" "}
                <a href="#" id="farenhite">
                  F
                </a>
              </span>
            </div>
          </div>
        </div>
        <div class="col-6">
          <ul>
            <li>
              Humidity: <span id="humidity"></span>%
            </li>
            <li>
              Wind: <span id="wind"></span> km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
