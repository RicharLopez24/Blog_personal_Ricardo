import { Switch } from "react-router-dom"
import Contacto from "../Contenido/Views/Contacto";

import Proyectos from "../Contenido/Views/Proyectos";
import Sobremi from "../Contenido/Views/Sobremi";
import Home from "../Contenido/Views/Home";
import { PublicRoute } from "./Routes"
import Perfil from "../Contenido/Views/Perfil";
//import PublicRoute from "./Routes"


const PublicRoutes = () =>{
    return(
        <Switch>
            <PublicRoute exact path="/Home" component={Home}/>  
            <PublicRoute exact path="/Proyectos" component={Proyectos}/>            
            <PublicRoute exact path="/Sobremi" component={Sobremi} />
            <PublicRoute exact path="/Sobremi/Perfil" component={Perfil} />
            <PublicRoute exact path="/Contacto" component={Contacto} />            
            <PublicRoute path="/**"  component={Home}/>
        </Switch>
    )
}

export default PublicRoutes;