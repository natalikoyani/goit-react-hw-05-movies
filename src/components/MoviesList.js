import { Link, useLocation } from "react-router-dom";

export const MoviesList = ({ movies, basePath }) => {
    const location = useLocation();
    return (
        <ul>
            {movies.map(movie => (
                <li key={movie.id}>
                    <Link to={`${basePath}${movie.id}`} state={{ from: location }}>{movie.title}</Link>
                </li>
            ))}
        </ul>
    );
};