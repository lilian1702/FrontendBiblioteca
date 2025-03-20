import React, {useState} from 'react';
function CrearUsuario(){
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const handleSubmit = async(e) => {
        const respuesta= await fetch("http://localhost:3000/api/Usuario",{
            method: 'POST',
            headers:{
                "content-type": "application/json"
            },
            body:JSON.stringgify({nombre,correo,telefono})
        });
    }
    return (
        <div>
            <h1>Crear Usuario</h1>
            <form onSubmit= {handleSubmit}>
                <label>Nombre</label>
                <input type="text" onChange={(event)=> setNombre(event.target.value)} placeholder="Escriba el nombre"></input>
                <label>Correo</label>
                <input type="text" onChange={(event)=> setCorreo(event.target.value)} placeholder="Escriba el correo"></input>
                <label>Telefono</label>
                <input type="text" onChange={(event)=> setTelefono(event.target.value)} placeholder="Escriba el telefono"></input>
                <button type= "submit">Crear Usuario</button>
            </form>
        </div>)
}

export default CrearUsuario;