const proyectoService = (() => {
    let proyectos = [
        { 
            id: 1, 
            titulo: "Proyecto 1", 
            categoria: "Gaming", 
            estado: "En curso",
        },
        { 
            id: 2, 
            titulo: "Proyecto 2", 
            categoria: "Educación", 
            estado: "Completado",
        },
        { 
            id: 3, 
            titulo: "Proyecto 3", 
            categoria: "Agricultura", 
            estado: "Pendiente",
        },
        { 
            id: 4, 
            titulo: "Proyecto 4", 
            categoria: "Economia", 
            estado: "En curso",
        },
        { 
            id: 5, 
            titulo: "Proyecto 5", 
            categoria: "Comida", 
            estado: "Pendiente",
        }
    ];

    //funciones flecha 
    const obtenerProyectos = () => [...proyectos];

    const agregarProyecto = (nuevoProyecto) => {
        proyectos = [...proyectos, nuevoProyecto];
    };

    const eliminarProyecto = (id) => {
        proyectos = proyectos.filter(p => p.id !== id);
    };

    const buscarProyecto = (texto) => {
        return proyectos.filter(p => 
            p.titulo.toLowerCase().includes(texto.toLowerCase())
        );
    };

    return {
        obtenerProyectos,
        agregarProyecto,
        eliminarProyecto,
        buscarProyecto
    };
})();

export default proyectoService;