import {Routes} from "react-router-dom"
import {Route} from "react-router-dom"
import {BrowserRouter as Router} from 'react-router-dom'
import {Link} from "react-router-dom"
import AppUsuario from "./Appusuario"


function App() {
  

  return (
    <div>
      <Router>
        <nav>
          <ul>
           
            <li><Link to="/CrudUsuarios">Crud Usuario</Link></li>
            <li><Link to="/CrudLibro">Crud Libros</Link></li>
            <li><Link to="/CrudPrestamos">Crud Prestamos</Link></li>
            
          
            
          </ul>
        </nav>
      <Routes>
          <Route path="/CrudUsuarios" element={<AppUsuario/>}></Route>
          <Route path="/CrudLibro" element={<AppLibro/>}></Route>
          <Route path="/CrudPrestamos" element={<AppPrestamos/>}></Route>
          
          
      </Routes>
      </Router>
      
      
    </div>
  )
}

export default App
