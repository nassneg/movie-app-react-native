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
import { useNavigation } from "@react-navigation/native";

const MovieCard = ({ image, title, date, name, popularity, id, type }) => {
  const navigation = useNavigation();
  return (
    <Box borderBottomWidth={1}>
      <VStack space={1} divider={<Divider />}>
        <Flex direction="row" align="left" mb="2" mt="2">
          <Box w="100" h="100" mr="2" ml="3">
            <Image
              alt={title ? title : name}
              source={{ uri: image }}
              w="100"
              h="100"
            />
          </Box>

          <Box h="100">
            <Heading size="xs">
              {title}
              {name}
            </Heading>
            <Text>Popularity: {popularity}</Text>
            <Text>Release Date: {date}</Text>
            <Button
              w="200"
              onPress={() =>
                navigation.navigate("Show", {
                  title: title,
                  name: name,
                  id: id,
                  type: type,
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
