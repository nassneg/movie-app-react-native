import React, { useState, useEffect } from "react";
import { Image, Text, View, ScrollView } from "react-native";
import { getMovie } from "../../services/moviesAPI";

const ShowScreen = ({ navigation, route }) => {
  const { id, type } = route.params;
  const [movie, setMovie] = useState({});

  useEffect(() => {
    getMovie(type, id)
      .then((res) => {
        setMovie(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ padding: 30 }}>
        <View style={{ marginBottom: 20 }}>
          <Text
            style={{
              fontWeight: "bold",
              textAlign: "center",
              fontSize: 24,
              marginBottom: 40,
            }}
          >
            {movie.title ? movie.title : movie.name}
          </Text>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
            }}
            style={{ width: 250, alignSelf: "center", height: 300 }}
          />
        </View>
        <View style={{ paddingTop: 5 }}>
          <Text>Popularity: {movie.overview}</Text>
          <View style={{ flexDirection: "row", marginTop: 30 }}>
            <Text>Popularity: {movie.popularity} | </Text>
            <Text>Release Date: {movie.release_date}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ShowScreen;
