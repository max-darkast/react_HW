import * as React from "react";
import { FilmTitle } from "../../atoms/FilmTitle";
import "./CardTrailer.css";
import { Ifilm, ITrailer } from "../../../types/index";
import { FilmPlot } from "../../atoms/FilmPlot";
import { Trailer } from "../../atoms/Trailer/Trailer";

interface ICardTrailer {
  film: Ifilm;
  props: ITrailer;
}

export const CardTrailer = ({ film, props }: ICardTrailer) => {
  return (
    <div className="cardTrailer">
      <FilmTitle title={film.title} />
      <Trailer trailer={props.trailer} />
      <FilmPlot plot={props.description} />
    </div>
  );
};
