// cuando empiece con MAYUSCULA es un COMPONENTE
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // <- Agregamos el enrutador para soportar las rutas
import App from './App.jsx' // <- Importamos App que ahora centraliza la estructura y las rutas
import './css/index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> {/* Envolvemos la aplicación con el BrowserRouter */}
      <App />
    </BrowserRouter>
  </StrictMode>,
)
