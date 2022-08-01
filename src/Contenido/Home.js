import { useEffect } from "react";


function Home() {
    useEffect( () =>{
        document.title='Home';
    });
    return (
        <div className='contenido-styled'>            
            <body>
            <h1>Bienvenidos </h1>
            
            </body>            
        </div>
    );
}

export default Home;