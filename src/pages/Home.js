import { series, movies } from '../data';
import { SeriesList } from '../components/SeriesList';
import { MoviesList } from '../components/MoviesList/MoviesList';

const seriesName = 'Loki';

export const Home = () => {
  const seriesFiltered = series.filter(season => season.name === seriesName);
  return (
    <>
      <h1>Home page</h1>
      <SeriesList series={seriesFiltered} />
      <MoviesList movies={movies} />
    </>
  );
};