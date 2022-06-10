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

const Movies = () => {
  const [category, setCategory] = useState("popular");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const unsubscribe = () => {
      getMovies("movie", category)
        .then((res) => {
          setMovies(res);
        })
        .catch((err) => console.log(err));
    };

    return unsubscribe;
  }, [category]);

  useEffect(() => {
    const unsubscribe = () => {
      getMovies("movie", category)
        .then((res) => {
          setMovies(res);
        })
        .catch((err) => console.log(err));
    };
    return unsubscribe;
  }, []);

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
      <MovieList data={movies} />
    </>
  );
};

export default Movies;
