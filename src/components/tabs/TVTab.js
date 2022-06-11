import React, { useState, useEffect } from "react";
import { Select, Box, CheckIcon, Center } from "native-base";
import { getMovies } from "../../services/moviesAPI";
import MovieList from "../lists/MoviesList";
import Loading from "../layout/Loading";

const TV = () => {
  const [category, setCategory] = React.useState("popular");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchMovies();
  }, [category]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = () => {
    setIsLoading(true);
    getMovies("tv", category)
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
            onValueChange={(itemValue) => setCategory(itemValue)}
          >
            <Select.Item label="Airing Today" value="airing_today" />
            <Select.Item label="On The Air" value="on_the_air" />
            <Select.Item label="Popular" value="popular" />
            <Select.Item label="Top Rated" value="top_rated" />
          </Select>
        </Box>
      </Center>
      {isLoading ? <Loading /> : <MovieList data={movies} type="tv" />}
    </>
  );
};

export default TV;
