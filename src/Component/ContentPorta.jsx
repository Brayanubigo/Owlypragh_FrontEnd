import React from 'react'
import fondo1 from '../Fotosbuffonprueba/weonweon.jpg'
import fondo2 from '../assets/avatar.jpg'
import fondo3 from '../Fotosbuffonprueba/paisajecubo.jpg'
import { Link } from 'react-router-dom'
const ContentPorta = () => {
  return (
   <>
 <div className="container mx-auto ">
  <div className="grid  grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6  my-10">
    <div className="flex justify-center 
      cursor-pointer 
      transform 
     transition duration-500 hover:scale-110 "> 
    <Link to="/GAUTO">
    
    <img src={fondo1} alt="" />
    
    </Link>
    <div className='flex items-center absolute mt-0 py-0 my-0'>
    <Link to="/GAUTO">
    <h1 className='text-center mt-[20rem] text-black text-4xl border-2 border-black hover:bg-white  transform 
     transition duration-500 hover:scale-110  border-solid w-[15rem] py-3 font-mono'>Automovil</h1>
    </Link>
    </div>
 
    </div>
    <div className="flex justify-center text-6xl 
      cursor-pointer 
     transform 
    transition duration-500 hover:scale-110">
    <Link to="/GPERSONA">
    <img src={fondo2} alt="" />
    </Link>
 
    <div className='flex items-center absolute mt-0 py-0 my-0 '>
    <Link to="/GPERSONA">
    <h1 className='text-center mt-[20rem] text-black text-4xl border-2 border-black hover:bg-white  transform 
     transition duration-500 hover:scale-110  border-solid w-[15rem] py-3 font-mono'>Personas</h1>
   </Link>
    </div>
    </div>  
    
    <div className="flex justify-center text-6xl 
      cursor-pointer 
     transform 
    transition duration-500 hover:scale-110">
    <Link to="/GPAISAJES">
    <img src={fondo3} alt="" />
    </Link>
 
    <div className='flex items-center absolute mt-0 py-0 my-0 '>
    <Link to="/GPAISAJES">
    <h1 className='text-center mt-[20rem] text-black text-4xl border-2 border-black hover:bg-white  transform 
     transition duration-500 hover:scale-110  border-solid w-[15rem] py-3 font-mono'>Paisajes</h1>
    </Link>
    </div>
    
    </div>
  </div>
</div>
   </>
  )
}

export default ContentPorta