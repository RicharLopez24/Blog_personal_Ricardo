import { BrowserRouter as Router, Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import PublicRoutes from '../Router/PublicRoutes';

function Navigation() {
  return (
    <div className="App-header">
      
      <Router>

        <ul className='lista'>
            <li className='lista-contenido'><Link to='/Home' className='enlace'>Home</Link></li>
            <li className='lista-contenido'><Link to='/Proyectos' className='enlace'>Proyectos</Link></li>
            <li className='lista-contenido'><Link to='/Sobremi' className='enlace'>Sobre mi</Link></li>
            <li className='lista-contenido'><Link to='/Contacto' className='enlace'>Contacto</Link></li>
            <div className='input-contenido'>
                <input type='text' placeholder='Search'></input>
                <SearchIcon className='iconSearch'/>
                
            </div>
        </ul>
        <PublicRoutes />
      </Router>
        
      
    </div>
  );
}

export default Navigation;
