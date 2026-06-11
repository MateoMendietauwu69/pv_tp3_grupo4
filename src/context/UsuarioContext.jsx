import { createContext, useState, useEffect } from "react";

export const UsuarioContext = createContext();

export const UsuarioProvider = ({ children }) => {
    const [usuario, setUsuario] = useState(() => {
        const guardado = localStorage.getItem("usuario_tp3");
        return guardado ? JSON.parse(guardado) : {
            nombre: "Usuario de Prueba",
            dni: "12345678",
            rol: "Alumno",
            institucion: "Escuela de Minas"
        };
    });

    useEffect(() => {
        if (usuario) {
            localStorage.setItem("usuario_tp3", JSON.stringify(usuario));
        } else {
            localStorage.removeItem("usuario_tp3");
        }
    }, [usuario]);

    const login = (datosUsuario) => {
        setUsuario(datosUsuario);
    };

    const logout = () => {
        setUsuario(null);
    };

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
