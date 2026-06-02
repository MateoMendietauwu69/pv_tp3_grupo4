import { Routes, Route, Navigate } from 'react-router-dom'

//importamos tus componentes estructurales
import Header from './components/Header.jsx'
import Nav from './components/Nav.jsx'
import ListaPro from './components/ListaProyectos.jsx'
import Footer from './components/Footer.jsx'

//importamos las vistas desde la nueva carpeta (src/views/)
import Dashboard from './views/Dashboard.jsx'
import DetalleProyecto from './views/DetalleProyecto.jsx'
import PerfilUsuario from './views/PerfilUsuario.jsx'

import './css/App.css'

function App() {
  return (
    <div className="app-container">
      <Header />
      <Nav />
      
      <main style={{ minHeight: '70vh', padding: '20px' }}> 
        <Routes>
          
          <Route path="/" element={<Navigate to="/dashboard" />} />
          
          
          <Route path="/dashboard" element={<Dashboard />} /> 
          
         
          <Route path="/proyectos" element={<ListaPro />} /> 
          
         
          <Route path="/proyectos/:id" element={<DetalleProyecto />} /> 
          
        
          <Route path="/perfil" element={<PerfilUsuario />} /> 
        </Routes>
      </main>

      
      <Footer />
    </div>
  )
}

export default App
