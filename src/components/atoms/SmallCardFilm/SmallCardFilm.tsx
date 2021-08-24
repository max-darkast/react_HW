import * as React from "react";
import "./SmallCardFilm.css";
import { Ifilm } from "../../../types/index";

interface ISmallCardFilm {
  film: Ifilm;
}

export const SmallCardFilm = ({ film }: ISmallCardFilm) => {
  return (
    <div className="smallCardFilm">
      <img src={film.poster} alt="poster" />
      <h4>{film.title}</h4>
      <p className="year">{film.year}</p>
      <p className="plot">{film.plot}</p>
    </div>
  );
};
