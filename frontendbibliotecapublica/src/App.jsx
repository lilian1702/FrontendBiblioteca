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
            
          
            
          </ul>
        </nav>
      <Routes>
          <Route path="/CrudUsuarios" element={<AppUsuario/>}></Route>
          
          
      </Routes>
      </Router>
      
      
    </div>
  )
}

export default App
