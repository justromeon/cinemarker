import type { Movie } from "../types";

function MovieCard({movie}: {movie:Movie}) {
  
  const onFavoriteClick = (): void => alert("clicked!");

  return (
    <div>
      <div>
        <img src={movie.url} alt={movie.title} />
        <div>
          <button onClick={onFavoriteClick}>
            ♡
          </button>
        </div>
      </div>

      <div>
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
}

export default MovieCard;