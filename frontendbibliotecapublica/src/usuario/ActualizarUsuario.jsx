import {useState} from 'react';
import {useParams} from 'react-router-dom';
import {useEffect} from 'react';

function Actualizar(){
    const {id} = useParams();
    const [nombre,setNombre]=useState("");
    const [correo,setCorreo]=useState("");
    const [telefono,setTelefono]=useState("");
    useEffect(()=>{
        buscarId();
    },[]);
    const buscarId= async()=>{
        const res=await fetch(`http://localhost:3000/api/Usuario/${id}`);
        const data=await res.json();
        const respuesta=data[0];
        console.log(respuesta);
        setNombre(respuesta.nombre);
        setCorreo(respuesta.correo);
        setTelefono(respuesta.telefono);
    }
    const actualizarUsuario= async(e)=>{
        await fetch(`http://localhost:3000/api/Usuario/${id}`,{
            method:"PUT",
            headers:{"content-type":"application/json"},
            body:JSON.stringify({nombre,correo,telefono})
        })
    }
    return(
        <div>            
            <form onSubmit={actualizarUsuario}>
                <label>Nombre</label>
                <input type="text" value={nombre} onChange={(event)=>setNombre(event.target.value)} placeholder="escriba el nombre"></input>
                <label>Correo</label>
                <input type="text" value={correo} onChange={(event)=>setCorreo(event.target.value)} placeholder="escriba el correo"></input>
                <label>Telefono</label>
                <input type="text" value={telefono} onChange={(event)=>setTelefono(event.target.value)} placeholder="escriba el telefono"></input>
                <button type="submit">Actualizar Usuario</button>
            </form>
        </div>
    );
}

export default Actualizar;





