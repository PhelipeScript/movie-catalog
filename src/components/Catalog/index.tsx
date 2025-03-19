import { StyleSheet, FlatList, View, Text } from "react-native";

import moviesImported from '../../../public/videos.json';
import { MovieCard } from "../MovieCard";
import { sortMovies, SortType } from "../../utils/sort";

export interface MovieProps {
  id: number;
  title: string;
  description: string;
  poster: string;
  year: number;
  rating: number;
}

interface CatalogProps {
  sort: SortType;
  searchQuery: string;
}

export function Catalog({ sort, searchQuery }: CatalogProps) {
  const filteredMovies = moviesImported.filter((movie) => {
    return movie.title.toLowerCase().includes(searchQuery.toLowerCase());
  });
  const movies: MovieProps[] = sortMovies(filteredMovies, sort);

  return (
    <View style={styles.container}>
      <Text style={styles.moviesAmount}>
        Total: {movies.length} Filmes
      </Text>

      <FlatList
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
        ListEmptyComponent={() => (
          <Text style={styles.emptyText}>
            Nenhum filme encontrado
          </Text>
        )}
        contentContainerStyle={movies.length === 0 ? styles.emptyContainer : { paddingBottom: 160, gap: 32 }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
  },

  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  emptyText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
  },

  moviesAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 6,
    marginBottom: 16,
    width: '100%',
    boxShadow: '0px 2px 0px 0px rgba(0, 0, 0, 0.1)',
  },
})
