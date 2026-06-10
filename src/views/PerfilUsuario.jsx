import { useContext, useState } from "react";
import { UsuarioContext } from "../context/UsuarioContext";
import { Container, Typography, Paper, Grid, Button, TextField } from "@mui/material";
import '../css/PerfilUsuarios.css';

const PerfilUsuario = () => {
    const { usuario, actualizarPerfil } = useContext(UsuarioContext);

    const [editando, setEditando] = useState(false);
    
    // Estado local para los datos actualizados del formulario
    const [datosActualizados, setDatosActualizados] = useState(usuario);

    const handleGuardar = () => {
        actualizarPerfil(datosActualizados);
        setEditando(false);
    };

    const handleChange = (e) => {
        setDatosActualizados({
            ...datosActualizados,
            [e.target.name]: e.target.value
        });
    };

    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant="h3" gutterBottom>Mi Perfil</Typography>
            <Paper elevation={3} sx={{ p: 4, mt: 3 }} className="lista">
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        {editando ? (
                            <TextField 
                                fullWidth 
                                label="Nombre" 
                                name="nombre"
                                value={datosActualizados.nombre} 
                                onChange={handleChange} 
                            />
                        ) : (
                            <Typography variant="h6">Nombre: {usuario.nombre}</Typography>
                        )}
                    </Grid>
                    <Grid item xs={12}>
                        {editando ? (
                            <TextField 
                                fullWidth 
                                label="DNI" 
                                name="dni"
                                value={datosActualizados.dni} 
                                onChange={handleChange} 
                            />
                        ) : (
                            <Typography variant="h6">DNI: {usuario.dni}</Typography>
                        )}
                    </Grid>
                    <Grid item xs={12}>
                        {editando ? (
                            <TextField 
                                fullWidth 
                                label="Rol" 
                                name="rol"
                                value={datosActualizados.rol} 
                                onChange={handleChange} 
                            />
                        ) : (
                            <Typography variant="h6">Rol: {usuario.rol}</Typography>
                        )}
                    </Grid>
                    <Grid item xs={12}>
                        {editando ? (
                            <TextField 
                                fullWidth 
                                label="Institución" 
                                name="institucion"
                                value={datosActualizados.institucion} 
                                onChange={handleChange} 
                            />
                        ) : (
                            <Typography variant="h6">Institución: {usuario.institucion}</Typography>
                        )}
                    </Grid>
                    <Grid item xs={12}>
                        {editando ? (
                            <Button variant="contained" color="primary" onClick={handleGuardar}>
                                Guardar
                            </Button>
                        ) : (
                            <Button variant="outlined" color="primary" onClick={() => setEditando(true)}>
                                Editar Perfil
                            </Button>
                        )}
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
};

export default PerfilUsuario;