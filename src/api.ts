import type { Movie, RawTMDBMovie } from "./types";

const BASE_URL: string = import.meta.env.VITE_BASE_URL;
const API_KEY: string = import.meta.env.VITE_API_KEY;

export async function popularMovies(): Promise<Movie[]> {

  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();

  return data.results.map((raw: RawTMDBMovie) => ({
    id: raw.id,
    url: `https://image.tmdb.org/t/p/w500${raw.poster_path}`,
    title: raw.title,
    release_date: raw.release_date
  }));
}

export async function searchMovies(searchTerm:string): Promise<Movie[]> {

  const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(searchTerm)}`);    
  const data = await response.json();

  return data.results.map((raw: RawTMDBMovie) => ({
    id: raw.id,
    url: `https://image.tmdb.org/t/p/w500${raw.poster_path}`,
    title: raw.title,
    release_date: raw.release_date
  }));
}
