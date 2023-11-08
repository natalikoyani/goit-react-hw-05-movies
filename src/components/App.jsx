import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import NotFoundPage from 'pages/NotFoundPage';
import HomePage from 'pages/HomePage';
import MovieDetailsPage from 'pages/MovieDetailsPage';
import CastPage from 'pages/CastPage';
import ReviewsPage from 'pages/ReviewsPage';
import MoviesPage from 'pages/MoviesPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<CastPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
