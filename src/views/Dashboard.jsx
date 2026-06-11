import { useState, useEffect } from 'react';
import proyectoService from '../services/proyectoService';
import '../css/Dashboard.css' 
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent
} from "@mui/material";

const Dashboard = () => {

  const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
    // Obtenemos los proyectos actualizados al cargar el Dashboard
    setProyectos(proyectoService.obtenerProyectosDisponibles());
  }, []);

  // Métricas dinámicas calculadas a partir del array de proyectos
  const totalProyectos = proyectos.length;
  const proyectosEnCurso = proyectos.filter(p => p.estado === 'En curso').length;
  const proyectosCompletados = proyectos.filter(p => p.estado === 'Completado').length;
  const proyectosPendientes = proyectos.filter(p => p.estado === 'Pendiente').length;

  return (
    <Container sx={{ mt: 4 }}>

      <Typography
        variant="h4"
        gutterBottom
        id='title'
      >
        Bienvenido al sistema de gestión de proyectos.
      </Typography>

      <Grid container spacing={3} id='proy'>

        <Grid item xs={12} md={3}>
          <Card className='card'>
            <CardContent>
              <Typography variant="h6">
                Total de proyectos
              </Typography>

              <Typography variant="h4">
                {totalProyectos}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card className='card'>
            <CardContent>
              <Typography variant="h6">
                En curso
              </Typography>

              <Typography variant="h4">
                {proyectosEnCurso}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card className='card'>
            <CardContent>
              <Typography variant="h6">
                Completados
              </Typography>

              <Typography variant="h4">
                {proyectosCompletados}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card className='card'>
            <CardContent>
              <Typography variant="h6">
                Pendientes
              </Typography>

              <Typography variant="h4">
                {proyectosPendientes}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

      </Grid>

    </Container>
  );
}

export default Dashboard;