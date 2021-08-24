import * as React from "react";
//import { ITrailer } from "../../../types/index";
import "./Trailer.css";

interface ITrailer {
  trailer: string;
}
export const Trailer = ({ trailer }: ITrailer) => {
  return (
    <iframe
      className="film_trailer"
      src={trailer}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    ></iframe>
  );
};
