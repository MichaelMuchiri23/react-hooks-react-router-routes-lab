import React from "react";
import { movies } from "../data";

function Movies() {
  const listOfMovies = movies.map((movie) => {
    const genres = movie.genres.map((genre) => {
      return <li key={genre}>{genre}</li>
    })
    return(
      <div key={movie.title}>
        <p>Title: {movie.title}</p>
        <p>Time: {movie.time}</p>
        <ul>
         {genres}
        </ul>
      </div>
    )
  })

  return(
    <div>
      <h1>Movies Page</h1>
      {listOfMovies}
    </div>
  )
}

export default Movies;
