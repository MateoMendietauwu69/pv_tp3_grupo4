import { useState, useContext } from 'react';
import { UsuarioContext } from '../context/UsuarioContext';
import { useNavigate } from 'react-router-dom';
import { Container, Paper, TextField, Button, Typography, Box } from '@mui/material';

const Login = () => {
    const [nombre, setNombre] = useState('');
    const [dni, setDni] = useState('');
    const { login } = useContext(UsuarioContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const datosUsuario = {
            nombre: nombre || "Nombre de prueba",
            dni: dni || "12345678",
            rol: "Alumno",
            institucion: "Escuela de Minas"
        };
        login(datosUsuario);
        navigate('/dashboard');
    };

    return (
        <Container maxWidth="sm" sx={{ mt: 10, display: 'flex', justifyContent: 'center' }}>
            <Paper elevation={10} sx={{ 
                p: 5, 
                width: '100%', 
                borderRadius: 3, 
                backgroundColor: 'rgba(30, 30, 40, 0.95)', 
                color: 'white',
                border: '1px solid #4a148c',
                boxShadow: '0 0 20px rgba(138, 43, 226, 0.4)'
            }}>
                <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 'bold', fontFamily: 'monospace', mb: 3 }}>
                    INICIAR SESIÓN
                </Typography>

                <form onSubmit={handleSubmit}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                        <TextField 
                            label="Nombre" 
                            variant="outlined" 
                            value={nombre} 
                            onChange={(e) => setNombre(e.target.value)} 
                            required 
                            InputLabelProps={{ style: { color: '#b0b0b0' } }}
                            InputProps={{ 
                                style: { color: 'white', borderColor: 'white' },
                                sx: {
                                    fieldset: { borderColor: '#5e35b1' },
                                    '&:hover fieldset': { borderColor: '#7e57c2' },
                                    '&.Mui-focused fieldset': { borderColor: '#b39ddb' },
                                }
                            }}
                        />
                        <TextField 
                            label="DNI" 
                            variant="outlined" 
                            type="password"
                            value={dni} 
                            onChange={(e) => setDni(e.target.value)} 
                            required 
                            InputLabelProps={{ style: { color: '#b0b0b0' } }}
                            InputProps={{ 
                                style: { color: 'white' },
                                sx: {
                                    fieldset: { borderColor: '#5e35b1' },
                                    '&:hover fieldset': { borderColor: '#7e57c2' },
                                    '&.Mui-focused fieldset': { borderColor: '#b39ddb' },
                                }
                            }}
                        />
                        <Button 
                            type="submit" 
                            variant="contained" 
                            size="large"
                            sx={{
                                mt: 2,
                                backgroundColor: '#6200ea',
                                '&:hover': { backgroundColor: '#7c4dff' },
                                fontWeight: 'bold',
                                py: 1.5,
                                fontSize: '1.1rem',
                                borderRadius: 2
                            }}
                        >
                            INGRESAR
                        </Button>
                    </Box>
                </form>
            </Paper>
        </Container>
    );
};

export default Login;
