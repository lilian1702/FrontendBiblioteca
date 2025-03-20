import {Routes} from "react-router-dom"
import {Route} from "react-router-dom"
import {BrowserRouter as Router} from 'react-router-dom'
import {Link} from "react-router-dom"
import ListarPrestamos from "./ListarPrestamos"
import CrearPrestamos from "./CrearPrestamos"
import ActualizarPrestamos from "./ActualizarPrestamos"
import EliminarPrestamos from "./EliminarPrestamos"
import ListarUsuario from "./ListarUsuario"
import CrearUsuario from "./CrearUsuario"
import Actualizar from "./ActualizarUsuario"
import EliminarUsuario from "./EliminarUsuario"



function App() {
  

  return (
    <div>
      <Router>
        <nav>
          <ul>
            <li>Crud Prestamos</li>
            <li><Link to="/CrudPrestamos/ListarPrestamos">Listar Reserva</Link></li>
            <li><Link to="/CrudPrestamos/CrearPrestamos">Crear Reservas</Link></li>


           
            <li><Link to="/ListarUsuario">Listar Usuario</Link></li>
            <li><Link to="/CrearUsuario">Crear Usuario</Link></li>
            
            
          
            
          </ul>
        </nav>
      <Routes>
        <Route path="/ListarPrestamos" element={<ListarPrestamos/>}></Route>
        <Route path="/CrearPrestamos" element={<CrearPrestamos/>}></Route>
        <Route path="/ActualizarPrestamos/:id" element={<ActualizarPrestamos/>}></Route>
        <Route path="/EliminarPrestamos" element={<EliminarPrestamos/>}></Route>
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

export default App;
