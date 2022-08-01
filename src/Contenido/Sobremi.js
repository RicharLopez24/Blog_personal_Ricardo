import { useEffect } from "react";
import ComSobremi from "./ComponentesNav/ComSobremi";


function Sobremi() {
    useEffect( () =>{
        document.title='Sobre mi';
    });
    return (
        <div className='contenido-styled'>
            <h1>historia de mi</h1>
            <div className='styled-cuadros'>
                <ComSobremi titulo='Mis aptitudes' 
                    texto='algunas de mis aptitudes son de perseverar en lo que hago 
                    y algo que me guste lo hare hasta que lo logre '
                
                />

                <ComSobremi titulo='Estudios'
                    texto='UNIVERSIDAD AUTONOMA DEL ESTADO DE MEXICO, CENTRO UNIVERSITARIO UAEM ZUMPANGO'
                />

                <ComSobremi titulo='Mis aspiraciones' 
                    texto='Actualmente estoy por cursar el ultimo semestre de la 
                    carrera de ingeniera en computacion. Lo que espero es ser un 
                    desarrollador web o de aplicaciones moviles 
                    ya que es lo que me atrae ya que la tecnologia es lo de hoy '
                />            
            </div>

            <div className='styled-cuadros'>
                <ComSobremi titulo='Gustos particulares' 
                    texto=''
                />
            </div>

            <div>
                <img src='http://www.gifde.com/gif/otros/musica/partituras-pentagramas/partitura-pentagrama-047.gif'
                
                alt ='' />
                <img src='https://media0.giphy.com/media/26tn33aiTi1jkl6H6/200.gif'
                
                alt ='' />
                <img src='https://www.gifsanimados.org/data/media/699/voleibol-imagen-animada-0011.gif'
                
                alt ='' />
                <img src='https://reygif.com/media/1/banda-blues-12248.gif'
                
                alt ='' />
            </div>
        </div>
    );
}

export default Sobremi;