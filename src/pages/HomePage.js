import { useState, useEffect } from 'react';
import { fetchTrending } from 'api';
import { MoviesList } from 'components/MoviesList';

export default function HomePage() {
    const [trendingMovies, setTrendingMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchTrending();
                setTrendingMovies(data);
            } catch (error) {
                console.error(error.message);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2>Trending today</h2>
            <MoviesList movies={trendingMovies} basePath="movies/" />
        </div>
    )
}