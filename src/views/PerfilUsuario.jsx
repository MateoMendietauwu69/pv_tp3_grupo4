import '../css/PerfilUsuarios.css' 

import {
  Container,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText
} from "@mui/material";


function PerfilUsuario() {

  return (
    <Container sx={{ mt:4 }}>
      <Typography variant="h3" gutterBottom>Alumnos</Typography>
      <Typography variant="body1" gutterBottom>Lista de participantes del TP3</Typography>
      <Paper elevation={3} sx={{ mt: 3 }} className='lista'>
        <List>
          <ListItem>
            <ListItemText
              primary="Nombre"
              secondary="Mateo Mendieta"
            />  
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Rol"
              secondary="Lider"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Institución"
              secondary="Escuela de Minas"
            />
          </ListItem>
        </List>
      </Paper>
      <Paper elevation={3} sx={{ mt: 3 }} className='lista'>
        <List>
          <ListItem>
            <ListItemText
              primary="Nombre"
              secondary="Erick Neuman"
            />  
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Rol"
              secondary="Participante"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Institución"
              secondary="Escuela de Minas"
            />
          </ListItem>
        </List>
      </Paper>
      <Paper elevation={3} sx={{ mt: 3 }} className='lista'>
        <List>
          <ListItem>
            <ListItemText
              primary="Nombre"
              secondary="David Palacios"
            />  
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Rol"
              secondary="Participante"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Institución"
              secondary="Escuela de Minas"
            />
          </ListItem>
        </List>
      </Paper>
      <Paper elevation={3} sx={{ mt: 3 }} className='lista'>
        <List>
          <ListItem>
            <ListItemText
              primary="Nombre"
              secondary="Lautaro Mercado"
            />  
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Rol"
              secondary="Participante"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Institución"
              secondary="Escuela de Minas"
            />
          </ListItem>
        </List>
      </Paper>
      <Paper elevation={3} sx={{ mt: 3 }} className='lista'>
        <List>
          <ListItem>
            <ListItemText
              primary="Nombre"
              secondary="Octavio Lamaz"
            />  
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Rol"
              secondary="Participante"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Institución"
              secondary="Escuela de Minas"
            />
          </ListItem>
        </List>
      </Paper>
      <Paper elevation={3} sx={{ mt: 3 }} className='lista'>
        <List>
          <ListItem>
            <ListItemText
              primary="Nombre"
              secondary="Ignacio Jorqui"
            />  
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Rol"
              secondary="Participante"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Institución"
              secondary="Escuela de Minas"
            />
          </ListItem>
        </List>
      </Paper>
    </Container>
  );
}

export default PerfilUsuario;