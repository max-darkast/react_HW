import * as React from "react";
import { FilmTitle } from "../../atoms/FilmTitle";
import "./FiltersCard.css";
import { Ifilm, ITrailer } from "../../../types/index";
import { FilmPlot } from "../../atoms/FilmPlot";
import { Trailer } from "../../atoms/Trailer/Trailer";
import { SortButtons } from "../../atoms/SortButtons";
import { FiltersFields } from "../../atoms/FiltersFields";

interface IFiltersCard {
  title: string;
  subtitle: string;
  countries: string[];
}

export const FiltersCard = ({ title, subtitle, countries }: IFiltersCard) => {
  return (
    <div className="filtersCard">
      <FilmTitle title={title} />
      <SortButtons title={"Rating"} />
      <SortButtons title={"Year"} />
      <FilmTitle title={subtitle} />
      <FiltersFields countries={countries} />
    </div>
  );
};
