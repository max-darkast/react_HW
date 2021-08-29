import * as React from "react";
import "./SortButtons.css";

interface ISortButtons {
  title: string;
}
export const SortButtons = ({ title }: ISortButtons) => {
  return <button className="sortButton">{title}</button>;
};
