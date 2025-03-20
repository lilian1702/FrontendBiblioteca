import {Routes} from "react-router-dom"
import {Route} from "react-router-dom"
import {BrowserRouter as Router} from 'react-router-dom'
import {Link} from "react-router-dom"
import ListarPrestamos from "./prestamos/ListarPrestamos"
import CrearPrestamos from "./prestamos/CrearPrestamos"
import ActualizarPrestamos from "./prestamos/ActualizarPrestamos"
import EliminarPrestamos from "./prestamos/EliminarPrestamos"
import ListarUsuario from "./usuario/ListarUsuario"
import CrearUsuario from "./usuario/CrearUsuario"
import Actualizar from "./usuario/ActualizarUsuario"
import EliminarUsuario from "./usuario/EliminarUsuario"
import ListarLibro from "./libro/ListarLibro"
import CrearLibro from "./libro/CrearLibro"
import ActualizarLibro from "./libro/ActualizarLibro"
import EliminarLibro from "./libro/EliminarLibro"




function App() {
  

  return (
    <div>
      <Router>
        <nav>
          <ul>
            <li>Crud Prestamos</li>
            <li><Link to="/ListarPrestamos">Listar Prestamo</Link></li>
            <li><Link to="/CrearPrestamos">Crear Prestamo</Link></li>
            <li>Crud Usuario</li>
            <li><Link to="/ListarUsuario">Listar Usuario</Link></li>
            <li><Link to="/CrearUsuario">Crear Usuario</Link></li>
            <li>Crud Libro</li>
            <li><Link to="/ListarLibro">Listar Libro</Link></li>
            <li><Link to="/CrearLibro">Crear Libro</Link></li>      
                                  
            <li>Crud Libro</li>
            <li><Link to="/ListarLibro">Listar Libro</Link></li>
            <li><Link to="/CrearLibro">Crear Libro</Link></li>      
                                  
          </ul>
        </nav>
      <Routes>
        <Route path="/ListarPrestamos" element={<ListarPrestamos/>}></Route>
        <Route path="/CrearPrestamos" element={<CrearPrestamos/>}></Route>
        <Route path="/ActualizarPrestamos/:id" element={<ActualizarPrestamos/>}></Route>
        <Route path="/EliminarPrestamos/:id" element={<EliminarPrestamos/>}></Route>   

        <Route path="/ListarUsuario" element={<ListarUsuario/>}></Route>
        <Route path="/CrearUsuario" element={<CrearUsuario/>}></Route>
        <Route path="/ActualizarUsuario/:id" element={<Actualizar/>}></Route>
        <Route path="/EliminarUsuario/:id" element={<EliminarUsuario/>}></Route>

        <Route path="/ListarLibro" element={<ListarLibro/>}></Route>
        <Route path="/CrearLibro" element={<CrearLibro/>}></Route>
        <Route path="/ActualizarLibro/:id" element={<ActualizarLibro/>}></Route>
        <Route path="/EliminarLibro/:id" element={<EliminarLibro/>}></Route>  

          
      </Routes>
      </Router>
    </div>
  )
}

export default App;
