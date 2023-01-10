import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import image1 from '../assets/IMG_3358-2.jpg'
const HeroContent = () => {
  return (
<>

<div className="grid md:grid-cols-1 lg:grid-cols-2 scale-y-100
   w-full h-[42rem] p-6  bg-black bg-[url('https://res.cloudinary.com/dc6hf7xwx/image/upload/v1673391988/paisaje2_iwvcoq.jpg')] bg-center bg-cover
    hover:bg-[url('https://res.cloudinary.com/dc6hf7xwx/image/upload/v1673391967/inicio_tpheec.jpg')]
 "> 



<Link to="/about" className=" inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 ">
        <div className=" text-center content-center">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Sobre mi</h1>
            
          
            <div className=' flex items-center justify-center '> 
                  <svg className="  w-5 h-5  mb-5 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  </div>
                
          
            <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl ">Ven a conocerme</p>
        </div>
        </Link>

        <Link to="/portafolio" className=" inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 
        dark:focus:ring-primary-900 ">
        <div className=" text-center content-center">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Portafolio</h1>
            
          
                  <div className=' flex items-center justify-center '> 
                  <svg className="  w-5 h-5  mb-5 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  </div>
                
            
          
            <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl ">Revisa mis trabajos</p>
        </div>
        </Link>
      
       
</div>
    
<div className='text-center my-10'>
      <h1 className='text-5xl font-mono'>Contactame!</h1>
  </div>

</>
  )
}

export default HeroContent