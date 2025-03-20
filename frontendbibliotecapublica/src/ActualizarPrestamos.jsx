import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ActualizarPrestamos(){
    const {id} = useParams();
    const [usuario_id, setUsuario_id] = useState("");
    const [libro_id, setLibro_id] = useState("");
    const [fecha_prestamo, setFecha_prestamo] = useState("");
    const [fecha_devolucion, setFecha_devolucion] = useState("");
    const [estado, setEstado] = useState("");
    useEffect(()=>{
        PrestamosId();
    });
    const PrestamosId=async()=>{
        const res=await fetch(`http://localhost:3000/api/Prestamo/${id}`);
        const data=await res.json();
        setUsuario_id(data.usuario_id);
        setLibro_id(data.libro_id);
        setFecha_prestamo(data.fecha_prestamo);
        setFecha_devolucion(data.fecha_devolucion);
        setEstado(data.estado);
    }
    const Actualizar=async()=>{
        await fetch(`http://localhost:3000/api/Prestamo/${id}`,{
            method: "PUT",
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify({usuario_id,libro_id,fecha_prestamo,fecha_devolucion,estado})
        })};
    return (
        <div>
        <form onSubmit={Actualizar}>
            <label >Id Usuario:</label>
            <input type="text" value={usuario_id} onChange={(event)=>setUsuario_id(event.target.value)} placeholder="Escriba la fecha de reserva" />
            <label >Id libro</label>
            <input type="text" value={libro_id} onChange={(event)=>setLibro_id(event.target.value)} placeholder="Escriba el lugar de reserva" />
            <label >Fecha Prestamo</label>
            <input type="text" value={fecha_prestamo} onChange={(event)=>setFecha_prestamo(event.target.value)} placeholder="Escriba el nombre de la reserva" />
            <label >Fecha Devolucion</label>
            <input type="text" value={fecha_devolucion} onChange={(event)=>setFecha_devolucion(event.target.value)} placeholder="Escriba el nombre de la reserva" />
            <label >Estado</label>
            <input type="text" value={estado} onChange={(event)=>setEstado(event.target.value)} placeholder="Escriba el nombre de la reserva" />
            <button type="submit">Actualizar Prestamo</button>
        </form>
        </div>
    );
}

export default ActualizarPrestamos;