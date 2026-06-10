import { createContext, useState } from "react";

export const UsuarioContext = createContext(null);

// Provider
export const UsuarioProvider = ({ children }) => {

    // Usuario inicial simulado
    const [usuario, setUsuario] = useState({
        nombre: "Mateo Ignacio",
        dni: "12345678",
        rol: "Alumno",
        institucion: "Escuela de Minas"
    });

    // Función para actualizar el perfil
    const actualizarPerfil = (nuevoUsuario) => {
        setUsuario(nuevoUsuario);
    };

    return (
        <UsuarioContext.Provider
            value={{
                usuario,
                actualizarPerfil
            }}
        >
            {children}
        </UsuarioContext.Provider>
    );
};