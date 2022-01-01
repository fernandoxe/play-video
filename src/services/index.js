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
  return io('https://play-video-server.herokuapp.com/');
};

export const secondsToTime = (seconds) => {
  return new Date(seconds * 1000).toISOString().slice(11, -5);
};