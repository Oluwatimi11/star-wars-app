import React, { useState } from "react";
import { useFetch } from "../../../../useFetch";
import Dropdown from "../../atoms/dropdown/dropdown.component";
import {} from "./film.styles";
import "/Users/thebluehood/Documents/GitHub/star-wars-app/star-wars-app/src/App.css";

function Film() {
  const SERVICE_URI = "https://swapi.dev/api/films";

  // const [movieList, setMovieList] = useState([]);
  const [selected, setSelected] = useState("Choose a Star War Movie");

const movieList = useFetch(SERVICE_URI) 

  console.log('26',movieList );

  return (
    <div>
      <Dropdown
       movieList={movieList.results}
        selected={(selected)}
        setSelected={(setSelected)}
      />
    </div>
  );
}

export default Film;
