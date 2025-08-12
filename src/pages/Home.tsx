import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import Spinner from "../components/Spinner";
import type { Movie } from "../types";
import { popularMovies, searchMovies } from "../api";

function Home() {
  const [searchTerm, setSearchTerm] = useState<string>(""); 
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [err, setErr] = useState<string>("");

  const loadPopularMovies = async (): Promise<void> => {
    setIsLoading(true);
    setErr("");

    try {
      const popularMoviesResult: Movie[] = await popularMovies();
      setMovies(popularMoviesResult);

    } catch (error) {
      console.log(error);
      setErr("Failed load movies, check your internet connection or try again later");
    
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadPopularMovies();
  }, []);

  const handleSearch = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    if (isLoading) return;
    setIsLoading(true);
    setErr("");

    try {
      const searchResults: Movie[] = await (!searchTerm.trim() ? popularMovies() : searchMovies(searchTerm));
      setMovies(searchResults);
    
    } catch (error) {
      console.log(error);
      setErr("Cannot search movies...");
      
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="w-full py-8 box-border max-sm:py-4">
      <form onSubmit={handleSearch} className="max-w-xl mx-auto mb-8 flex gap-4 px-4 box-border max-sm:mb-4">
        <input 
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="flex-1 py-3 px-4 border-none rounded-md bg-[#333] text-white text-base focus:outline-none focus:ring-2 focus:ring-[#666]"
        />

        <button 
          type="submit"
          className="py-3 px-6 bg-[#e50914] text-white rounded-md font-medium transition-colors duration-200 whitespace-nowrap hover:bg-[#f40612]" 
        >
          Search
        </button>
      </form>

      {isLoading ? (
        <Spinner />

      ) : err ? (
        <div className="text-red-500 text-center">{err}</div>

      ) : movies.length === 0 ? (
        <h1 className="text-center">No movies found</h1>
      
      ) : (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 p-4 w-full box-border">
          {movies.map(m => 
            <MovieCard movie={m} key={m.id} />
          )}
        </div>
      )}


    </div>
  );
}

export default Home;
