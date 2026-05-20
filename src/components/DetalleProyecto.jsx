const DetalleProyecto = ({ proyecto }) => {

    if (!proyecto) {
        return (
            <h2>No hay proyecto seleccionado</h2>
        )
    }
    return (
        <div className="detalle-proyecto">

            <h2>{proyecto.titulo}</h2>

            <p>
                <strong>Categoría:</strong> {proyecto.categoria}
            </p>

            <p>
                <strong>Estado:</strong> {proyecto.estado}
            </p>

            <hr />

            <h3>Descripción</h3>

            <p>
                {proyecto.descripcion}
            </p>

            <hr />

            <h3>Recursos</h3>

            <ul>
                <li>PDF: {proyecto.recursos?.pdf}</li>
                <li>Drive: {proyecto.recursos?.drive}</li>
                <li>GitHub: {proyecto.recursos?.github}</li>
            </ul>

            <hr />

            <h3>Equipo</h3>

            {
                proyecto.equipo?.map((miembro, index) => (
                    <div key={index}>

                        <p>
                            <strong>Nombre:</strong> {miembro.nombre}
                        </p>

                        <p>
                            <strong>Rol:</strong> {miembro.rol}
                        </p>

                    </div>
                ))
            }
        </div>
    )
}

export default DetalleProyecto