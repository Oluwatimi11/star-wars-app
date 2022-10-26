import { MovieBoard, MovieContainer, MovieContent, MovieParagraph, MovieSubTitle, MovieTable, MovieTitle } from "./movie.styles";
import BasicTable from "../../components/molecules/basic-table/basictable.components";
import { useFetch } from "../../../useFetch";
import { useParams } from 'react-router-dom';
import BackArrow from "../../components/atoms/back-arrow/back-arrow.component";

function Movie({handleReturn}) {
  
  let { id } = useParams();
  const movieList = useFetch(`https://swapi.dev/api/films/${id}`) 
  return (
    <MovieContainer>
            <BackArrow handleReturn={handleReturn} />
      <MovieBoard id="board">
        <MovieContent id="content">
          <MovieTitle id="title">Episode {movieList.episode_id}</MovieTitle>
          <MovieSubTitle id="subtitle">{movieList.title}</MovieSubTitle>
          <br />
          <MovieParagraph>
           {movieList.opening_crawl}
          </MovieParagraph>
        </MovieContent>
      </MovieBoard>
      <MovieTable>
        <BasicTable movieList={movieList.characters} />
      </MovieTable>
    </MovieContainer>
  );
}

export default Movie;
