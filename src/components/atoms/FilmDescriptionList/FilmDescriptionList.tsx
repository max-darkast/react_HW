import * as React from "react";
import { Ifilm } from "../../../types";

interface IFilmDescriptionList {
  film: Ifilm;
}

export const FilmDescriptionList = (film: Ifilm) => {
  return (
    <ul className="FilmDescriptionListWrapper">
      <li>year</li>
      <li>{film.year}</li>
      <li>released</li>
      <li>{film.released}</li>
      <li>runtime</li>
      <li>{film.runtime}</li>
      <li>boxOffice</li>
      <li>{film.boxOffice}</li>
      <li>genres</li>
      <li>{film.genre}</li>
      <li>country</li>
      <li>{film.country}</li>
      <li>production</li>
      <li>{film.production}</li>
      <li>writers</li>
      <li>{film.writer}</li>
      <li>director</li>
      <li>{film.director}</li>
      <li>actors</li>
      <li>{film.actors}</li>
    </ul>
  );
};
