import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

function ListarPrestamos(){
    const [Prestamo,setPrestamo]=useState([]);
    const navigate=useNavigate("");
    useEffect(()=>{
        fetch("http://localhost:3000/api/Prestamo")
        .then(res=>res.json())
        .then(data=>{setPrestamo(data)})
    })

    return(
        <div>
            <h1 className="h1">Lista de usuarios</h1>
            <table className="tablaUser">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Id Usuario</th>
                        <th>Id Libro</th>
                        <th>Fecha Prestamo</th>
                        <th>Fecha Devolucion</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {Prestamo.map(res => (
                        <tr key={res.id}>
                            <td>{res.id}</td>
                            <td>{res.usuario_id}</td>
                            <td>{res.libro_id}</td>
                            <td>{res.fecha_prestamo}</td>
                            <td>{res.fecha_devolucion}</td>
                            <td>{res.estado}</td>
                            <td><button className="edit" onClick={()=>{navigate(`/ActualizarReserva/${res.id}`)}}>Edit</button>
                            <button className="delete">Delete</button></td>
                            <td>{res.nombreReserva}</td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default ListarPrestamos;