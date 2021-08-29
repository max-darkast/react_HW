import * as React from "react";
import { IconFilter } from "../../Assets/icons";
import "./Header.css";

interface IHeader {
  title: string;
  value: string;
  onChangeHandler: (text: string) => void;
  onClick: () => void;
}

export const Header = ({ title, value, onChangeHandler, onClick }: IHeader) => {
  return (
    <header>
      <h2>{title}</h2>

      <input
        type="search"
        value={value}
        onChange={(e) => onChangeHandler(e.target.value)}
      />
      <button onClick={onClick}>Search</button>
      <button>
        <IconFilter className={"filterIcon"} />
      </button>
    </header>
  );
};
