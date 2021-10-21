import { movies, series } from '../data';
import { io } from 'socket.io-client';

export const getMovie = (movieName) => {
  const movie = movies.find(movie => movie.name === movieName);
  return movie;
};

export const getEpisode = (seriesName, seasonNumber, episodeNumber) => {
  console.log('series', series);
  const season = series.find(s => s.name === seriesName && s.season === Number(seasonNumber));
  const episode = season.episodes[episodeNumber - 1];
  return episode;
};

export const getSeasons = (seriesName) => {
  return series.filter(s => s.name === seriesName);
};

export const socketConnect = () => {
  return io('http://localhost:5000');
};