import { NavLink } from 'react-router-dom'
import '../css/Nav.css' 

export default function Nav() {
  return (
    <nav className="nav-bar">
      <ul style={{ display: 'flex', gap: '15px', listStyle: 'none', justifyContent: 'center' }}>
        <li>
          <NavLink 
            to="/dashboard" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/proyectos" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            Detalles / Proyectos
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/perfil" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            Perfiles
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}