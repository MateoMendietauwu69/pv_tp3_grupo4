import { useContext } from "react" // 
import { UsuarioContext } from "../context/UsuarioContext" 
import '../css/Header.css'

const Header = () => {
  const { usuario } = useContext(UsuarioContext)

  return (
    <header className="main-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px' }}>

      <h1>PROYECTITOS</h1>
      
      <div className="user-info">
        {usuario ? (
          <p style={{ margin: 0, fontWeight: 'bold' }}>
            {usuario.nombre} | <span style={{ fontWeight: 'normal' }}>{usuario.rol}</span>
          </p>
        ) : (
          <p style={{ margin: 0 }}>Invitado</p>
        )}
      </div>
    </header>
  )
}

export default Header