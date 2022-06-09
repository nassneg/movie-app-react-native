import { Text, View } from "react-native";
import React from "react";
import {
  Select,
  Box,
  CheckIcon,
  Center,
  NativeBaseProvider,
} from "native-base";
import MovieList from "../lists/MoviesList";

const TV = () => {
  let [category, setCategory] = React.useState("");
  console.log(category);
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
      <MovieList />
    </>
  );
};

export default TV;
