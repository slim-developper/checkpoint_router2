import React, { useState } from "react";
import {Switch,Route,Link} from 'react-router-dom'
import { moviesData } from "./components/MoviesData";
import MovieList from "./components/MovieList/MovieList";
import AddMovie from "./components/AddMovie/AddMovie";
import Filter from "./components/Filter/Filter";
import MoviesDetails from './components/MoviesDetails/MoviesDetails';
import "./App.css";

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [titleSearch, setTitleSearch] = useState("");
  const [rateSearch, setRateSearch] = useState(0);
  const handleAdd = (newMovie) => {
    if (
      newMovie.title!=="" &&
      newMovie.description!=="" &&
      newMovie.date!=="" &&
      newMovie.posterUrl!==""&&
      newMovie.rate!==0
    ) {
      setMovies([...movies, newMovie]);
    }else{
      alert('All fields are mandatory!')
    }
   
  };
  return (
    
      <div>
      <Link to="/Home"><h1 id='appTitle'>Checkpoint React router</h1></Link>
      
      <Switch>
      <Route exact path="/Home">
      <div style={{ display: "flex", justifyContent: "space-around", width: "100%" , background:'black'}}>
      <AddMovie handleAdd={handleAdd} />
        <Filter
          rate={rateSearch}
          setRateSearch={setRateSearch}
          setTitleSearch={setTitleSearch}
        />
      </div>
      
      
      <MovieList
        rateSearch={rateSearch}
        titleSearch={titleSearch}
        movies={movies}
      />
    </Route>

    <Route path={`/Home/:title`} component={MoviesDetails}/>
   

    </Switch>
      </div>
    
  );
}

export default App;
