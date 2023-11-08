import React from "react";
import { directors } from "../data";

function Directors() {
  const listOfDirectors = directors.map((director) => {
    const produced = director.movies.map((movie) => {
      return <li key={movie}>{movie}</li>
    })
    return(
     <div key={director.name}>
      <p>{director.name}</p>
      <ul>
       {produced}
      </ul>
     </div>
    )
  })

  return(
    <div>
      <h1>Directors Page</h1>
      {listOfDirectors}
    </div>
  )
}

export default Directors;
