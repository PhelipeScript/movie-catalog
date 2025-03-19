import { StyleSheet, FlatList, View, Text } from "react-native";

import moviesImported from '../../../public/videos.json';
import { MovieCard } from "../MovieCard";
import { sortMovies, SortType } from "../../utils/sort";
import { Pagination } from "../Pagination";

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
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

export function Catalog({ sort, searchQuery, currentPage, setCurrentPage }: CatalogProps) {
  const filteredMovies = moviesImported.filter((movie) => {
    return movie.title.toLowerCase().includes(searchQuery.toLowerCase());
  });
  const movies: MovieProps[] = sortMovies(filteredMovies, sort);

  const start = (currentPage - 1) * 10;
  const end = start + 10;
  const moviesPaginated = movies.slice(start, end);

  const totalPages = Math.ceil(movies.length / 10);

  return (
    <FlatList
      style={styles.container}
      numColumns={2}
      data={moviesPaginated}
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
      ListHeaderComponent={
        <Text style={styles.moviesAmount}>
          Total: {movies.length} Filmes
        </Text>
      }
      ListFooterComponent={
        movies.length > 0 ? 
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} /> 
          : null
      }
      contentContainerStyle={
        movies.length === 0 ? 
          styles.emptyContainer : 
          { paddingBottom: 160, gap: 32 }
      }
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    />
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
