import { StyleSheet, FlatList } from "react-native";

import movies from '../../../public/videos.json';
import { MovieCard } from "../MovieCard";

export function Catalog() {
  return (
    <FlatList
      style={styles.container}
      numColumns={2}
      data={movies}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item, index }) => (
        <MovieCard 
          style={{ marginRight: index % 2 === 0 ? 16 : 0 }}
          key={item.id}  
          title={item.title}
          description={item.description}
          poster={item.poster}
          year={item.year}
          rating={item.rating}   
        />
      )}
      contentContainerStyle={{ paddingBottom: 160, gap: 32 }}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    boxShadow: '0px 0px 2px 0px rgba(0, 0, 0, 0.5)',
    paddingVertical: 16,
    flex: 1,
  },
})
