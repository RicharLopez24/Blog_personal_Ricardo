import React from 'react'
import perfil from '../../Image/perfil.jpeg'
import './ViewsStyles.css';

function Perfil() {
    return (
        <div className='contenido-styled'>
            <div className='perfil'>
                <img src={perfil}
                    alt='perfil'
                    className="Perfilfoto"
                />
                <div className="">
                    <div className="">
                        <label>Angel Ricardo Lopez Jimenez</label>
                        <label>25 años</label>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Perfil