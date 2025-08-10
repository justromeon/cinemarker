const BASE_URL: string = import.meta.env.VITE_;
const API_KEY: string = import.meta.env.VITE_API_KEY;

export async function popularMovies() {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
}

export async function SearchMovies(searchTerm:string) {
  const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchTerm}`);    
  const data = await response.json();
  return data.results;
}
