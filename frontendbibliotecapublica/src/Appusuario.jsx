import {Routes} from "react-router-dom"
import {Route} from "react-router-dom"
import {BrowserRouter as Router} from 'react-router-dom'
import {Link} from "react-router-dom"
import ListarUsuario from "./ListarUsuario"
import CrearUsuario from "./CrearUsuario"
import Actualizar from "./ActualizarUsuario"
import EliminarUsuario from "./EliminarUsuario"


function AppUsuario() {
  

  return (
    <div>
      <Router>
        <nav>
          <ul>
           
            <li><Link to="/ListarUsuario">Listar Usuario</Link></li>
            <li><Link to="/CrearUsuario">Crear Usuario</Link></li>
            
          </ul>
        </nav>
      <Routes>
          <Route path="/ListarUsuario" element={<ListarUsuario/>}></Route>
          <Route path="/CrearUsuario" element={<CrearUsuario/>}></Route>
          <Route path="/EditarUsuario/:id" element={<Actualizar/>}></Route>
          <Route path="/EliminarUsuario/:ud" element={<EliminarUsuario/>}></Route>
          
      </Routes>
      </Router>
      
      
    </div>
  )
}

export default AppUsuario;
