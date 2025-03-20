import { useParams } from "react-router-dom";
  
function EliminarLibro() {
    const { id } = useParams();
    const eliminar = async () => {
        const response = await fetch(`http://localhost:3000/api/Libros/${id}`, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
            });
    };

    return (
       <div>
        <button onClick={eliminar}>Eliminar</button>
       </div>
    );
}

export default EliminarLibro;