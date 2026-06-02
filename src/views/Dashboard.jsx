import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent
} from "@mui/material";

function Dashboard() {

  // Métricas simuladas
  const totalProyectos = 12;
  const proyectosEnCurso = 5;
  const proyectosCompletados = 4;
  const proyectosPendientes = 3;

  return (
    <Container sx={{ mt: 4 }}>

      <Typography
        variant="h3"
        gutterBottom
      >
        Dashboard
      </Typography>

      <Typography
        variant="body1"
        sx={{ mb: 4 }}
      >
        Bienvenido al sistema de gestión de proyectos.
      </Typography>

      <Grid container spacing={3}>

        <Grid item xs={12} md={3}>
          <Card>
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
          <Card>
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
          <Card>
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
          <Card>
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