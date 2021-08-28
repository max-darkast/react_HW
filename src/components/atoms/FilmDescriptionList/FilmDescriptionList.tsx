import * as React from "react";
import { Ifilm } from "../../../types";
import "./index.css";
interface IFilmDescriptionList {
  film: Ifilm;
}

export const FilmDescriptionList = ({ film }: IFilmDescriptionList) => {
  return (
    <ul className="filmDescriptionListWrapper">
      <li>Year</li>
      <li>{film.year}</li>
      <li>Released</li>
      <li>{film.released}</li>
      <li>Runtime</li>
      <li>{film.runtime}</li>
      <li>BoxOffice</li>
      <li>{film.boxOffice}</li>
      <li>Genres</li>
      <li>{film.genre.join(", ")}</li>
      <li>Country</li>
      <li>{film.country}</li>
      <li>Production</li>
      <li>{film.production}</li>
      <li>Writers</li>
      <li>{film.writer}</li>
      <li>Director</li>
      <li>{film.director}</li>
      <li>Actors</li>
      <li>{film.actors.join(", ")}</li>
    </ul>
  );
};
