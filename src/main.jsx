//cuando empiece con MAYUSCULA es un COMPONENTE
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import Header from './components/Header.jsx'
import Nav from './components/Nav.jsx'
import ListaPro from './components/ListaProyectos.jsx'
import Footer from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Nav />
    <ListaPro />
    <Footer />
  </StrictMode>,
)
