import { useState } from "react";
import "../css/FormularioProyecto.css";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

function FormularioProyecto({ onAgregar }) {
  const [formulario, setFormulario] = useState({
    titulo: "",
    categoria: "",
    estado: "Pendiente",
    descripcion: "",
    fecha: "",
  });

  const { titulo, categoria, estado, descripcion, fecha } = formulario;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormulario({
      ...formulario,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (titulo.trim() === "" || categoria.trim() === "") return;

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
        <TextField
          fullWidth
          margin="normal"
          label="Título del proyecto"
          name="titulo"
          value={titulo}
          onChange={handleChange}
        />

        <TextField
          fullWidth
          margin="normal"
          label="Categoría"
          name="categoria"
          value={categoria}
          onChange={handleChange}
        />

        <TextField
          select
          fullWidth
          margin="normal"
          label="Estado"
          name="estado"
          value={estado}
          onChange={handleChange}
        >
          <MenuItem value="Pendiente">Pendiente</MenuItem>
          <MenuItem value="En curso">En curso</MenuItem>
          <MenuItem value="Completado">Completado</MenuItem>
        </TextField>

        <TextField
          fullWidth
          margin="normal"
          label="Descripción del proyecto"
          name="descripcion"
          value={descripcion}
          onChange={handleChange}
        />

        <TextField
          fullWidth
          margin="normal"
          type="date"
          name="fecha"
          value={fecha}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
        />

        <Button
          variant="contained"
          type="submit"
          sx={{ marginTop: "15px" }}
        >
          Agregar
        </Button>
      </form>
    </div>
  );
}

export default FormularioProyecto;