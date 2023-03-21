import MoviesList from "components/MoviesList/MoviesList";
import SearchForm from "components/SerchForm/SerchForm";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getMoviesByQuery } from "services/movieApi";


export default function Movies() {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query');

    useEffect(() => {
        if (!query) {
            return;
        }
        getMoviesByQuery(query).then(setMovies);
    }, [query]);

    const handleSabmit = query => {
        setSearchParams({ query });
    }

    return (
        <>
            <SearchForm onSubmit={handleSabmit} />
            <MoviesList movies={movies} />
        </>
    );
}