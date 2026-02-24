import Home from './assets/Components/Home.jsx'
import About from './assets/Components/About.jsx'
import Contect from './assets/Components/Contect.jsx'
import NavBar from './assets/Components/NavBar.jsx'
import Gallery from './assets/Components/Gallery.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
     <Route path='/home' element={<Home/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/gallery' element={<Gallery/>}/>
     <Route path='/contect' element={<Contect/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
} export default App;