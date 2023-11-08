import { useSearchParams } from 'react-router-dom';
import { MoviesList } from "components/MoviesList";
import { SearchForm } from "components/SearchForm";
import { useEffect, useState } from 'react';
import { fetchMovies } from 'api';

export default function MoviesPage() {
    const [movies, setMovies] = useState([]);
    const [params, setParams] = useSearchParams();
    const query = params.get('query') ?? '';

    useEffect(() => {
        if (query === '') return;

        const fetchData = async () => {
            try {
                const data = await fetchMovies(query);
                setMovies(data);
            } catch (error) {
                console.error(error.message)
            }
        }

        fetchData();
    }, [query])

    const onSubmit = evt => {
        evt.preventDefault();
        const form = evt.currentTarget;
        setParams({ query: form.elements.input.value });
    };

    return (
        <div>
            <SearchForm onSubmit={onSubmit} value={query} />
            <MoviesList movies={movies} basePath='' />
        </div>
    )
}