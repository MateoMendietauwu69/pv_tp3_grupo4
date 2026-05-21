import { useState } from 'react'
import proyectoService from '../services/proyectoService.js'
import FormularioProyecto from './FormularioProyecto.jsx'
import ProyectoCard from './ProyectoCard.jsx'
import DetalleProyecto from './DetalleProyecto.jsx'

import '../css/ListaProyectos.css'

function ListaPro() {

    const [proyectos, setProyectos] = useState(
        proyectoService.obtenerProyectos()
    )

    const [busqueda, setBusqueda] = useState('')

    const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null)

    // Agregar proyecto
    const handleAgregar = (nuevoProyecto) => {

        proyectoService.agregarProyecto(nuevoProyecto)

        setProyectos(
            proyectoService.obtenerProyectos()
        )
    }

    // Eliminar proyecto
    const handleEliminar = (id) => {

        proyectoService.eliminarProyecto(id)

        setProyectos(
            proyectoService.obtenerProyectos()
        )
    }

    // Buscar proyecto
    const handleBuscar = (texto) => {

        setBusqueda(texto)

        if (texto.trim() === '') {

            setProyectos(
                proyectoService.obtenerProyectos()
            )

        } else {

            setProyectos(
                proyectoService.buscarProyecto(texto)
            )
        }
    }

    return(
        <>
            <div>

                <h2>Lista de Proyectos</h2>

                <input
                    id='busqueda'
                    type="text"
                    placeholder="Buscar proyecto..."
                    value={busqueda}
                    onChange={(e) => handleBuscar(e.target.value)}
                />

                <FormularioProyecto
                    onAgregar={handleAgregar}
                />

                <ul>

                    {proyectos.map((proyecto) => (

                        <ProyectoCard
                            key={proyecto.id}
                            proyecto={proyecto}
                            onEliminar={handleEliminar}
                            onSeleccionar={setProyectoSeleccionado}
                        />

                    ))}

                </ul>

                <DetalleProyecto
                    proyecto={proyectoSeleccionado}
                />

            </div>
        </>
    )
}

export default ListaPro