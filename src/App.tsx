import React, { useState } from "react";
import "./App.css";
import { Header } from "./components/atoms/Header";
import { BigCardFilm } from "./components/molecules/bigCardFilm";
import { CardTrailer } from "./components/molecules/CardTrailer";
import { FiltersCard } from "./components/molecules/FiltersCard";
import { SmallCardFilmList } from "./components/molecules/SmallCardFilmList";
import { films, trailers } from "./mock/index";

function App() {
  const [filteredFilms, setFilms] = useState(films);
  const [searchValue, setSearchValue] = useState("");

  const onChangeHandler = (text: string) => {
    console.log({ text });
    setSearchValue(text);
  };

  const onClick = () => {
    const newFilms = films.filter(({ title }) =>
      title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    );
    setFilms(newFilms);
    console.log("onClick");
  };

  const selectFilm = films[1];
  const selectTrailer = trailers[0];
  return (
    <div className="App">
      <div className="wrapper">
        <div className="nav">nav </div>
        <Header
          title="Movie"
          value={searchValue}
          onChangeHandler={onChangeHandler}
          onClick={onClick}
        />
        <main className="main">
          <FiltersCard
            title={"Sort by:"}
            subtitle={"Filter:"}
            countries={Array.from(
              new Set(films.map((film) => film.country.split(", ")).flat())
            )}
          />
          <BigCardFilm film={selectFilm} />
          <CardTrailer film={selectFilm} props={selectTrailer} />
          <SmallCardFilmList films={filteredFilms} />
        </main>
      </div>

      <div className="rating__star">rating__star</div>
      <div className="filters">filters</div>
    </div>
  );
}

export default App;
