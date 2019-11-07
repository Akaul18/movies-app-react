const API_KEY = '3fb2aeae7fbc3241b4e3d5dfb3624955';

const BASE_URL_MOVIE = 'https://api.themoviedb.org/3/movie/';
const BASE_URL_SEARCH = 'https://api.themoviedb.org/3/search/';
const BASE_URL_TV = 'https://api.themoviedb.org/3/tv/';


const api_query = '?api_key=';
const query = '&query=';

// movie query strings
const MOVIE_NOW_PLAYING = `${BASE_URL_MOVIE}now_playing${api_query}${API_KEY}`;
const MOVIE_POPULAR = `${BASE_URL_MOVIE}popular${api_query}${API_KEY}`;
const MOVIE_TOP_RATED = `${BASE_URL_MOVIE}top_rated${api_query}${API_KEY}`;
const MOVIE_UPCOMING = `${BASE_URL_MOVIE}upcoming${api_query}${API_KEY}`;

// tv query strings
const TV_AIRING_TODAY = `${BASE_URL_TV}airing_today${api_query}${API_KEY}`;
const TV_ON_THE_AIR = `${BASE_URL_TV}on_the_air${api_query}${API_KEY}`;
const TV_POPULAR = `${BASE_URL_TV}popular${api_query}${API_KEY}`;
const TV_TOP_RATED = `${BASE_URL_TV}top_rated${api_query}${API_KEY}`;

// search query strings
const SEARCH_MOVIE = `${BASE_URL_SEARCH}movie${api_query}${API_KEY}${query}`;
const SEARCH_MULTI = `${BASE_URL_SEARCH}multi${api_query}${API_KEY}${query}`;
const SEARCH_TV = `${BASE_URL_SEARCH}tv${api_query}${API_KEY}${query}`;

export default {MOVIE_NOW_PLAYING, MOVIE_POPULAR, MOVIE_TOP_RATED, MOVIE_UPCOMING, TV_AIRING_TODAY, TV_ON_THE_AIR, TV_POPULAR, TV_TOP_RATED, SEARCH_MOVIE, SEARCH_MULTI, SEARCH_TV};