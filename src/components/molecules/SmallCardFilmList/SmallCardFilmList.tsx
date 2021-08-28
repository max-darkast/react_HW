import * as React from "react";
import "./SmallCardFilmList.css";
import { Ifilm } from "../../../types/index";
import { SmallCardFilm } from "../../atoms/SmallCardFilm";

interface ISmallCardFilmList {
  films: Ifilm[];
}

export const SmallCardFilmList = ({ films }: ISmallCardFilmList) => {
  return (
    <div className="smallCardFilmList">
      {films.map((film) => (
        <SmallCardFilm film={film} />
      ))}
    </div>
  );
};
