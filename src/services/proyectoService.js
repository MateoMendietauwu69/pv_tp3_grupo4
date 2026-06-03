let proyectos = [
  {
    id: 1,
    titulo: "Proyecto 1",
    categoria: "Gaming",
    estado: "En curso",
    disponible: true,

    descripcion:
      "Proyecto enfocado en el desarrollo de una plataforma gaming interactiva para jugadores online.",

    fecha: "2026-05-20",

    recursos: {
      pdf: "manual_gaming.pdf",
      drive: "https://drive.google.com/gaming",
      github: "https://github.com/gaming-project",
    },

    equipo: [
      {
        nombre: "Juan",
        rol: "Frontend",
      },
      {
        nombre: "Lucia",
        rol: "Backend",
      },
    ],
  },

  {
    id: 2,
    titulo: "Proyecto 2",
    categoria: "Educación",
    estado: "Completado",
    disponible: true,

    descripcion:
      "Sistema educativo pensado para mejorar el aprendizaje virtual en escuelas secundarias.",

    fecha: "2026-05-18",

    recursos: {
      pdf: "manual_educacion.pdf",
      drive: "https://drive.google.com/educacion",
      github: "https://github.com/educacion-project",
    },

    equipo: [
      {
        nombre: "Ana",
        rol: "Diseñadora UX/UI",
      },
      {
        nombre: "Pedro",
        rol: "Frontend",
      },
    ],
  },

  {
    id: 3,
    titulo: "Proyecto 3",
    categoria: "Agricultura",
    estado: "Pendiente",
    disponible: true,

    descripcion:
      "Aplicación destinada al monitoreo de cultivos y administración agrícola inteligente.",

    fecha: "2026-05-25",

    recursos: {
      pdf: "manual_agricultura.pdf",
      drive: "https://drive.google.com/agricultura",
      github: "https://github.com/agricultura-project",
    },

    equipo: [
      {
        nombre: "Marcos",
        rol: "Analista de Datos",
      },
      {
        nombre: "Sofia",
        rol: "Backend",
      },
    ],
  },

  {
    id: 4,
    titulo: "Proyecto 4",
    categoria: "Economia",
    estado: "En curso",
    disponible: true,

    descripcion:
      "Sistema de gestión económica para controlar gastos, ingresos y estadísticas financieras.",

    fecha: "2026-05-27",

    recursos: {
      pdf: "manual_economia.pdf",
      drive: "https://drive.google.com/economia",
      github: "https://github.com/economia-project",
    },

    equipo: [
      {
        nombre: "Carlos",
        rol: "Backend",
      },
      {
        nombre: "Valentina",
        rol: "Frontend",
      },
    ],
  },

  {
    id: 5,
    titulo: "Proyecto 5",
    categoria: "Comida",
    estado: "Pendiente",
    disponible: true,

    descripcion:
      "Aplicación para pedidos de comida online con seguimiento en tiempo real y pagos digitales.",

    fecha: "2026-05-30",

    recursos: {
      pdf: "manual_comida.pdf",
      drive: "https://drive.google.com/comida",
      github: "https://github.com/comida-project",
    },

    equipo: [
      {
        nombre: "Matias",
        rol: "Frontend",
      },
      {
        nombre: "Camila",
        rol: "Tester QA",
      },
    ],
  },
];
const obtenerPorId = (id) => {
  return proyectos.find((proyecto) => proyecto.id === parseInt(id));
};

const obtenerProyectos = () => {
  return [...proyectos];
};

const obtenerProyectosDisponibles = () => {
  return obtenerProyectos().filter((proyecto) => proyecto.disponible === true);
};

const agregarProyecto = (nuevoProyecto) => {
  proyectos.push({ ...nuevoProyecto, disponible: true });
};

const eliminarProyecto = (id) => {
  const proyecto = proyectos.find((proyecto) => proyecto.id === id);

  if (proyecto) {
    proyecto.disponible = false;
  }
};

const buscarProyecto = (texto) => {
  return proyectos.filter((proyecto) =>
    proyecto.titulo.toLowerCase().includes(texto.toLowerCase()),
  );
};

export default {
  obtenerPorId,

  obtenerProyectos,

  obtenerProyectosDisponibles,

  agregarProyecto,

  eliminarProyecto,

  buscarProyecto,
};
