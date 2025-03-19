import { MovieProps } from "../components/Catalog";

export type SortType =
  | "asc"
  | "desc"
  | "recent"
  | "oldest"
  | "high_rating"
  | "low_rating";

export function sortMovies(
  movies: MovieProps[],
  sortType: SortType
): MovieProps[] {
  switch (sortType) {
    case "asc":
      return movies.sort((a, b) => a.title.localeCompare(b.title));
    case "desc":
      return movies.sort((a, b) => b.title.localeCompare(a.title));
    case "recent":
      return movies.sort((a, b) => b.year - a.year);
    case "oldest":
      return movies.sort((a, b) => a.year - b.year);
    case "high_rating":
      return movies.sort((a, b) => b.rating - a.rating);
    case "low_rating":
      return movies.sort((a, b) => a.rating - b.rating);
    default:
      return movies;
  }
}
