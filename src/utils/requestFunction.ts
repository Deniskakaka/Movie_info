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
};

export const requestDetailsMovie = (id: number) => {
  return axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`);
};

export const requestCastMovie = (id: number) => {
  return axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}&language=en-US`);
};

export const requestLinksMovie = (id: number) => {
  return axios.get(`https://api.themoviedb.org/3/movie/${id}/external_ids?api_key=${key}`)
};

export const requestImagesMovie = (id: number) => {
  return axios.get(`https://api.themoviedb.org/3/movie/${id}/images?api_key=${key}`);
};

export const requestRecommendateMovies = (id: number, count: number) => {
  return axios.get(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${key}&language=en-US&page=${count}`);
};

export const requestGenresMovie = () => {
  return axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&language=en-US`);
};

export const requestCertificationsMovie = () => {
  return axios.get(`https://api.themoviedb.org/3/certification/movie/list?api_key=${key}`);
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
};

export const requestTrailerTV = (id: number) => {
  return axios.get(`https://api.themoviedb.org/3/tv/${id}/videos?api_key=${key}&language=en-US`);
};

export const requestDetailsTV = (id: number) => {
  return axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${key}&language=en-US`);
};

export const requestCastTV = (id: number) => {
  return axios.get(`https://api.themoviedb.org/3/tv/${id}/aggregate_credits?api_key=${key}&language=en-US`)
};

export const requestLinksTV = (id: number) => {
  return axios.get(`https://api.themoviedb.org/3/tv/${id}/external_ids?api_key=${key}&language=en-US`)
};

export const requestImageTV = (id: number) => {
  return axios.get(`https://api.themoviedb.org/3/tv/${id}/images?api_key=${key}`);
};

export const requestRecommendateTV = (id: number, count: number) => {
  return axios.get(`https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=${key}&language=en-US&page=${count}`);
};

export const requestgenresTV = () => {
  return axios.get(`https://api.themoviedb.org/3/genre/tv/list?api_key=${key}&language=en-US`);
};

export const requestCertificationsTV = () => {
  return axios.get(`https://api.themoviedb.org/3/certification/tv/list?api_key=${key}`);
};

//request language
export const requestListLanguages = () => {
  return axios.get(`https://api.themoviedb.org/3/configuration/languages?api_key=${key}`);
};
