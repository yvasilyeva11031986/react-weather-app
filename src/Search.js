import React from "react";

export default function Search() {
  return (
    <div className="Serach">
      <form id="search-form" class="mb-3">
        <div class="row">
          <div class="col-9">
            <input
              type="search"
              placeholder="Type a city..."
              class="form-control"
              id="city-input"
              autocomplete="offs"
            />
          </div>
          <div class="col-3">
            <input type="submit" value="Search" class="btn btn-primary" />
          </div>
        </div>
      </form>
    </div>
  );
}
