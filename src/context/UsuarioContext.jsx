import { createContext, useState, useEffect } from "react";

export const UsuarioContext = createContext();

// Provider
export const UsuarioProvider = ({ children }) => {

    // Inicialización desde LocalStorage (si no hay, null para forzar login)
    const [usuario, setUsuario] = useState(() => {
        const guardado = localStorage.getItem("usuario_tp3");
        return guardado ? JSON.parse(guardado) : null;
    });

    // Guardado automático y borrado
    useEffect(() => {
        if (usuario) {
            localStorage.setItem("usuario_tp3", JSON.stringify(usuario));
        } else {
            localStorage.removeItem("usuario_tp3");
        }
    }, [usuario]);

    // Función para iniciar sesión
    const login = (datosUsuario) => {
        setUsuario(datosUsuario);
    };

    // Función para cerrar sesión
    const logout = () => {
        setUsuario(null);
    };

    // Función para actualizar el perfil
    const actualizarPerfil = (nuevoUsuario) => {
        setUsuario({ ...usuario, ...nuevoUsuario });
    };

    return (
        <UsuarioContext.Provider
            value={{
                usuario,
                login,
                logout,
                actualizarPerfil
            }}
        >
            {children}
        </UsuarioContext.Provider>
    );
};
