import { useEffect } from "react";


function Proyectos() {
    useEffect( () =>{
        document.title='Proyectos';
    });
    return (
        <div className='contenido-styled'>
            <h1>Proyectos personales</h1>
        </div>
    );
}

export default Proyectos;