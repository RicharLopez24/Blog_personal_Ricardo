import Programs from "../../Componentes/Programs";
import { DataProgramas } from '../../Componentes/DataPrograms'


function Proyectos() {
   
    return (
        <div className='contenido-styled2'>
           <label className="titulos"> Programas realizados</label>
            {DataProgramas.map((item, index) => {
                return (
                    <div>
                        <Programs cont={item} />
                    </div>
                )
            })}
        </div>
    );
}

export default Proyectos;