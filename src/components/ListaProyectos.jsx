import proyectoService from '../services/proyectoService.js'

function ListaPro() {

    const pro = proyectoService.obtenerProyectos()

    return(
        <>
            <div>
                <h2>Lista de Proyectos</h2>
                <ul>
                    {pro.map(proyecto =>(
                        <li>
                            {proyecto.titulo}
                            {proyecto.categoria}
                            {proyecto.estado}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default ListaPro