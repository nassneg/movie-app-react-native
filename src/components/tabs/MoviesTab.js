import { Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import {
  Select,
  Box,
  CheckIcon,
  Center,
  NativeBaseProvider,
} from "native-base";
import MovieList from "../lists/MoviesList";
import { getMovies } from "../../services/moviesAPI";
import Loading from "../layout/Loading";

const Movies = () => {
  const [category, setCategory] = useState("popular");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    unsubscribe();
  }, [category]);

  useEffect(() => {
    unsubscribe();
  }, []);

  const unsubscribe = () => {
    setIsLoading(true);
    getMovies("movie", category)
      .then((res) => {
        setMovies(res);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Center>
        <Box w="3/5" maxW="300" mt="5" mb="6">
          <Select
            selectedValue={category}
            minWidth="200"
            accessibilityLabel="Choose Movies Category"
            placeholder="Choose Movies Category"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="5" />,
            }}
            mt={1}
            onValueChange={(itemValue) => {
              setCategory(itemValue);
            }}
          >
            <Select.Item label="Now Playing" value="now_playing" />
            <Select.Item label="Popular" value="popular" />
            <Select.Item label="Top Rated" value="top_rated" />
            <Select.Item label="Upcoming" value="upcoming" />
          </Select>
        </Box>
      </Center>
      {isLoading ? <Loading /> : <MovieList data={movies} type="movie" />}
    </>
  );
};

export default Movies;
