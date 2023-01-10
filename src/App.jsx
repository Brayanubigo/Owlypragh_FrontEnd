import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthLayout from './layout/AuthLayout.jsx';
import Rutaprotegida from './layout/Rutaprotegida.jsx';

import Login from './Pages/Admin/Login.jsx';
import OlvidePassowrd from './Pages/Admin/OlvidePassowrd.jsx';
import Inicio from './Pages/Inicio';
import About from './Pages/about.jsx';
import Portafolio from './Pages/portafolio.jsx';
import Contact from './Pages/contact.jsx';
import Gauto from './Pages/autos'
import Gpersona from './Pages/personas'

import ImagenAdd from './Pages/Admin/ImagenAdd';
import ImagenPer from './Pages/Admin/ImagenAddPer'
import { AuthProvider } from './context/AuthProvider';


function App() {


  return (

    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<AuthLayout />}>

            <Route index element={<Login />} />
            <Route path='olvide-password' element={<OlvidePassowrd />} />
            
          </Route>
         
          <Route path='/inicio' element={<Inicio />} />
          <Route path='/about' element={<About />} />
          <Route path='/portafolio' element={<Portafolio />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/GAUTO' element={<Gauto />} />
          <Route path='/GPERSONA' element={<Gpersona />} />

          <Route path='/admin' element={<Rutaprotegida />}>
            <Route index element={<ImagenAdd />} />
            <Route path='persona' element={<ImagenPer />} />
          </Route>

        </Routes>

      </AuthProvider>
    </BrowserRouter>

  )
}

export default App
