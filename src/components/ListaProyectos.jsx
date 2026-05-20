import { useState } from 'react'
import proyectoService from '../services/proyectoService.js'
import FormularioProyecto from './FormularioProyecto.jsx'
import '../css/ListaProyectos.css'

function ListaPro() {

    const [proyectos, setProyectos] = useState(proyectoService.obtenerProyectos())
    const [busqueda, setBusqueda] = useState('')

    // Callback que recibe el nuevo proyecto desde FormularioProyecto
    const handleAgregar = (nuevoProyecto) => {
        proyectoService.agregarProyecto(nuevoProyecto)
        setProyectos(proyectoService.obtenerProyectos())
    }

    const handleEliminar = (id) => {
        proyectoService.eliminarProyecto(id)
        setProyectos(proyectoService.obtenerProyectos())
    }

    const handleBuscar = (texto) => {
        setBusqueda(texto)
        if (texto.trim() === '') {
            setProyectos(proyectoService.obtenerProyectos())
        } else {
            setProyectos(proyectoService.buscarProyecto(texto))
        }
    }

    return(
        <>
            <div>
                <h2>Lista de Proyectos</h2>

                <input
                    type="text"
                    placeholder="Buscar proyecto..."
                    value={busqueda}
                    onChange={(e) => handleBuscar(e.target.value)}
                />

                {/* Componente FormularioProyecto separado */}
                <FormularioProyecto onAgregar={handleAgregar} />

                <ul>
                    {proyectos.map((proyecto) => {
                        // Desestructuración de cada proyecto
                        const { id, titulo, categoria, estado, descripcion, fecha } = proyecto
                        return (
                            <li key={id}>
                                <strong>{titulo}</strong> - {categoria} - {estado}
                                {descripcion && <> | {descripcion}</>}
                                {fecha && <> | {fecha}</>}
                                <button onClick={() => handleEliminar(id)}>Eliminar</button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default ListaPro
