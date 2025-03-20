import React, {useState}from "react";

function CrearLibro(){
    const[titulo, setTitulo]= useState("");
    const[autor, setAutor]= useState("");
    const[anio_publicacion, setAnio_publicacion]= useState("");
    const[stock, setStock]= useState("");
    const handleSubmit= async(e)=>{
        const respuesta= await fetch("http://localhost:3000/api/Libros",{
            method: 'POST',
            headers:{
                "content-type": "application/json"
            },
            body:JSON.stringify({titulo,autor,anio_publicacion,stock})
        });
    }
    return(
        <div>
            <h1>Crear Libro</h1>
            <form onSubmit={handleSubmit}>
                <label>Titulo</label>
                <input type="text" onChange={(event)=> setTitulo(event.target.value)} placeholder="Escriba el titulo del libro"></input>
                <label>Autor</label>
                <input type="text" onChange={(event)=> setAutor(event.target.value)} placeholder="Escriba el autor"></input>
                <label>Anio de publicacion</label>
                <input type="text" onChange={(event)=> setAnio_publicacion(event.target.value)} placeholder="Escriba el anio de publicacion"></input>
                <label>Stock</label>
                <input type="text" onChange={(event)=> setStock(event.target.value)} placeholder="Escriba el stock disponible"></input>
                <button type="submit">Crear Libro</button>
            </form>
        </div>
    );
}
export default CrearLibro;

