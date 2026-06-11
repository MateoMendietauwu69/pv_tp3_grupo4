import { useContext, useState } from "react";
import { UsuarioContext } from "../context/UsuarioContext";
import { Container, Typography, Paper, Grid, Button, TextField, Box } from "@mui/material";

const PerfilUsuario = () => {
    const { usuario, actualizarPerfil } = useContext(UsuarioContext);

    const [editando, setEditando] = useState(false);
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
        <Container maxWidth="md" sx={{ mt: { xs: 4, md: 8 } }}>
            <Typography variant="h3" gutterBottom align="center" sx={{ color: 'white', fontWeight: 'bold' }}>
                Mi Perfil
            </Typography>
            
            <Paper elevation={0} sx={{ 
                p: { xs: 3, md: 5 }, 
                mt: 4, 
                backgroundColor: 'rgba(30, 30, 45, 0.7)', 
                color: 'white',
                borderRadius: 4,
                border: '1px solid rgba(255,255,255,0.05)',
            }}>
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6}>
                        {editando ? (
                            <TextField 
                                fullWidth 
                                label="Nombre" 
                                name="nombre"
                                variant="filled"
                                value={datosActualizados.nombre} 
                                onChange={handleChange} 
                                sx={{
                                    "& .MuiInputBase-input": { color: "white" },
                                    "& .MuiInputLabel-root": { color: "white" },
                                    "& .MuiInputLabel-root.Mui-focused": { color: "#b0b0b0" },
                                    backgroundColor: "#7c4dff",
                                    borderRadius: "10px",
                                    outline: "2px solid white"
                                }}
                            />
                        ) : (
                            <Box>
                                <Typography variant="caption" sx={{ color: '#a0a0b0', textTransform: 'uppercase', letterSpacing: 1 }}>Nombre</Typography>
                                <Typography variant="h6" sx={{ fontWeight: '500' }}>{usuario.nombre}</Typography>
                            </Box>
                        )}
                    </Grid>
                    
                    <Grid item xs={12} md={6}>
                        {editando ? (
                            <TextField 
                                fullWidth 
                                label="DNI" 
                                name="dni"
                                variant="filled"
                                value={datosActualizados.dni} 
                                onChange={handleChange} 
                                sx={{
                                    "& .MuiInputBase-input": { color: "white" },
                                    "& .MuiInputLabel-root": { color: "white" },
                                    "& .MuiInputLabel-root.Mui-focused": { color: "#b0b0b0" },
                                    backgroundColor: "#7c4dff",
                                    borderRadius: "10px",
                                    outline: "2px solid white"
                                }}
                            />
                        ) : (
                            <Box>
                                <Typography variant="caption" sx={{ color: '#a0a0b0', textTransform: 'uppercase', letterSpacing: 1 }}>DNI</Typography>
                                <Typography variant="h6" sx={{ fontWeight: '500' }}>{usuario.dni}</Typography>
                            </Box>
                        )}
                    </Grid>

                    <Grid item xs={12} md={6}>
                        {editando ? (
                            <TextField 
                                fullWidth 
                                label="Rol" 
                                name="rol"
                                variant="filled"
                                value={datosActualizados.rol} 
                                onChange={handleChange} 
                                sx={{
                                    "& .MuiInputBase-input": { color: "white" },
                                    "& .MuiInputLabel-root": { color: "white" },
                                    "& .MuiInputLabel-root.Mui-focused": { color: "#b0b0b0" },
                                    backgroundColor: "#7c4dff",
                                    borderRadius: "10px",
                                    outline: "2px solid white"
                                }}
                            />
                        ) : (
                            <Box>
                                <Typography variant="caption" sx={{ color: '#a0a0b0', textTransform: 'uppercase', letterSpacing: 1 }}>Rol</Typography>
                                <Typography variant="h6" sx={{ fontWeight: '500' }}>{usuario.rol}</Typography>
                            </Box>
                        )}
                    </Grid>

                    <Grid item xs={12} md={6}>
                        {editando ? (
                            <TextField 
                                fullWidth 
                                label="Institución" 
                                name="institucion"
                                variant="filled"
                                value={datosActualizados.institucion} 
                                onChange={handleChange} 
                                sx={{
                                    "& .MuiInputBase-input": { color: "white" },
                                    "& .MuiInputLabel-root": { color: "white" },
                                    "& .MuiInputLabel-root.Mui-focused": { color: "#b0b0b0" },
                                    backgroundColor: "#7c4dff",
                                    borderRadius: "10px",
                                    outline: "2px solid white"
                                }}
                            />
                        ) : (
                            <Box>
                                <Typography variant="caption" sx={{ color: '#a0a0b0', textTransform: 'uppercase', letterSpacing: 1 }}>Institución</Typography>
                                <Typography variant="h6" sx={{ fontWeight: '500' }}>{usuario.institucion}</Typography>
                            </Box>
                        )}
                    </Grid>

                    <Grid item xs={12} sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
                        {editando ? (
                            <>
                                <Button variant="text" color="inherit" onClick={() => setEditando(false)}>
                                    Cancelar
                                </Button>
                                <Button variant="contained" color="secondary" onClick={handleGuardar} sx={{ fontWeight: 'bold' }}>
                                    Guardar Cambios
                                </Button>
                            </>
                        ) : (
                            <Button variant="outlined" color="primary" onClick={() => setEditando(true)} sx={{
                                color: '#b388ff', borderColor: '#b388ff', '&:hover': { borderColor: '#7c4dff', backgroundColor: 'rgba(124, 77, 255, 0.1)' }
                            }}>
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