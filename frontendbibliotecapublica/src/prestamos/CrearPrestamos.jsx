import { useState } from "react";
function CrearPrestamos() {
  const [usuario_id,setUsuario_id]=useState("");
  const [libro_id,setLibro_id]=useState("");
  const [fecha_prestamo,setFecha_prestamo]=useState("");
  const [fecha_devolucion,setFecha_devolucion]=useState("");
  const [estado,setEstado]=useState("");
  const handleSubmit=async()=>{ 
    const respuesta=await fetch("http://localhost:3000/api/Prestamo/",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({usuario_id,libro_id,fecha_prestamo,fecha_devolucion,estado})
    })
  }
  return (
    <div>
        <h1>Crear Prestamos</h1>
        <form onSubmit={handleSubmit}>
            <label >Usuario id</label>
            <input type="text" onChange={(event)=>setUsuario_id(event.target.value)} placeholder="Escriba el usuario id" />
            <label >Libro id</label>
            <input type="text" onChange={(event)=>setLibro_id(event.target.value)} placeholder="Escriba el libro id" />
            <label >fecha prestamo</label>
            <input type="text" onChange={(event)=>setFecha_prestamo(event.target.value)} placeholder="Escriba la fecha de prestamo" />
            <label >fecha devolucion</label>
            <input type="text" onChange={(event)=>setFecha_devolucion(event.target.value)} placeholder="Escriba la fecha de devolucion" />
            <label >estado</label>
            <input type="text" onChange={(event)=>setEstado(event.target.value)} placeholder="Escriba el estado" />
            <button type="submit">Registrar Reserva</button>
        </form>
        </div>
  )
}

export default CrearPrestamos;