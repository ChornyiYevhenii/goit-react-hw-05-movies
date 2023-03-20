import Home from "pages/Home/Home"
import MovieDetails from "pages/MovieDetails/MovieDetails";
import Movies from "pages/Movies/Movies";
import { Route, Routes } from "react-router-dom";
import Navigation from "./Navigation/Navigation";


export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
        </Route>
     </Routes>
    </div>
  );
};

 