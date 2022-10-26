import { useEffect, useState } from "react";

export const useFetch =(url)=>{
    const [movieList, setMovieList] = useState([]);
    
    useEffect(() => {
      if (movieList.length < 1) {
        const getMovies = async () => {
          const res = await fetch(url);
          const movies = await res.json();
          setMovieList(movies);
        };
        getMovies();
      }

    }, [url]);
    return movieList
}