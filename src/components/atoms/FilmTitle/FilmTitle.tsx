import * as React from "react";

interface ITitle {
  title: string;
}

export const FilmTitle = ({ title }: ITitle) => {
  return <h3>{title}</h3>;
};
