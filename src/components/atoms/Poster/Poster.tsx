import * as React from "react";

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
