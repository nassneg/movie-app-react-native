import { FlatList } from "native-base";
import MovieCard from "../listItems/MovieCard";

const MoviesList = ({ data, navigation, type }) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <MovieCard
          key={item.id}
          image={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
          title={item.title}
          name={item.name}
          navigation={navigation}
          date={item.release_date}
          popularity={item.popularity}
          id={item.id}
          type={type}
        />
      )}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default MoviesList;
