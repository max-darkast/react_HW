import React from "react";
import "./App.css";
import { Header } from "./components/atoms/Header";
import { BigCardFilm } from "./components/molecules/bigCardFilm";
import { CardTrailer } from "./components/molecules/CardTrailer";
import { SmallCardFilmList } from "./components/molecules/SmallCardFilmList";
import { films, trailers } from "./mock/index";

function App() {
  const selectFilm = films[1];
  const selectTrailer = trailers[0];
  return (
    <div className="App">
      <div className="wrapper">
        <div className="nav">nav </div>
        <Header title="Movie" />
        <main className="main">
          <BigCardFilm film={selectFilm} />
          <CardTrailer film={selectFilm} props={selectTrailer} />
          <SmallCardFilmList films={films} />
        </main>
      </div>

      <div className="rating__star">rating__star</div>
      <div className="filters">filters</div>
    </div>
  );
}

export default App;
