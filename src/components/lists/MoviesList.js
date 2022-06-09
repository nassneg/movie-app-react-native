import { FlatList } from "native-base";
import MovieCard from "../listItems/MovieCard";

const RecipesList = ({ data }) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <MovieCard
          image={item.image}
          title={item.title}
          navigation={navigation}
          date={item.date}
          url={item.uri}
        />
      )}
      keyExtractor={(item) => item.url}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default RecipesList;
