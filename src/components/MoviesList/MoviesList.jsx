import { Link, useLocation } from "react-router-dom";

export default function MoviesList({ movies }) {
    const location = useLocation();

    return (
        <ul>
            {movies.map(({ id, title }) => {
                return (
                    <li key={id}>
                        <Link to={`/movies/${id}`} state={{from: location}}>
                            <p>{title}</p>
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}
