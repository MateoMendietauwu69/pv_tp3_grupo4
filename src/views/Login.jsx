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
        <Container maxWidth="xs" sx={{ mt: 12, display: 'flex', justifyContent: 'center' }}>
            <Paper elevation={24} sx={{ 
                p: { xs: 4, md: 5 }, 
                width: '100%', 
                borderRadius: 4, 
                backgroundColor: 'rgba(20, 20, 35, 0.85)', 
                backdropFilter: 'blur(10px)',
                color: 'white',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 8px 32px rgba(98, 0, 234, 0.2)'
            }}>
                <Box sx={{ textAlign: 'center', mb: 4 }}>
                    <Typography variant="h4" sx={{ 
                        fontWeight: 'bold', 
                        fontFamily: 'inherit',
                        color: 'white',
                        letterSpacing: '1px'
                    }}>
                        BIENVENIDO
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#e0e0e0', mt: 1 }}>
                        Por favor, ingresa tus datos
                    </Typography>
                </Box>

                <form onSubmit={handleSubmit}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3.5 }}>
                        <TextField 
                            label="Nombre" 
                            variant="filled" 
                            value={nombre} 
                            onChange={(e) => setNombre(e.target.value)} 
                            required 
                            InputLabelProps={{ style: { color: '#f5f5f5' } }}
                            InputProps={{ 
                                disableUnderline: true,
                                style: { color: 'white', borderRadius: 8, backgroundColor: 'rgba(255, 255, 255, 0.04)' },
                            }}
                            sx={{
                                '& .MuiFilledInput-root': {
                                    border: '1px solid rgba(255,255,255,0.05)',
                                    transition: 'all 0.2s',
                                    '&:hover': {
                                        backgroundColor: 'rgba(255, 255, 255, 0.08)',
                                    },
                                    '&.Mui-focused': {
                                        backgroundColor: 'rgba(255, 255, 255, 0.08)',
                                        border: '1px solid #7c4dff',
                                        boxShadow: '0 0 0 2px rgba(124, 77, 255, 0.2)'
                                    }
                                }
                            }}
                        />
                        <TextField 
                            label="DNI" 
                            variant="filled" 
                            type="password"
                            value={dni} 
                            onChange={(e) => setDni(e.target.value)} 
                            required 
                            InputLabelProps={{ style: { color: '#f5f5f5' } }}
                            InputProps={{ 
                                disableUnderline: true,
                                style: { color: 'white', borderRadius: 8, backgroundColor: 'rgba(255, 255, 255, 0.04)' },
                            }}
                            sx={{
                                '& .MuiFilledInput-root': {
                                    border: '1px solid rgba(255,255,255,0.05)',
                                    transition: 'all 0.2s',
                                    '&:hover': {
                                        backgroundColor: 'rgba(255, 255, 255, 0.08)',
                                    },
                                    '&.Mui-focused': {
                                        backgroundColor: 'rgba(255, 255, 255, 0.08)',
                                        border: '1px solid #7c4dff',
                                        boxShadow: '0 0 0 2px rgba(124, 77, 255, 0.2)'
                                    }
                                }
                            }}
                        />
                        <Button 
                            type="submit" 
                            variant="contained" 
                            size="large"
                            sx={{
                                mt: 2,
                                background: 'linear-gradient(45deg, #6200ea 30%, #b388ff 90%)',
                                color: 'white',
                                fontWeight: 700,
                                py: 1.5,
                                fontSize: '1rem',
                                borderRadius: 8,
                                textTransform: 'none',
                                boxShadow: '0 4px 15px rgba(98, 0, 234, 0.3)',
                                transition: 'all 0.3s ease',
                                '&:hover': { 
                                    background: 'linear-gradient(45deg, #4a148c 30%, #7c4dff 90%)',
                                    boxShadow: '0 8px 25px rgba(98, 0, 234, 0.5)',
                                    transform: 'translateY(-2px)'
                                },
                            }}
                        >
                            Ingresar
                        </Button>
                    </Box>
                </form>
            </Paper>
        </Container>
    );
};

export default Login;
