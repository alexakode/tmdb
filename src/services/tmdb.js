import api from "../lib/axios";
// modular get function which accepts different parameters
const get = (url, params = {}) => {
  api
    .get(url, { params: { ...api.defaults.params, ...params } })
    .then((result) => result.data);
};
// get list of trending movies, default to mediaType movie and week
export const getTrending = (mediaType = "movies", trendingWindow = "week") => {
  return get(`/trending/${mediaType}/${trendingWindow}`);
};
// get popular movies based on iumdb rating, defaults to mediaType movie and one page
export const getPopular = (pageNumber = 1, mediaType = "movies") => {
  return get(`/${mediaType}/popular`, { page: pageNumber });
};
// gets data based on movie id
export const getMovieDetails = (movieId) => {
  return get(`/movie/${movieId}`, {
    append_to_response: "videos,images,credits",
  });
};
// does a multi search, movies, people, etc
export const searchMulti = (searchQuery, pageNumber = 1) => {
  return get("/search/multi", {
    query: searchQuery,
    include_adult: false,
    page: pageNumber,
  });
};
