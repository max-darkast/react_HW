import React from "react";

interface IRating {
  imdbRating: number;
  imdbVotes: number;
}

export const FilmRating = ({ imdbRating, imdbVotes }: IRating) => {
  return (
    <div>
      <ul>
        <li>Rating</li>
        <li>{imdbRating}</li>
      </ul>
      <ul>
        <li>{imdbVotes}</li>
        <li></li>
      </ul>
    </div>
  );
};
