import { useEffect, useState } from "react";

export const useFetch =(url)=>{
    const [movieList, setMovieList] = useState([]);
  const [showLoading, setShowLoading] = useState(false)
    
    useEffect(() => {
      if (movieList.length < 1) {
        setShowLoading(false)
        const getMovies = async () => {
          const res = await fetch(url);
          const movies = await res.json();
          setMovieList(movies);
          setShowLoading(true)
        };
        getMovies();
      }

    }, [url, movieList.length]);
    return {movieList, showLoading}
}