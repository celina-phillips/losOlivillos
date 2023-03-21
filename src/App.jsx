
import './App.css'
import Home from './pages/Home'
import Navegador from './components/Navegador'
import {Routes, Route} from 'react-router-dom'
import Casa1 from './pages/Casa1'
import Casa2 from './pages/Casa2'
import Casa3 from './pages/Casa3'
import Casa4 from './pages/Casa4'





function App() {
  return (
    <div className='App'>
        <Navegador/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/casa1' element={<Casa1/>}/>
          <Route path='/casa2' element={<Casa2/>}/>
          <Route path='/casa3' element={<Casa3/>}/>
          <Route path='/casa4' element={<Casa4/>}/>          
        </Routes>
    </div>
  )
}

export default App
