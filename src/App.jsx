
import './App.css'
import Cardd from './components/Cardd'
import Home from './components/Home'
import Navegador from './components/Navegador'
import UncontrolledExample from './components/UncontrolledExample'
import imgCasa1 from './assets/casa1.jpeg'
import imgCasa2 from './assets/casa2.jpeg'
import imgCasa3 from './assets/casa3.jpeg'
import AboutUs from './components/AboutUs'



function App() {

  return (
    <div>
        <Navegador/>
        <UncontrolledExample />  
        <div className='olivo'>
        <section className='divcasas'>
          <Cardd img = {imgCasa1} texto={"casa1"}/>
          <Cardd img = {imgCasa2} texto={"casa2"}/>
        </section>
        <section className='divcasas'>
          <Cardd img = {imgCasa3} texto={"casa3"}/>
          <Cardd img = {imgCasa3} texto={"casa3"}/>
        </section>
        <AboutUs/>
        </div>
    </div>
      //WhatsappButton/
  )
}

export default App
