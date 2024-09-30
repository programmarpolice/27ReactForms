import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Authenticate from './components/Authenticate.jsx'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

//Worked on w/Blake, Alexis, Bertha, Joy and Kristen