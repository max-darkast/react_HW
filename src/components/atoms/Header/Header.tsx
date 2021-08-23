import * as React from "react";
import "./Header.css";

interface IHeader {
  title: string;
}

export const Header = ({ title }: IHeader) => {
  return <h2>{title}</h2>;
};
