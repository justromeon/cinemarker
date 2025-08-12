import MovieCard from "../components/MovieCard";
import { useFavsContext } from "../contexts/FavoriteContext";
import type { Movie } from "../types";

function Favorites() {
  const {favorites}: {favorites: Movie[]}  = useFavsContext();

  return favorites.length === 0 ? (
    <div className="text-center p-16 px-8 bg-white/5 rounded-xl my-8 mx-auto max-w-3xl">
      <h2 className="mb-4 text-3xl text-[#e50914]">No Favorite Movies Yet</h2>
      <p className="text-[#999] text-xl leading-relaxed">Start adding your favorite movies</p>
    </div>
  
  ) : (
    <>
      <h1 className="text-center">Your Favorites</h1>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6 p-4 w-full box-border">
        {favorites.map(fav => 
          <MovieCard movie={fav} key={fav.id} />
        )}
      </div>
    </>
  )
}

export default Favorites;
