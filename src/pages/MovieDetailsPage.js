import { useEffect, useState, Suspense } from 'react';
import { useParams, Outlet, Link, useLocation } from 'react-router-dom';
import { fetchMovieById } from 'api';
import { nanoid } from 'nanoid';

export default function MovieDetails() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState({});
    const location = useLocation();
    const backLinkHref = location.state?.from ?? '/';

    useEffect(() => {
        if (!movieId) return;

        const fetchData = async () => {
            try {
                const data = await fetchMovieById(movieId);
                setMovie(data);
            } catch (error) {
                console.error(error.message);
            }
        }

        fetchData();
    }, [movieId]);

    const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
    const releaseYear = movie.release_date ? `(${movie.release_date.substring(0, 4)})` : "";
    const genres = () => {
        return movie.genres
            ? movie.genres.map(genre => (<li key={nanoid()}>{genre.name}</li>))
            : 'No genres';
    }
    const rating = movie.vote_average ? movie.vote_average.toFixed(1) : 'no rating';

    return (
        <main>
            <Link to={backLinkHref}>Back</Link>
            <div>
                <img src={
                    movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                        : defaultImg
                }
                    width={250}
                    alt="poster"
                />
                <h2>{movie.title} {releaseYear}</h2>
                <p>Rating: {rating}</p>
                <h3>Overview</h3>
                <p>{movie.overview}</p>
                <h3>Genres</h3>
                <p>{genres()}</p>
            </div >

            <div>
                <p>Additional information</p>
                <ul>
                    <li><Link to="cast">Cast</Link></li>
                    <li><Link to="reviews">Reviews</Link></li>
                </ul>

                <Suspense fallback={<div>Loading subpage...</div>}>
                    <Outlet />
                </Suspense>
            </div>
        </main>
    )
}