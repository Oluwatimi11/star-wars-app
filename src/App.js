import Movie from "./app/pages/movie/movie.component";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./app/pages/home/home.component";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Movie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
