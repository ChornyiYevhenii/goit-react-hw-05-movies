import MoviesList from "components/MoviesList/MoviesList";
import { useEffect, useState } from "react";
import { getPopularMovies } from 'services/movieApi';

const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getPopularMovies().then(setMovies);
    }, []);

    return <MoviesList movies={movies} />;
};

export default Home;


    
