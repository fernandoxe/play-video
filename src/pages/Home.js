import { series } from '../data';
import { SeasonList } from '../components/SeasonList';
import { SeriesList } from '../components/SeriesList';

const seriesName = 'Loki';

export const Home = () => {
  const episodes = series[0].episodes;
  const seriesFiltered = series.filter(season => season.name === seriesName);
  return (
    <>
      <h1>Home page</h1>
      <SeriesList series={seriesFiltered} />
      <SeasonList episodes={episodes} />
    </>
  );
};