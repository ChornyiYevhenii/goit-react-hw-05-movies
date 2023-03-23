import { Route, Routes } from "react-router-dom";
import Cast from "./Cast/Cast";
import Navigation from "./Navigation/Navigation";
import Reviews from "./Reviews/Reviews";
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));


export const App = () => {
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
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
        </Suspense>
    </div>
  );
  
};

 