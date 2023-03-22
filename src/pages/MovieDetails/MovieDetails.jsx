import { Suspense, useEffect, useState } from "react";
import { useParams, useLocation, useNavigate, Outlet, NavLink } from "react-router-dom";
import { getMovieDetails } from "services/movieApi";

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';

export default function MovieDetails() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        getMovieDetails(id).then(setMovie);
    }, [id]);

    const handleGoBack = () => {
        navigate(location?.state?.from ?? '/');
    }
    if (!movie) {
    return <p>Loading...</p>
}
    return (
        <>
            <button onClick={handleGoBack}>Go back</button>
            <p>{movie.title}</p>
            <img src={`${BASE_IMG_URL}${movie.poster_path}`} alt={movie.title} />

            <div>
                <NavLink to={'cast'} state={{from: location?.state?.from ?? '/'}}>Cast</NavLink>
                <NavLink to={'reviews'} state={{from: location?.state?.from ?? '/'}}>Reviews</NavLink>
            </div>
            <Suspense fallback={<p>Loading...</p>}>
                <Outlet />
            </Suspense>
    </>
    );
}