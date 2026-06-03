import { Link } from 'react-router-dom'

const ProyectoCard = ({
    proyecto,
    onEliminar
}) => {

    const {
        id,
        titulo,
        categoria,
        estado
    } = proyecto

    return (

        <li id='Proyectos'>

            <div>
                {titulo} - {categoria} - {estado}
            </div>

            <div id='botones'>

                <button
                    className='boton'
                    onClick={() => onEliminar(id)}
                >
                    Eliminar
                </button>

                <Link
                    className='boton'
                    to={`/proyectos/${id}`}
                >
                    Ver detalle
                </Link>

            </div>

        </li>
    )
}

export default ProyectoCard