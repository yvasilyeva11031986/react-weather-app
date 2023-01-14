import React from "react";

export default function Overview() {
  return (
    <div className="Overview">
      <div class="overview">
        <h1 id="city">Kyiv</h1>
        <ul>
          <li>
            Last updated: <span id="date"></span>
          </li>
          <li>
            Now: <span id="description"></span>
          </li>
        </ul>
      </div>
    </div>
  );
}
