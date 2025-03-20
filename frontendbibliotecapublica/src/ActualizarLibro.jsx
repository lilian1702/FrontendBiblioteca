import { useState } from "react";
import { useEffect } from "react";
import {useParams} from 'react-router-dom';

function Actualizar(){
    const {id}=useParams();
    const [titulo,setTitulo]=useState("");
    const [autor,setAutor]=useState("");
    const [anio_publicacion,setAnio_publicacion]=useState("");
    const [stock,setStock]=useState("");
    useEffect(()=>{
        buscarId();
    },[]);
    const buscarId= async()=>{
        const res=await fetch(`http://localhost:3000/api/Libros/${id}`);
        const data=await res.json();
        const respuesta=data[0];
        console.log(respuesta);
        setTitulo(respuesta.titulo);
        setAutor(respuesta.autor);
        setAnio_publicacion(respuesta.anio_publicacion);
        setStock(respuesta.stock);
    }
    const actualizarLibro= async(e)=>{
        await fetch(`http://localhost:3000/api/Libros/${id}`,{
            method:"PUT",
            headers:{"content-type":"application/json"},
            body:JSON.stringify({titulo,autor,anio_publicacion,stock})
        })
    }
    return(
        <div>            
            <form onSubmit={actualizarLibro}>
                <label>Titulo</label>
                <input type="text" value={titulo} onChange={(event)=>setTitulo(event.target.value)} placeholder="escriba el titulo del libro"></input>
                <label>Autor</label>
                <input type="text" value={autor} onChange={(event)=>setAutor(event.target.value)} placeholder="escriba el autor"></input>
                <label>Anio de publicacion</label>
                <input type="text" value={anio_publicacion} onChange={(event)=>setAnio_publicacion(event.target.value)} placeholder="escriba el anio de publicacion"></input>
                <label>Stock</label>
                <input type="text" value={stock} onChange={(event)=>setStock(event.target.value)} placeholder="escriba el stock disponible"></input>
                <button type="submit">Actualizar Libro</button>
            </form>
        </div>
    );

}
export default Actualizar;