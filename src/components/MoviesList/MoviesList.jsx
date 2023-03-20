import { Link } from "react-router-dom";

export default function MoviesList({ movies }) {
    return (
        <ul>
            {movies.map(({ id, title }) => {
                return (
                    <li key={id}>
                        <Link to={`/movies/${id}`}>
                            <p>{title}</p>
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}
