function proyectoCard({proyecto}){

    const {titulo, categoria, estado, id} = proyecto;
    
    return(
      
        <div className="card">
            <h2>{titulo}</h2>
            <p><strong>categooria:</strong> {categoria}</p>
            <p><strong>estado: {estado}</strong></p>
            <button onClick={() => setProyectoSeleccionado(proyecto)}>
            Ver detalle
            </button>
            <button>Eliminar</button>
        </div>

    );
}

export default proyectoCard