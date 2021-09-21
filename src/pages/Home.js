import { series } from '../data';
import { SeasonList } from '../components/SeasonList';

export const Home = () => {
  const episodes = series[0].episodes;
  return (
    <>
      <h1>Home page</h1>
      <SeasonList episodes={episodes} />
    </>
  );
};