const proyectoService = (() => {
    let proyectos = [
        { 
            id: 1, 
            titulo: "Proyecto 1", 
            categoria: "Gaming", 
            estado: "En curso",
            descripcion: "Proyecto de gaming",
            recursos: {
                pdf: "manual.pdf",
                drive: "drive link",
                github: "github link"
            },
            equipo: [
                { nombre: "David", rol: "Administrador" }
            ]
        },
        { 
            id: 2, 
            titulo: "Proyecto 2", 
            categoria: "Educación", 
            estado: "Completado",
            descripcion: "Proyecto educativo EDM",
            recursos: {
                pdf: "manual.pdf",
                drive: "drive link",
                github: "github link"
            },
            equipo: [
                { nombre: "Mateo", rol: "Lider" }
            ]
        },
        { 
            id: 3, 
            titulo: "Proyecto 3", 
            categoria: "Agricultura", 
            estado: "Pendiente",
            descripcion: "Proyecto de plantamiento de manzanos",
            recursos: {
                pdf: "manual.pdf",
                drive: "drive link",
                github: "github link"
            },
            equipo: [
                { nombre: "Erick", rol: "Estilista de css" }
            ]
        },
        { 
            id: 4, 
            titulo: "Proyecto 4", 
            categoria: "Economia", 
            estado: "En curso",
            descripcion: "Proyecto conteo de dinero de la empresa",
            recursos: {
                pdf: "manual.pdf",
                drive: "drive link",
                github: "github link"
            },
            equipo: [
                { nombre: "Lautaro", rol: "Marketing" }
            ]
        },
        { 
            id: 5, 
            titulo: "Proyecto 5", 
            categoria: "Comida", 
            estado: "Pendiente",
            descripcion: "Proyecto de desarrollo de hamburguesas",
            recursos: {
                pdf: "manual.pdf",
                drive: "drive link",
                github: "github link"
            },
            equipo: [
                { nombre: "David", rol: "Administrador" }
            ]
        }
    ];

    //creamos una funcion para validar la estructura del proyecto antes de agregarlo o actualizarlo
    const esEstructuraValida = (proyecto) => {
        const camposRaiz = ["id", "titulo", "categoria", "estado", "descripcion", "recursos", "equipo"];
        const tieneCamposRaiz = camposRaiz.every(prop => prop in proyecto);
        
        if (!tieneCamposRaiz) return false;

        const recursos = proyecto.recursos;
        const camposRecursos = ["pdf", "drive", "github"];
        const esObjeto = recursos && typeof recursos === "object" && !Array.isArray(recursos);
        const tieneCamposRecursos = esObjeto && camposRecursos.every(prop => prop in recursos);

        if (!tieneCamposRecursos) return false;

        const equipo = proyecto.equipo;
        const esArrayEquipo = Array.isArray(equipo);
        const integrantesValidos = esArrayEquipo && equipo.every(integrante => 
            integrante && typeof integrante === "object" && "nombre" in integrante && "rol" in integrante
        );

        return integrantesValidos;
    };

    const obtenerProyectos = () => [...proyectos];

    const agregarProyecto = (nuevoProyecto) => {
        if (!esEstructuraValida(nuevoProyecto)) {
            console.error("Error al agregar: El objeto no cumple con la estructura requerida de un proyecto.");
            return false;
        }
        proyectos = [...proyectos, nuevoProyecto];
        return true;
    };

    const eliminarProyecto = (id) => {
        proyectos = proyectos.filter(p => p.id !== id);
    };

    const buscarProyecto = (texto) => {
        return proyectos.filter(p => 
            p.titulo.toLowerCase().includes(texto.toLowerCase())
        );
    };

    const actualizarProyecto = (id, proyectoActualizado) => {
        const simulacionProyecto = { id, ...proyectoActualizado };
        
        if (!esEstructuraValida(simulacionProyecto)) {
            console.error("Error al actualizar: Los datos enviados no coinciden con la estructura permitida.");
            return false;
        }

        const indice = proyectos.findIndex(p => p.id === id);
        if (indice !== -1) {
            proyectos[indice] = simulacionProyecto;
            return true;
        }
        
        console.warn(`No se encontró ningún proyecto con el ID: ${id}`);
        return false;
    };

    return {
        obtenerProyectos,
        agregarProyecto,
        eliminarProyecto,
        buscarProyecto,
        actualizarProyecto 
    };
})();

export default proyectoService;