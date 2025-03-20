import {useState} from 'react';
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import './stilo.css';

function ListarUsuarios(){
    const [usuarios, setUsuarios]= useState([]);
    const navigate=useNavigate("");
    useEffect(()=>{
        fetch("http://localhost:3000/api/Usuario")
        .then((res)=>res.json())
        .then((data)=>setUsuarios(data))
    },[]);
    return(
        <div>
            <h1>LISTA DE USUARIOS</h1>
            <table className="tablaUsuarios">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Telefono</th>
                        <th>option</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((index)=>(
                        <tr>
                            <td>{index.id}</td>
                            <td>{index.nombre}</td>
                            <td>{index.correo}</td>
                            <td>{index.telefono}</td>
                            <td><button onClick={()=>navigate(`/ActualizarUsuario/${index.id}`)}>editar</button>
                            <button onClick={()=>navigate(`/EliminarUsuario/${index.id}`)}>Eliminar</button></td>                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

}

export default ListarUsuarios;