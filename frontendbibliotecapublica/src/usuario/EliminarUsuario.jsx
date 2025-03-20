import React, { useState } from 'react';

function EliminarUsuario() {
    const [id, setId] = useState('');

    const handleDelete = async (e) => {   
        
            const respuesta = await fetch(`http://localhost:3000/api/Usuario/${id}`, {
                method: 'DELETE',
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({id})
            });                   
    }
    return (
        <div>
            <h1>Eliminar Usuario</h1>
            <form onSubmit={handleDelete}>
                <label>ID del Usuario</label>
                <input type="text" onChange={(event) => setId(event.target.value)} placeholder="Ingrese el ID del usuario que desea eliminar"></input>
                <button type="submit">Eliminar Usuario</button>
            </form>
        </div>)
}

export default EliminarUsuario;
