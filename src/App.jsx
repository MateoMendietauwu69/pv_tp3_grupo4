import { Routes, Route, Navigate } from 'react-router-dom'
import { useContext } from 'react'
import { UsuarioContext } from './context/UsuarioContext'

import Header from './components/Header.jsx'
import Nav from './components/Nav.jsx'
import ListaPro from './components/ListaProyectos.jsx'
import Footer from './components/Footer.jsx'

import Dashboard from './views/Dashboard.jsx'
import DetalleProyecto from './views/DetalleProyecto.jsx'
import PerfilUsuario from './views/PerfilUsuario.jsx'
import Login from './views/Login.jsx'

import './css/App.css'

const App = () => {
  const { usuario } = useContext(UsuarioContext);

  return (
    <div className="app-container">
      <Header />
      {usuario && <Nav />}
      
      <main style={{ minHeight: '70vh', padding: '20px' }}> 
        <Routes>
          <Route path="/login" element={!usuario ? <Login /> : <Navigate to="/dashboard" />} />
          
          <Route path="/" element={<Navigate to="/dashboard" />} />
          
          {usuario ? (
            <>
              <Route path="/dashboard" element={<Dashboard />} /> 
              <Route path="/proyectos" element={<ListaPro />} /> 
              <Route path="/proyectos/:id" element={<DetalleProyecto />} /> 
              <Route path="/perfil" element={<PerfilUsuario />} /> 
            </>
          ) : (
            <Route path="*" element={<Navigate to="/login" />} />
          )}
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
