import { useState } from "react";

import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Button,
  Paper
} from "@mui/material";

const FormularioProyecto = ({ onAgregar }) => {

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

    <Paper
      elevation={3}
      sx={{
        p: 3,
        mt: 3,
        mb: 3
      }}
    >

      <Typography
        variant="h5"
        gutterBottom
      >
        Agregar Proyecto
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2
        }}
      >

        <TextField
          label="Título del proyecto"
          name="titulo"
          value={titulo}
          onChange={handleChange}
          fullWidth
          required
        />

        <TextField
          label="Categoría"
          name="categoria"
          value={categoria}
          onChange={handleChange}
          fullWidth
          required
        />

        <TextField
          select
          label="Estado"
          name="estado"
          value={estado}
          onChange={handleChange}
          fullWidth
        >
          <MenuItem value="Pendiente">
            Pendiente
          </MenuItem>

          <MenuItem value="En curso">
            En curso
          </MenuItem>

          <MenuItem value="Completado">
            Completado
          </MenuItem>

        </TextField>

        <TextField
          label="Descripción del proyecto"
          name="descripcion"
          value={descripcion}
          onChange={handleChange}
          multiline
          rows={3}
          fullWidth
        />

        <TextField
          type="date"
          label="Fecha"
          name="fecha"
          value={fecha}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true
          }}
          fullWidth
        />

        <TextField
          label="Link PDF"
          name="pdf"
          value={pdf}
          onChange={handleChange}
          fullWidth
        />

        <TextField
          label="Link Drive"
          name="drive"
          value={drive}
          onChange={handleChange}
          fullWidth
        />

        <TextField
          label="Link Github"
          name="github"
          value={github}
          onChange={handleChange}
          fullWidth
        />

        <Typography variant="h6">
          Integrante
        </Typography>

        <TextField
          label="Nombre integrante"
          name="nombre"
          value={nombre}
          onChange={handleChange}
          fullWidth
        />

        <TextField
          label="Rol integrante"
          name="rol"
          value={rol}
          onChange={handleChange}
          fullWidth
        />

        <Button
          type="submit"
          variant="contained"
          size="large"
        >
          Agregar Proyecto
        </Button>

      </Box>

    </Paper>
  );
};

export default FormularioProyecto;