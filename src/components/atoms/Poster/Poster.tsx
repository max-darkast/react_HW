import * as React from "react";
import "./index.css";
interface Iposter {
  poster: string;
}

export const Poster = ({ poster }: Iposter) => {
  return (
    <div className="poster">
      <img src={poster} alt="poster" />
    </div>
  );
};
