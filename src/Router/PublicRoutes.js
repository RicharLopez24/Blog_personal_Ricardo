import { Switch } from "react-router-dom"
import Contacto from "../Contenido/Contacto";
import Home from '../Contenido/Home'
import Proyectos from "../Contenido/Proyectos";
import Sobremi from "../Contenido/Sobremi";
import { PublicRoute } from "./Routes"
//import PublicRoute from "./Routes"


const PublicRoutes = () =>{
    return(
        <Switch>
            <PublicRoute exact path="/Home" component={Home}/>  
            <PublicRoute exact path="/Proyectos" component={Proyectos}/>            
            <PublicRoute exact path="/Sobremi" component={Sobremi} />
            <PublicRoute exact path="/Contacto" component={Contacto} />            
            <PublicRoute path="/**"  component={Home}/>
        </Switch>
    )
}

export default PublicRoutes;