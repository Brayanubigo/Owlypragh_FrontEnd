import React from 'react'
import fondo1 from '../Fotos buffon prueba/autocubo.jpg'
import fondo2 from '../Fotos buffon prueba/personacubo.jpg'
import fondo3 from '../Fotos buffon prueba/paisajecubo.jpg'
import { Link } from 'react-router-dom'
const Content = () => {
  return (
   <>
 
 <div className="container mx-auto ">
  <div className="grid  grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 mt-10 mb-10 " >
  <div className="flex justify-center text-6xl 
     bg-gray-100 cursor-pointer 
     transform 
    transition duration-500 hover:scale-110 h-[32rem]">
    <img className='w-full h-full object-cover' src={fondo1} alt="" />
    <div className='flex items-center absolute mt-0 py-0 my-0 '>
    <Link to="/GAUTO">
    <h1 className='text-center mt-[13rem] text-white text-4xl border-2 border-black hover:bg-black transform 
     transition duration-500 hover:scale-110   w-[15rem] py-3 font-mono'>Automovil</h1>
  </Link>
    </div>
   



    </div>
    <div className="flex justify-center text-6xl 
     bg-gray-100 cursor-pointer 
     transform 
    transition duration-500 hover:scale-110 h-[32rem]">
    <img className='w-full h-full object-cover' src={fondo2} alt="" />
    <div className='flex items-center absolute mt-0 py-0 my-0 '>
    <Link to="/GPERSONA">
    <h1 className='text-center mt-[13rem] text-white text-4xl border-2 border-black hover:bg-black  transform 
     transition duration-500 hover:scale-110  border-solid w-[15rem] py-3 font-mono'>Personas</h1>
  </Link>
    </div>
   
    </div>
    
    <div className="flex justify-center text-6xl    bg-gray-100
    cursor-pointer 
    transform 
   transition duration-500 hover:scale-110 h-[32rem]">
    <img  className="w-full object-cover" src={fondo3} alt="" />

    <div className='flex items-center absolute mt-0 py-0 my-0 '>
    <Link to="/GPAISAJES">
    <h1 className='text-center mt-[13rem] text-black text-4xl border-2 border-black hover:bg-white  transform 
     transition duration-500 hover:scale-110  border-solid w-[15rem] py-3 font-mono'>Paisajes</h1>
  </Link>
    </div>
    </div>
   
  </div>
</div>
   </>
  )
}

export default Content