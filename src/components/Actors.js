import React from "react";
import { actors } from "../data";

function Actors() {
  const listOfActors = actors.map((actor) => {
    const acted = actor.movies.map((movie) => {
      return <li key={movie}>{movie}</li>
    })
    return(
     <div key={actor.name}>
      <p>{actor.name}</p>
      <ul>
        {acted}
      </ul>
     </div>
    )
  })
  return(
    <div>
      <h1>Actors Page</h1>
      {listOfActors}
    </div>
  )
}

export default Actors;
