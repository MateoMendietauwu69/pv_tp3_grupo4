import { useState } from 'react'
import proyectoService from '../services/proyectoService.js'
import FormularioProyecto from './FormularioProyecto.jsx'
import '../css/ListaProyectos.css'
import DetalleProyecto from './DetalleProyecto.jsx'
// 1. IMPORTAMOS EL COMPONENTE CARD:
import ProyectoCard from './proyectoCard.jsx' 

function ListaPro() {

    const [proyectos, setProyectos] = useState(proyectoService.obtenerProyectos())
    const [busqueda, setBusqueda] = useState('')
    const [nuevoTitulo, setNuevoTitulo] = useState('')
    const [nuevaCategoria, setNuevaCategoria] = useState('')
    const [nuevoEstado, setNuevoEstado] = useState('Pendiente')
    const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null)

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

                <FormularioProyecto onAgregar={handleAgregar} />

                <ul>
                    {proyectos.map(proyecto => (
                        /* 2. ACÁ ESTÁ EL REFACTOR: Usamos el componente y le pasamos las props */
                        <ProyectoCard 
                            key={proyecto.id} 
                            proyecto={proyecto}
                            onSeleccionar={setProyectoSeleccionado}
                            onEliminar={handleEliminar}
                        />
                    ))}
                </ul>
                <DetalleProyecto proyecto={proyectoSeleccionado} />
            </div>
        </>
    )
}

export default ListaPro