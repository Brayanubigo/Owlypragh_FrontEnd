import React from 'react'
import avatar from '../assets/avatar.jpg'
import { Link } from 'react-router-dom'
export const ContentAbout = () => {
  return (
    <>
  

    <div className="container mx-auto ">
    <div className="grid  grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
    <div className="flex justify-center mt-6  ">
    <img className=' w-[35rem] ' src={avatar} alt="" />
      </div>
      <div className='   w-full   lg:mt-52'>
     <h1 className='text-5xl text-center font-mono'>Hola, Mi nombre es <span className=' text-slate-800'> Owlyprah </span></h1>
      <p className='m-10 text-start font-mono text-lg'>Soy oriundo de Quillota, actualmente vivo en Antofagasta, soy un fotografo en formacion de hace ya 6 años, de los cuales profesionalmente he trabajado 3 años como fotografo, asistente de camara y subdirector de escena, me encanta la fotografia de vehiculos pricipalmente.</p>
      <p className='m-10 text-start font-mono text-lg'>¡Contactame si tienes alguna duda!</p>
      </div>
      </div>
      <div className='mt-16 text-center'>
      <Link to="/contact">
      <button className="hover:-translate-y-1 hover:scale-110 bg-transparent hover:bg-gray-900 text-gray-900 font-semibold
       hover:text-white py-5 px-14 border  border-gray-900 hover:border-transparent  font-mono transition ease-in-out delay-50 uppercase"> Contactame!</button>
      </Link>
      </div>
      </div>
      </>
  )
}
