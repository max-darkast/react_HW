import * as React from "react";
import { FilmTitle } from "../../atoms/FilmTitle";

interface IBigCardFilm {
  title: string;
}

export const BigCardFilm = ({ title }: IBigCardFilm) => {
  return (
    <div className="bigCardWrapper">
      <FilmTitle title={title} />
    </div>
  );
};
