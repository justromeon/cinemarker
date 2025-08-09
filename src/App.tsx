import NavBar from './components/NavBar'
import Favorites from './pages/Favorites'
import Home from './pages/Home'
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <div>
      <NavBar />
      
      <main className='flex-1 p-8 box-border w-full flex flex-col'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/favorites' element={<Favorites />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
