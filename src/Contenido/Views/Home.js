import { useEffect } from "react";
import perfil from '../../Image/perfil.jpeg'
import './ViewsStyles.css';
import uaemex from '../../Image/escudoUaemex.jpeg'
import { Link } from "react-router-dom";


function Home() {
    useEffect(() => {
        document.title = 'Home';
    });
    return (
        <div className='contenido-styled'>
            <h2> Bienvenidos </h2>
            <div className="cards">

                <div className="card">
                    <label className="titulos">Perfil</label>
                    
                    <Link to='/Sobremi/Perfil'><img src={perfil}
                        alt='perfil'
                        className="fotoPerfil"
                    /></Link>
                    <div className="text">
                        <div className="datos">
                            <label>Angel Ricardo Lopez Jimenez</label>
                            <label>25 años</label>
                        </div>

                    </div>
                </div>

                <div className="card">
                <label className="titulos">Estudios</label>
                    <img src={uaemex}
                        alt='perfil'
                        className="fotoPerfil"
                    />
                    <div className="text">
                        <div className="datos">
                            <label>Universidad Autonoma del Estado de Mexico</label>
                            <label>Centro Universitario UAEM Zumpango</label>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;