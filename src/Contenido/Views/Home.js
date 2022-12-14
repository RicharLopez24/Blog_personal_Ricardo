import perfil from '../../Image/perfil.jpeg'
import './ViewsStyles.css';
import uaemex from '../../Image/escudoUaemex.jpeg'
import memoria from '../../Image/m1.png'
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { Grid } from "@mui/material";


function Home() {

    return (
        <div className='contenido-styled'>
            <h2> Bienvenidos </h2>


            <div className="cards">
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={6}>
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
                    </Grid>

                    <Grid item xs={12} sm={12} md={6}>
                        <div className="card">
                            <label className="titulos">Estudios</label>
                            <Link to='/Sobremi/Estudios'>
                                <img src={uaemex}
                                    alt='perfil'
                                    className="fotoPerfil"
                                />
                            </Link>
                            <div className="text">
                                <div className="datos">
                                    <label>Universidad Autonoma del Estado de Mexico</label>
                                    <label>Centro Universitario UAEM Zumpango</label>
                                </div>

                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>






            <div className="viewProyect">
                <label className="titulos"> Programas realizados</label>


                <div className="cardProgram">
                    <Grid container >
                        <Grid item xs={12} sm={12} md={6}>
                            <div className="p1">
                                <label className="titulos">Memoria Asociativa</label>
                                <a href="https://github.com/RicharLopez24/MemoriaAsociativa.git"
                                    target='_blank' rel='noreferrer'>
                                    <img src={memoria}
                                        alt='ejemplo memoria'
                                        className="programMemoria"
                                    />

                                </a>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <div className="cardData">
                                <div className="datosProgram">
                                    <p>
                                        En este programa se realizo en la universidad para
                                        la materia de sistemas expertos, en el cual consistia
                                        en que atravez de unos patrones de entrada que son capturados
                                        y al ingresar los mismo patrones pero en difernet
                                        posicion y con lagunos datos de mas o datos de menos
                                        seran obtenidos de acuerdo con las memorias de meximos
                                        y minimos que se realizan al hacer la obtencion de dichos
                                        patrones de entrada.
                                    </p>
                                    <p>
                                        Puedes acceder al codigo fuente dando clic en la imagen
                                        de la izquierda
                                    </p>
                                </div>

                            </div>
                        </Grid>
                    </Grid>



                </div>
                <div className="video">
                    <p>
                        Video explicando un poco de como funciona el programa de memoria asociativa
                    </p>
                    <ReactPlayer
                        className='videostyle'
                        width='600px' height='400px'
                        url='https://youtu.be/1qmc405spNk' controls />
                </div>

            </div>
            <div className="proyectos">
                <Link to='/Proyectos'>

                    Ver mas programas

                </Link>
            </div>
        </div>
    );
}

export default Home;