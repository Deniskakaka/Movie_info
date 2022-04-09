import axios from "axios";

const key = 'fbd8df04dbc550f710a5b6500fd0dbff';

export const popularMovieRequest = (count: number) => {
  return axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=${count}`)
};

export const nowPlayMovieRequest = (count: number) => {
  return axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=${count}`);
};

export const upcomingMovieRequest = (count: number) => {
  return axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=${count}`);
};

export const topRatedMovieRequest = (count: number) => {
  return axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=${count}`);
}