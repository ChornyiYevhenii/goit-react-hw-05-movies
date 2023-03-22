import Home from "pages/Home/Home"
import MovieDetails from "pages/MovieDetails/MovieDetails";
import Movies from "pages/Movies/Movies";
import { Route, Routes } from "react-router-dom";
import Cast from "./Cast/Cast";
import Navigation from "./Navigation/Navigation";
import Reviews from "./Reviews/Reviews";


export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
     </Routes>
    </div>
  );
};

 