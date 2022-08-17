import { useEffect } from "react";
import ComContact from "../ComponentesNav/ComContact";



function Contacto() {
    useEffect( () =>{
        document.title='Contacto';
    });
    return (
        <div className='contenido-styled-contac'>
            <h1>Puedes buscarme en:</h1>

            <div className='styled-contac'>
                <ComContact enlace='https://www.facebook.com/angelricardol1' 
                    imagen='https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg'
                />

                <ComContact enlace='https://www.linkedin.com/in/angel-ricardo-l%C3%B3pez-jim%C3%A9nez-496837132/'
                    imagen='https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw'
                />

                <ComContact enlace='https://wa.me/525571717948'
                    imagen='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png'
                />

                <ComContact enlace='https://github.com/RicharLopez24'
                    imagen='https://seeklogo.com/images/G/github-logo-5F384D0265-seeklogo.com.png'
                />
            </div>

        </div>
    );
}

export default Contacto;