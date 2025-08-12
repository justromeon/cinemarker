import { useState, useEffect} from "react";
import type { Movie } from "../types";
import { FavoriteContext } from "./FavoriteContext";

export function FavoriteProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<Movie[]>([]);

  useEffect(()  => {
    const storedFavs = localStorage.getItem("favorites");
    if (storedFavs) setFavorites(JSON.parse(storedFavs));
  }, []);

  useEffect (() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);
  
  const addToFavs = (movie: Movie) => {
    setFavorites(prev => [...prev, movie]);
  }

  const removeFromFavs = (movidId: number) => {
    setFavorites(prev => prev.filter(movie => movie.id !== movidId));
  }

  const isFav = (movieId: number) => favorites.some(movie => movie.id === movieId);

  const value = {
    favorites,
    addToFavs,
    removeFromFavs,
    isFav
  }

  return (
    <FavoriteContext.Provider value={value}>
        {children}
    </FavoriteContext.Provider>
  );
}
