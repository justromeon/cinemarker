import { useState } from "react";
import MovieCard from "../components/MovieCard";
import type { Movie } from "../types";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");  

  const movies: Movie[] = [
    {id: 1, title: "Palmer", release_date: "2021"},
    {id: 2, title: "Blackout", release_date: "2022"},
    {id: 3, title: "Jules", release_date: "2023"}
  ];

  const handleSearch = (e: React.FormEvent): void => {
    e.preventDefault();
    alert(searchTerm);
    setSearchTerm("");
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

      <div>
        {movies.map(m => 
          <MovieCard movie={m} key={m.id} />
        )}
      </div>
    </div>
  );
}

export default Home;
