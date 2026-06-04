import { useState, useEffect, useRef } from 'react'
import proyectoService from '../services/proyectoService.js'
import FormularioProyecto from './FormularioProyecto.jsx'
import ProyectoCard from './ProyectoCard.jsx'
import RegistroActividad from './RegistroActividad.jsx'
import DetalleProyecto from '../views/DetalleProyecto.jsx'

import '../css/ListaProyectos.css'

function ListaPro() {

    const [proyectos, setProyectos] = useState(
        proyectoService.obtenerProyectosDisponibles()
    )

    const [busqueda, setBusqueda] = useState('')

    const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null)

    const [ultimaModificacion, setUltimaModificacion] = useState('')

    const [contadorCambios, setContadorCambios] = useState(0)

    // useEffect: se ejecuta cada vez que cambia el array de proyectos
    useEffect(() => {
       if (contadorCambios === 0)
        {
        return
        }
        setUltimaModificacion(new Date().toLocaleString())
    },[contadorCambios])

    // Agregar proyecto
    const handleAgregar = (nuevoProyecto) => {

        proyectoService.agregarProyecto(nuevoProyecto)

        setProyectos(
            proyectoService.obtenerProyectosDisponibles()
        )
        setContadorCambios(prev => prev + 1)
    }

    // Eliminar proyecto
    const handleEliminar = (id) => {

        proyectoService.eliminarProyecto(id)

        setProyectos(
            proyectoService.obtenerProyectosDisponibles()
        )
        setContadorCambios(prev => prev + 1)
    }

    // Buscar proyecto
    const handleBuscar = (texto) => {

        setBusqueda(texto)

        if (texto.trim() === '') {

            setProyectos(
                proyectoService.obtenerProyectosDisponibles()
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
                            onVerDetalle={(id) => setProyectoSeleccionado(id)}
                        />

                    ))}

                </ul>

                {proyectoSeleccionado && (
                    <div ref={(el) => el && el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
                        <DetalleProyecto 
                            idProp={proyectoSeleccionado} 
                            onVolver={() => setProyectoSeleccionado(null)} 
                        />
                    </div>
                )}

                <RegistroActividad
                    ultimaModificacion={ultimaModificacion}
                />

            </div>
        </>
    )
}

export default ListaPro