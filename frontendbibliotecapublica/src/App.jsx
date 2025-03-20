import {Routes} from "react-router-dom"
import {Route} from "react-router-dom"
import {BrowserRouter as Router} from 'react-router-dom'
import {Link} from "react-router-dom"
import ListarPrestamos from "./ListarPrestamos"
import CrearPrestamos from "./CrearPrestamos"
import ActualizarPrestamos from "./ActualizarPrestamos"
import EliminarPrestamos from "./EliminarPrestamos"


function App() {
  

  return (
    <div>
      <Router>
        <nav>
          <ul>
            <li>Crud Prestamos</li>
            <li><Link to="/CrudPrestamos/ListarPrestamos">Listar Reserva</Link></li>
            <li><Link to="/CrudPrestamos/CrearPrestamos">Crear Reservas</Link></li>


          </ul>
        </nav>
      <Routes>
        <Route path="/ListarPrestamos" element={<ListarPrestamos/>}></Route>
        <Route path="/CrearPrestamos" element={<CrearPrestamos/>}></Route>
        <Route path="/ActualizarPrestamos/:id" element={<ActualizarPrestamos/>}></Route>
        <Route path="/EliminarPrestamos" element={<EliminarPrestamos/>}></Route>
      </Routes>
      </Router>
    </div>
  )
}

export default App;
