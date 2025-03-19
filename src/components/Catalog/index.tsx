import { Text, View, StyleSheet } from "react-native";

import movies from '../../../public/videos.json';

export function Catalog() {
  return (
    <View style={styles.container}>
      {movies.map((movie) => (
        <Text key={movie.id}>{movie.title}</Text>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    boxShadow: '0px 0px 2px 0px rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 24,
    paddingVertical: 16,
    flex: 1,
    gap: 16,
  },
})
