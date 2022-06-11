import axios from "axios";
import { APP_KEY, BASE_URL } from "../config/api_config";

export const getMovies = async (type, category) => {
  const moviesArr = axios
    .get(`${BASE_URL}${type}/${category}?api_key=${APP_KEY}`)
    .then((response) => response.data.results)
    .catch((error) => {
      throw error;
    });

  return moviesArr;
};

export const getMovie = async (type, movieId) => {
  const movie = axios
    .get(`${BASE_URL}${type}/${movieId}?api_key=${APP_KEY}`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });

  return movie;
};
