import React from "react";
import "./index.css";
interface IRating {
  imdbRating: number;
  imdbVotes: number;
}

export const FilmRating = ({ imdbRating, imdbVotes }: IRating) => {
  return (
    <div className="film_card_ratings">
      <ul className="film_card_rating">
        <li>Rating</li>
        <li>{imdbRating}</li>
      </ul>
      <ul className="film_card_votes">
        <li>{imdbVotes}</li>
        <li>Voted</li>
      </ul>
    </div>
  );
};
