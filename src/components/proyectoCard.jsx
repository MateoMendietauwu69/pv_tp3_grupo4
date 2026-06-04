const ProyectoCard = ({
    proyecto,
    onEliminar,
    onVerDetalle
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

                <button
                    className='boton'
                    onClick={() => onVerDetalle(id)}
                >
                    Ver detalle
                </button>

            </div>

        </li>
    )
}

export default ProyectoCard