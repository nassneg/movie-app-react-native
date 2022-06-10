import { FlatList } from "native-base";
import MovieCard from "../listItems/MovieCard";

const MoviesList = ({ data, navigation }) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <MovieCard
          key={item.id}
          image={item.img}
          title={item.title}
          name={item.name}
          navigation={navigation}
          date={item.release_date}
          popularity={item.popularity}
        />
      )}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default MoviesList;
