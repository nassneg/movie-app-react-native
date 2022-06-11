import React, { useState, useEffect } from "react";
import {
  Select,
  Input,
  Icon,
  Text,
  CheckIcon,
  Center,
  Box,
  Flex,
  Button,
} from "native-base";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

import MovieList from "../lists/MoviesList";
import { movieSearch } from "../../services/moviesAPI";
import Loading from "../layout/Loading";

const Search = () => {
  const [category, setCategory] = useState("multi");
  const [title, setTitle] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const onPressSearch = (category, query) => {
    setIsLoading(true);
    movieSearch(category, query)
      .then((res) => {
        setMovies(res);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Center>
      <Box w="4/5" maxW="300" mt="5" mb="6">
        <Text>Search Movie/TV Show</Text>
        <Input
          placeholder="i.e. James Bond, CSI"
          width="100%"
          borderRadius="4"
          py="3"
          px="1"
          fontSize="14"
          mt="3"
          onChangeText={(value) => {
            setTitle(value);
          }}
          InputLeftElement={
            <Icon
              m="2"
              ml="3"
              size="6"
              color="gray.400"
              as={<MaterialIcons name="search" />}
            />
          }
        />
        <Text>Choose Search Type</Text>
        <Flex direction="row">
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
            <Select.Item label="Multi" value="multi" />
            <Select.Item label="Movie" value="movie" />
            <Select.Item label="TV" value="tv" />
          </Select>

          <Button
            onPress={() => onPressSearch(category, title)}
            w="100"
            ml="4"
            leftIcon={<Icon as={Ionicons} name="search" size="sm" />}
          >
            Search
          </Button>
        </Flex>
        <Text>Please select a search type</Text>
      </Box>
      <Center>{isLoading ? <Loading /> : <MovieList data={movies} />}</Center>
    </Center>
  );
};

export default Search;
