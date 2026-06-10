import { useContext } from "react";
import { UsuarioContext } from "../context/UsuarioContext";
import { Button } from "@mui/material";
import '../css/Header.css'

const Header = () =>{
    const { usuario, logout } = useContext(UsuarioContext);

    return (
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px' }}>
            <h1>PROYECTOS</h1>
            {usuario ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <span>{usuario.nombre} | {usuario.rol}</span>
                    <Button variant="outlined" color="error" size="small" onClick={logout}>
                        Cerrar Sesión
                    </Button>
                </div>
            ) : (
                <div>No autenticado</div>
            )}
        </header>
    )
}

export default Header