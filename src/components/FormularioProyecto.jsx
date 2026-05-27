import { useState } from "react";
import "../css/FormularioProyecto.css";


function FormularioProyecto({ onAgregar }) {

  const [formulario, setFormulario] = useState({
    titulo: "",
    categoria: "",
    estado: "Pendiente",
    descripcion: "",
    fecha: "",
    pdf: "",
    drive: "",
    github: "",
    nombre: "",
    rol: "",
  });

  const {
    titulo,
    categoria,
    estado,
    descripcion,
    fecha,
    pdf,
    drive,
    github,
    nombre,
    rol
  } = formulario;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario({
      ...formulario,
      [name]: value,
    });
  };


  const handleSubmit = (e) => {

    e.preventDefault();

    if (
      titulo.trim() === "" ||
      categoria.trim() === ""
    ) return;

    const nuevoProyecto = {

      id: Date.now(),

      titulo,
      categoria,
      estado,
      descripcion,
      fecha,

      recursos: {
        pdf,
        drive,
        github,
      },

      equipo: [{
        nombre,
        rol,
      }]

    };

    onAgregar(nuevoProyecto);

    setFormulario({
      titulo: "",
      categoria: "",
      estado: "Pendiente",
      descripcion: "",
      fecha: "",
      pdf: "",
      drive: "",
      github: "",
      nombre: "",
      rol: "",
    });
  };

  return (
    <div className="formulario-container">

      <h3>Agregar Proyecto</h3>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="titulo"
          placeholder="Título del proyecto"
          value={titulo}
          onChange={handleChange}
        />

        <input
          type="text"
          name="categoria"
          placeholder="Categoría"
          value={categoria}
          onChange={handleChange}
        />

        <select
          name="estado"
          value={estado}
          onChange={handleChange}
        >
          <option value="Pendiente">
            Pendiente
          </option>

          <option value="En curso">
            En curso
          </option>

          <option value="Completado">
            Completado
          </option>

        </select>

        <input
          type="text"
          name="descripcion"
          placeholder="Descripción del proyecto"
          value={descripcion}
          onChange={handleChange}
        />

        <input
          type="date"
          name="fecha"
          value={fecha}
          onChange={handleChange}
        />

        <input 
          type="text"
          name="pdf"
          placeholder="Link PDF"
          value={pdf}
          onChange={handleChange}
        />

        <input 
          type="text"
          name="drive"
          placeholder="Link Drive"
          value={drive}
          onChange={handleChange}
        />

        <input 
          type="text"
          name="github"
          placeholder="Link Github"
          value={github}
          onChange={handleChange}
        />

        <input 
          type="text"
          name="nombre"
          placeholder="Nombre integrante"
          value={nombre}
          onChange={handleChange}
        />

        <input 
          type="text"
          name="rol"
          placeholder="Rol integrante"
          value={rol}
          onChange={handleChange}
        />

        <button type="submit">
          Agregar
        </button>

      </form>

    </div>
  );
}

export default FormularioProyecto;