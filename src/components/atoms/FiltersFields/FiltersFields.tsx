import * as React from "react";
import "./FiltersFields.css";

interface IFiltersFields {
  countries: string[];
}
export const FiltersFields = ({ countries }: IFiltersFields) => (
  <div className="filtersFields">
    <label className="filterByTitleAndPlot">
      <h5>Search in title and plot</h5>
      <input type="text"></input>
    </label>
    <label className="filterByYear">
      <h5>Years</h5>
      <p>From</p>
      <input type="number"></input>
      <p>To</p>
      <input type="number"></input>
    </label>
    <label className="filterByCountries">
      <h5>Countries</h5>
      <select name="" id="">
        {countries.map((country) => (
          <option>{country}</option>
        ))}
      </select>
    </label>
    <label className="filterByRating">
      <h5>Rating</h5>
      <p>From</p>
      <input type="number"></input>
      <p>To</p>
      <input type="number"></input>
    </label>
  </div>
);
