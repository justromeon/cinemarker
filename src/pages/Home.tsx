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
    <div>
      <form onSubmit={handleSearch}>
        <input 
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />

        <button type="submit">Search</button>
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
