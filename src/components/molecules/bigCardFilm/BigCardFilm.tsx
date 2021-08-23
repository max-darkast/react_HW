import * as React from "react";
import { FilmDescriptionList } from "../../atoms/FilmDescriptionList/FilmDescriptionList";
import { FilmTitle } from "../../atoms/FilmTitle";
import "./index.css";
import { Ifilm } from "./../../../types/index";
import { Poster } from "./../../atoms/Poster/Poster";
import { FilmRating } from "../../atoms/Raiting";
import { FilmPlot } from "../../atoms/FilmPlot";

interface IBigCardFilm {
  film: Ifilm;
}

export const BigCardFilm = ({ film }: IBigCardFilm) => {
  return (
    <div className="bigCardWrapper">
      <FilmTitle title={film.title} />
      <FilmDescriptionList film={film} />
      <Poster poster={film.poster} />
      <FilmRating imdbRating={film.imdbRating} imdbVotes={film.imdbVotes} />
      <FilmPlot plot={film.plot} />
    </div>
  );
};
