import axios from "axios";
import { APP_KEY, BASE_URL } from "../config/api_config";

export const getMovies = async (type, category) => {
  const moviesArr = axios
    .get(`https://api.themoviedb.org/3/${type}/${category}?api_key=${APP_KEY}`)
    .then((response) => {
      const movies = response.data.results;

      return movies;
    })
    .catch((error) => {
      throw error;
    });

  return moviesArr;
};
