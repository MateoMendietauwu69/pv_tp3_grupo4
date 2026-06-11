import '../css/Dashboard.css' 
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent
} from "@mui/material";

const Dashboard = () => {

  // Métricas simuladas
  const totalProyectos = 12;
  const proyectosEnCurso = 5;
  const proyectosCompletados = 4;
  const proyectosPendientes = 3;

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