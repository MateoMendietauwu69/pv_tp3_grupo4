import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
//import App from './App.jsx'
import App2 from './App2.jsx'

createRoot(document.getElementById('mateo')).render(
  <StrictMode>
    <App2 />
  </StrictMode>,
)
