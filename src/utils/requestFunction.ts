import axios from "axios";

const key = 'fbd8df04dbc550f710a5b6500fd0dbff';

//movie
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
};

export const requestTrailerMovie = (id: number) => {
  return axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}&language=en-US`)
}

//TV
export const popularTVRequest = (count: number) => {
  return axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=en-US&page=${count}`)
};

export const airingTodayRequest = (count: number) => {
  return axios.get(`https://api.themoviedb.org/3/tv/airing_today?api_key=${key}&language=en-US&page=${count}`)
};

export const tvOnTheAirRequest = (count: number) => {
  return axios.get(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${key}&language=en-US&page=${count}`);
};

export const tvTopRatedRequest = (count: number) => {
  return axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${key}&language=en-US&page=${count}`);
}

export const requestTrailerTV = (id: number) => {
  return axios.get(`https://api.themoviedb.org/3/tv/${id}/videos?api_key=${key}&language=en-US`);
}
