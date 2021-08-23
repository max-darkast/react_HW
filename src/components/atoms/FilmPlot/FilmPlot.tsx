import * as React from "react";
import "./FilmPlot.css";
interface IFilmPlot {
  plot: string;
}

export const FilmPlot = ({ plot }: IFilmPlot) => {
  return <p className="film__card_plot">{plot}</p>;
};
