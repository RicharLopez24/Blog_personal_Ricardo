import { Link } from 'react-router-dom';
import './StyleComponent.css'


function Sobremi() {
    return (
        <div className='contenido-styled-yo'>
            <h2>
                Algunas cosas mias
            </h2>
            <div className='styled-cuadros'>

                <section>
                    <div >

                        <Link to='/Sobremi/Aptitudes' className='enlace'>
                            <h3 >Mis aptitudes</h3>
                            <p >algunas de mis aptitudes son de perseverar en lo que hago
                                y algo que me guste lo hare hasta que lo logre </p>
                        </Link>
                    </div>
                    <div >

                        <Link to='/Sobremi/Estudios' className='enlace'>
                            <h3 >Estudios</h3>
                            <p >UNIVERSIDAD AUTONOMA DEL ESTADO DE MEXICO, CENTRO UNIVERSITARIO UAEM ZUMPANGO</p>
                        </Link>
                    </div>
                    <div >

                        <Link to='/Sobremi/Aptitudes' className='enlace'>
                            <h3 >Mis aspiraciones</h3>
                            <p >Soy recien egresado de la carrera de Ingenieria en computacion.
                                Espero ser un
                                desarrollador web o de aplicaciones moviles
                                ya que son algunos de mis intereses que tengo

                            </p>
                        </Link>
                    </div>
                    <div >

                        <Link to='/Sobremi/Gustos' className='enlace'>
                            <h3 >Mis Gustos</h3>
                            <p >Al gunas cosas que me gustan es jugar futbol, voleibol
                                tocar el teclado, buscar informacion sobre alguna tecnologia
                                de mi interes, entra otros pasatiempos pequeños

                            </p>
                        </Link>
                    </div>
                </section>



            </div>

            <div className='styled-cuadros'>
                <h3>Gustos particulares</h3>
            </div>

            <div>
                <img src='http://www.gifde.com/gif/otros/musica/partituras-pentagramas/partitura-pentagrama-047.gif'

                    alt='' />
                <img src='https://media0.giphy.com/media/26tn33aiTi1jkl6H6/200.gif'

                    alt='' />
                <img src='https://www.gifsanimados.org/data/media/699/voleibol-imagen-animada-0011.gif'

                    alt='' />
                <img src='https://reygif.com/media/1/banda-blues-12248.gif'

                    alt='' />
            </div>
        </div>
    );
}

export default Sobremi;