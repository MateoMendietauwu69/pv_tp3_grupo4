const proyectoService = (() => {
    let proyectos = [
        { 
            id: 1, 
            titulo: "Proyecto 1", 
            categoria: "Gaming", 
            estado: "En curso",
            descripcion: "Proyecto de gaming " ,
            recursos: {
                    pdf: "manual.pdf",
                    drive: "drive link",
                    github: "github link"
                    },
            equipo: [
            {
            nombre: "Juan",
            rol: "Frontend"
            }
            ]
        },
        { 
            id: 2, 
            titulo: "Proyecto 2", 
            categoria: "Educación", 
            estado: "Completado",
            descripcion: "Proyecto de gaming " ,
            recursos: {
                    pdf: "manual.pdf",
                    drive: "drive link",
                    github: "github link"
                    },
            equipo: [
            {
            nombre: "Juan",
            rol: "Frontend"
            }
            ]
        },
        { 
            id: 3, 
            titulo: "Proyecto 3", 
            categoria: "Agricultura", 
            estado: "Pendiente",
            descripcion: "Proyecto de gaming " ,
            recursos: {
                    pdf: "manual.pdf",
                    drive: "drive link",
                    github: "github link"
                    },
            equipo: [
            {
            nombre: "Juan",
            rol: "Frontend"
            }
            ]
        },
        { 
            id: 4, 
            titulo: "Proyecto 4", 
            categoria: "Economia", 
            estado: "En curso",
            descripcion: "Proyecto de gaming " ,
            recursos: {
                    pdf: "manual.pdf",
                    drive: "drive link",
                    github: "github link"
                    },
            equipo: [
            {
            nombre: "Juan",
            rol: "Frontend"
            }
            ]
        },
        { 
            id: 5, 
            titulo: "Proyecto 5", 
            categoria: "Comida", 
            estado: "Pendiente",
            descripcion: "Proyecto de gaming " ,
            recursos: {
                    pdf: "manual.pdf",
                    drive: "drive link",
                    github: "github link"
                    },
            equipo: [
            {
            nombre: "Juan",
            rol: "Frontend"
            }
            ]
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
//export default obtenerProyectos;
//export default agregarProyecto;
//export default eliminarProyecto;
//export default buscarProyecto;
