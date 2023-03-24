
import '../styles/Navegador.css'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

function Navegador() {
  return (
<>  
<nav className='navegador'>	
<Link to='/' className='logo'><img src={logo} alt="logo"/></Link>
  <ul className='botones' type="none">
		<li><a href="#">Casas</a></li>
		<li><a href="https://wa.me/5492262655087">Contacto</a></li>
	</ul>
</nav>
</>     
  );
}

export default Navegador;