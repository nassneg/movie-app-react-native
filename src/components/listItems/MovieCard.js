import {
  Box,
  Button,
  Center,
  Divider,
  Heading,
  Image,
  Text,
  VStack,
  Flex,
} from "native-base";

const MovieCard = (props) => {
  const { image, title, navigation, date, url, popularity } = props;
  return (
    <Box borderWidth={1} borderRadius="md">
      <VStack space={1} divider={<Divider />}>
        <Flex direction="row" align="left" mb="2" mt="2">
          <Box w="100" h="100" mr="2" ml="3">
            <Image alt={title} source={{ uri: image }} size={"2xl"} />
          </Box>

          <Box h="100">
            <Heading size="xs">Title{title}</Heading>
            <Text>Popularity: {popularity}</Text>
            <Text>Release Date: {date}</Text>
            <Button
              w="200"
              onPress={() =>
                navigation.navigate("Show", {
                  title,
                  url,
                })
              }
            >
              More Details
            </Button>
          </Box>
        </Flex>
      </VStack>
    </Box>
  );
};

export default MovieCard;
