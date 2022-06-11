import { Center, Text, Spinner, Flex } from "native-base";

const Loading = () => {
  return (
    <Center>
      <Flex direction="row">
        <Spinner accessibilityLabel="Loading posts" mr="2" />
        <Text>Loading results</Text>
      </Flex>
    </Center>
  );
};

export default Loading;
