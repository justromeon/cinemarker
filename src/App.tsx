import './App.css'
import Home from './pages/Home'
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <main>
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </main>
  )
}

export default App
