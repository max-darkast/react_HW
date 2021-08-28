import * as React from "react";
import "./filmTitle.css";
interface ITitle {
  title: string;
}

export const FilmTitle = ({ title }: ITitle) => {
  return <h3>{title}</h3>;
};
