import type { Movie } from "../types";
import { useFavsContext } from "../contexts/FavoriteContext";

function MovieCard({movie}: {movie:Movie}) {
  const {isFav, addToFavs, removeFromFavs} = useFavsContext();
  const favorite: boolean = isFav(movie.id);

  const onFavoriteClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    if (favorite) removeFromFavs(movie.id);
    else addToFavs(movie);

  }

  return (
    <div className="relative rounded-lg overflow-hidden bg-[#1a1a1a] transition-transform duration-200 h-full flex flex-col hover:-translate-y-1">
      <div className="relative aspect-[2/3] w-full">
        <img className="w-full h-full object-cover" src={movie.url} alt={movie.title} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/80 opacity-0 transition-opacity duration-200 flex flex-col justify-end p-4 hover:opacity-100">
          <button
            className={`${favorite ? "text-red-500" : ""} absolute top-4 right-4 text-2xl p-2 bg-black/50 rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-200 hover:bg-black/80`}
            onClick={onFavoriteClick}
          >
            ♥
          </button>
        </div>
      </div>

      <div className="p-4 flex-1 flex flex-col gap-2">
        <h3 className="text-base m-0">{movie.title}</h3>
        <p className="text-[#999] text-sm">{movie.release_date}</p>
      </div>
    </div>
  );
}

export default MovieCard;