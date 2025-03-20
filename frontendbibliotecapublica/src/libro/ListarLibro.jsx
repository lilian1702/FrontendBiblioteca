import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./stilo.css";

function ListarLibro() {
    const [libros, setLibros]= useState([]);
    const navigate=useNavigate("");
    useEffect(()=>{
        fetch("http://localhost:3000/api/Libros")
        .then((res)=>res.json())
        .then((data)=>setLibros(data))
    },[]);
    return(
        <div>
            <h1>LISTA DE LIBROS</h1>
            <table className= "tablaLibros">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Titulo</th>
                        <th>Autor</th>
                        <th>Anio_publicacion</th>
                        <th>Stock</th>
                        <th>option</th>
                    </tr>
                </thead>
                <tbody>
                    {libros.map((index)=>(
                        <tr>
                            <td>{index.id}</td>
                            <td>{index.titulo}</td>
                            <td>{index.autor}</td>
                            <td>{index.anio_publicacion}</td>
                            <td>{index.stock}</td>
                            <td><button onClick={()=>navigate(`/ActualizarLibro/${index.id}`)}>Editar</button>
                            <button onClick={()=>navigate(`/EliminarLibro/${index.id}`)}>Eliminar</button></td>                           
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default ListarLibro;