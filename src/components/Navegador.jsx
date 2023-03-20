
import '../styles/Navegador.css'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

function Navegador() {
  return (
    <div className='navegador'>
      <Link to='/' className='logo'><img src={logo} alt=""/></Link>
      <div className='botones'>
        <h3>Casas</h3>
        <h3>AboutUs</h3>
        <h3>Contacto</h3>
      </div>       
    </div>
  );
}

export default Navegador;