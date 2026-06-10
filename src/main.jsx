// cuando empiece con MAYUSCULA es un COMPONENTE
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // <- Agregamos el enrutador para soportar las rutas
import App from './App.jsx' // <- Importamos App que ahora centraliza la estructura y las rutas
import './css/index.css'

import { UsuarioProvider } from "./context/UsuarioContext"; // <- Importamos el UsuarioProvider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UsuarioProvider>
      <BrowserRouter> {/* Envolvemos la aplicación con el BrowserRouter */}
        <App />
      </BrowserRouter>
    </UsuarioProvider>
  </StrictMode>,
)
