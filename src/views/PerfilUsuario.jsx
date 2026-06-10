import '../css/PerfilUsuarios.css' 
import { useContext } from 'react';
import { UsuarioContext } from '../context/UsuarioContext';

import {
  Container,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText
} from "@mui/material";


const PerfilUsuario = () => {

  const { usuario } = useContext(UsuarioContext);

  const {
    nombre,
    dni,
    rol,
    institucion
  } = usuario;

  return (
    <Container sx={{ mt:4 }}>
      <Typography variant="h3" gutterBottom>Alumnos</Typography>
      <Typography variant="body1" gutterBottom>Informacion del usuario actual:</Typography>
      <Paper elevation={3} sx={{ mt: 3 }} className='lista'>
        <List>
          <ListItem>
            <ListItemText
              primary="Nombre"
              secondary={nombre}
            />  
          </ListItem>
          <ListItem>
            <ListItemText 
              primary="DNI"
              secondary={dni}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Rol"
              secondary={rol}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Institución"
              secondary={institucion}
            />
          </ListItem>
        </List>
      </Paper>
    </Container>
  );
}

export default PerfilUsuario;