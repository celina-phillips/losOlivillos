
import './App.css'
import Cardd from './components/Cardd'
import Navegador from './components/Navegador'
import UncontrolledExample from './components/UncontrolledExample'
import WhatsappButton from './components/WhatsappButton'





function App() {

  return (
    <div>
        <Navegador/>
        <UncontrolledExample className="carousel"/>
        <div className='cards'>
          <Cardd/>
          <Cardd/>
          <Cardd/>
          <Cardd/>
        </div>
      //WhatsappButton/
    </div>
  )
}

export default App
