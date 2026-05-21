import { useState } from 'react'
import proyectoService from '../services/proyectoService.js'
import FormularioProyecto from './FormularioProyecto.jsx'
import '../css/ListaProyectos.css'
import DetalleProyecto from './DetalleProyecto.jsx'

function ListaPro() {

    const [proyectos, setProyectos] = useState(proyectoService.obtenerProyectos())
    const [busqueda, setBusqueda] = useState('')
    const [nuevoTitulo, setNuevoTitulo] = useState('')
    const [nuevaCategoria, setNuevaCategoria] = useState('')
    const [nuevoEstado, setNuevoEstado] = useState('Pendiente')
    const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null)

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

                <input id='busqueda'
                    type="text"
                    placeholder="Buscar proyecto..."
                    value={busqueda}
                    onChange={(e) => handleBuscar(e.target.value)}
                />

                {/* Componente FormularioProyecto separado */}
                <FormularioProyecto onAgregar={handleAgregar} />

                <ul>
                    {proyectos.map(proyecto => (
                        <li id='Proyectos' key={proyecto.id}>
                            <div>
                            {proyecto.titulo} - {proyecto.categoria} - {proyecto.estado}
                            </div>
                            <div id='botones'>
                            <button className='boton' onClick={() => handleEliminar(proyecto.id)}>Eliminar</button>
                            <button className='boton' onClick={() => setProyectoSeleccionado(proyecto)}>Ver detalle</button>
                            </div>
                        </li>
                    ))}
                </ul>
                <DetalleProyecto proyecto={proyectoSeleccionado} />
            </div>
        </>
    )
}

export default ListaPro
