import { useState } from "react";
import "../css/FormularioProyecto.css";

function FormularioProyecto({ onAgregar }) {

  const [formulario, setFormulario] = useState({
    titulo: "",
    categoria: "",
    estado: "Pendiente",
    descripcion: "",
    fecha: "",
  });

  const {
    titulo,
    categoria,
    estado,
    descripcion,
    fecha
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
    };

    onAgregar(nuevoProyecto);

    setFormulario({
      titulo: "",
      categoria: "",
      estado: "Pendiente",
      descripcion: "",
      fecha: "",
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

        <button type="submit">
          Agregar
        </button>

      </form>

    </div>
  );
}

export default FormularioProyecto;