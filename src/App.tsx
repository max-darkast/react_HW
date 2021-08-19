import React from 'react';
import './App.css';
import { FilmTitle } from './components/atoms/FilmTitle';




function App() {
  return (
    <div className="App">
      <div className="wrapper">
       <FilmTitle title={"title"}/>
      </div>
    </div>
  );
}

export default App;
