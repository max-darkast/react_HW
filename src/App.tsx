import React from "react";
import "./App.css";
import { Header } from "./components/atoms/Header";
import { BigCardFilm } from "./components/molecules/bigCardFilm";
import { films } from "./mock/index";

function App() {
  const selectFilm = films[0];

  return (
    <div className="App">
      <div className="wrapper">
        <div className="nav">nav </div>
        <Header title="Movie" />
        <div className="main">
          <BigCardFilm film={selectFilm} />
          <div className="allFilms">allFilms</div>
          <div className="rating__star">rating__star</div>
          <div className="filters">filters</div>
        </div>
      </div>
    </div>
  );
}

export default App;
