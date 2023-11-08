import { Link } from "react-router-dom";

export const MoviesList = ({ movies, basePath }) => {
    return (
        <ul>
            {movies.map(movie => (
                <li key={movie.id}>
                    <Link to={`${basePath}${movie.id}`}>{movie.title}</Link>
                </li>
            ))}
        </ul>
    );
};