import { useState } from 'react'
import proyectoService from '../services/proyectoService.js'
import '../css/ListaProyectos.css'
function ListaPro() {

    const [proyectos, setProyectos] = useState(proyectoService.obtenerProyectos())
    const [busqueda, setBusqueda] = useState('')
    const [nuevoTitulo, setNuevoTitulo] = useState('')
    const [nuevaCategoria, setNuevaCategoria] = useState('')
    const [nuevoEstado, setNuevoEstado] = useState('Pendiente')

    const handleAgregar = () => {
        if (nuevoTitulo.trim() === '' || nuevaCategoria.trim() === '') return
        const nuevo = {
            id: Date.now(),
            titulo: nuevoTitulo,
            categoria: nuevaCategoria,
            estado: nuevoEstado
        }
        proyectoService.agregarProyecto(nuevo)
        setProyectos(proyectoService.obtenerProyectos())
        setNuevoTitulo('')
        setNuevaCategoria('')
        setNuevoEstado('Pendiente')
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

                <h3>Agregar Proyecto</h3>
                <input
                    type="text"
                    placeholder="Titulo"
                    value={nuevoTitulo}
                    onChange={(e) => setNuevoTitulo(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Categoria"
                    value={nuevaCategoria}
                    onChange={(e) => setNuevaCategoria(e.target.value)}
                />
                <select value={nuevoEstado} onChange={(e) => setNuevoEstado(e.target.value)}>
                    <option value="Pendiente">Pendiente</option>
                    <option value="En curso">En curso</option>
                    <option value="Completado">Completado</option>
                </select>
                <button onClick={handleAgregar}>Agregar</button>

                <ul>
                    {proyectos.map(proyecto => (
                        <li key={proyecto.id}>
                            {proyecto.titulo} - {proyecto.categoria} - {proyecto.estado}
                            <button onClick={() => handleEliminar(proyecto.id)}>Eliminar</button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default ListaPro
