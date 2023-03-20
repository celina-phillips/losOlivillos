
import './App.css'
import Home from './pages/Home'
import Navegador from './components/Navegador'
import {Routes, Route} from 'react-router-dom'




function App() {
  return (
    <div className='App'>
        <Navegador/>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
    </div>
  )
}

export default App
