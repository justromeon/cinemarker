import { createContext, useContext } from "react";
import type { Movie } from "../types";

type FavoriteContextType = {
  favorites: Movie[];
  addToFavs: (movie: Movie) => void;
  removeFromFavs: (movieId: number) => void;
  isFav: (movieId: number) => boolean;
};

const defaultValue: FavoriteContextType = {
  favorites: [],
  addToFavs: () => {},
  removeFromFavs: () => {},
  isFav: () => false,
};

export const FavoriteContext = createContext<FavoriteContextType>(defaultValue);
export const useFavsContext = () => useContext(FavoriteContext);
