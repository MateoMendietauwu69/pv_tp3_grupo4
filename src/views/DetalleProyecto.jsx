import { useParams } from 'react-router-dom'
import proyectoService from '../services/proyectoService'

const DetalleProyecto = () => {

    const { id } = useParams()
    const proyecto = proyectoService.obtenerPorId(id)

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

            <p>
                <strong>Descripción:</strong> {proyecto.descripcion}
            </p>

            <p>
                <strong>Fecha:</strong> {proyecto.fecha}
            </p>

            <h3>Recursos</h3>

            <ul>
                <li>
                    PDF: {proyecto.recursos?.pdf}
                </li>

                <li>
                    Drive: {proyecto.recursos?.drive}
                </li>

                <li>
                    GitHub: {proyecto.recursos?.github}
                </li>
            </ul>

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