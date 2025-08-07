import './App.css'
import MovieCard from './components/MovieCard'

function App() {

  return (
    <>
      <MovieCard movie={ {title:"Test title 1", release_date:"2025"} }/>
      <MovieCard movie={ {title:"Test title 2", release_date:"2025"} }/>
    </>
  )
}

export default App
