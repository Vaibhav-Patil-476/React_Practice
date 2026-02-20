import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './assets/Components/Home.jsx'
import About from './assets/Components/About.jsx'
import Contect from './assets/Components/Contect.jsx'
import Service from './assets/Components/Service.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Home/>
    <About/>
    <Service/>
    <Contect/>
  </StrictMode>
)
