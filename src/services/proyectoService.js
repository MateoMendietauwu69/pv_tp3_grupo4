let proyectos = [

    { 
        id: 1, 
        titulo: "Proyecto 1", 
        categoria: "Gaming", 
        estado: "En curso",

        descripcion:
            "Proyecto enfocado en el desarrollo de una plataforma gaming interactiva para jugadores online.",

        fecha: "2026-05-20",

        recursos: {
            pdf: "manual_gaming.pdf",
            drive: "https://drive.google.com/gaming",
            github: "https://github.com/gaming-project"
        },

        equipo: [
            {
                nombre: "Juan",
                rol: "Frontend"
            },
            {
                nombre: "Lucia",
                rol: "Backend"
            }
        ]
    },

    { 
        id: 2, 
        titulo: "Proyecto 2", 
        categoria: "Educación", 
        estado: "Completado",

        descripcion:
            "Sistema educativo pensado para mejorar el aprendizaje virtual en escuelas secundarias.",

        fecha: "2026-05-18",

        recursos: {
            pdf: "manual_educacion.pdf",
            drive: "https://drive.google.com/educacion",
            github: "https://github.com/educacion-project"
        },

        equipo: [
            {
                nombre: "Ana",
                rol: "Diseñadora UX/UI"
            },
            {
                nombre: "Pedro",
                rol: "Frontend"
            }
        ]
    },

    { 
        id: 3, 
        titulo: "Proyecto 3", 
        categoria: "Agricultura", 
        estado: "Pendiente",

        descripcion:
            "Aplicación destinada al monitoreo de cultivos y administración agrícola inteligente.",

        fecha: "2026-05-25",

        recursos: {
            pdf: "manual_agricultura.pdf",
            drive: "https://drive.google.com/agricultura",
            github: "https://github.com/agricultura-project"
        },

        equipo: [
            {
                nombre: "Marcos",
                rol: "Analista de Datos"
            },
            {
                nombre: "Sofia",
                rol: "Backend"
            }
        ]
    },

    { 
        id: 4, 
        titulo: "Proyecto 4", 
        categoria: "Economia", 
        estado: "En curso",

        descripcion:
            "Sistema de gestión económica para controlar gastos, ingresos y estadísticas financieras.",

        fecha: "2026-05-27",

        recursos: {
            pdf: "manual_economia.pdf",
            drive: "https://drive.google.com/economia",
            github: "https://github.com/economia-project"
        },

        equipo: [
            {
                nombre: "Carlos",
                rol: "Backend"
            },
            {
                nombre: "Valentina",
                rol: "Frontend"
            }
        ]
    },

    { 
        id: 5, 
        titulo: "Proyecto 5", 
        categoria: "Comida", 
        estado: "Pendiente",

        descripcion:
            "Aplicación para pedidos de comida online con seguimiento en tiempo real y pagos digitales.",

        fecha: "2026-05-30",

        recursos: {
            pdf: "manual_comida.pdf",
            drive: "https://drive.google.com/comida",
            github: "https://github.com/comida-project"
        },

        equipo: [
            {
                nombre: "Matias",
                rol: "Frontend"
            },
            {
                nombre: "Camila",
                rol: "Tester QA"
            }
        ]
    }

];
const obtenerProyectos = () => {

    return [...proyectos]
}

const agregarProyecto = (nuevoProyecto) => {

    proyectos.push(nuevoProyecto)
}

const eliminarProyecto = (id) => {

    const index = proyectos.findIndex(
        proyecto => proyecto.id === id
    )

    if (index !== -1) {

        proyectos.splice(index, 1)
    }
}

const buscarProyecto = (texto) => {

    return proyectos.filter((proyecto) =>

        proyecto.titulo
            .toLowerCase()
            .includes(texto.toLowerCase())
    )
}

export default {

    obtenerProyectos,

    agregarProyecto,

    eliminarProyecto,

    buscarProyecto
}