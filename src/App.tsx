import React from "react";
import "./App.css";
import { FilmDescriptionList } from "./components/atoms/FilmDescriptionList/FilmDescriptionList";
import { Poster } from "./components/atoms/Poster/Poster";
import { FilmRating } from "./components/atoms/Raiting/FilmRating";

import { BigCardFilm } from "./components/molecules/bigCardFilm";
import { films } from "./mock/index";

function App() {
  const selectFilm = films[0];

  return (
    <div className="App">
      <div className="wrapper">
        <BigCardFilm {...selectFilm} />
        <Poster poster={selectFilm.poster} />
        <FilmDescriptionList {...selectFilm} />
        <FilmRating
          imdbRating={selectFilm.imdbRating}
          imdbVotes={selectFilm.imdbVotes}
        />
      </div>
    </div>
  );
}

export default App;
