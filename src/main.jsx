import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AssemblyApp from './AssemblyApp'
// import App from './functionalProgramming/FetchApi.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AssemblyApp />
  </StrictMode>,
)
