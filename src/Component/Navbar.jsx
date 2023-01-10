
import { useState, useEffect } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, LinkIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from '../assets/owlylogo_negro.png'
import { Link } from 'react-router-dom' 
import 'animate.css';

import image1 from '../Fotosbuffonprueba/paisaje-urbex.jpg'
import image2 from '../Fotosbuffonprueba/Personas.jpg'
import image3 from '../Fotosbuffonprueba/auto.jpg'


const navigation = [
  { name: 'Inicio', href: '/inicio' },
  { name: 'Sobre mi', href: '/about' },
  { name: 'Portafolio', href: '/portafolio' },
  { name: 'Contacto', href: '/contact' },
  
 
]




export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)


 

  return (
    <>
    <div className="  relative  " >
         <div id="carouselExampleControls" className="carousel slide relative  " data-bs-ride="carousel">
  <div className="carousel-inner relative w-full overflow-hidden min-[1224px]:h-screen ">
    <div className="  carousel-item active relative float-left w-full ">
    <div className="container    mx-0 min-w-full flex flex-col items-center absolute  max-[500px]:mt-[9rem] max-[640px]:mt-[13rem] sm:mt-[15rem] md:mt-[18rem] min-[1024px]:mt-[22rem] 2xl:mt-[29rem]   max-[374px]:hidden ">
    <Link to="/GPAISAJES">
      <button className="hover:-translate-y-1 hover:scale-110 bg-transparent hover:bg-gray-900 text-white 
       hover:text-white py-2 px-10 border  border-white hover:border-transparent md:w-60 md:h-20 lg:w-60 lg:h-20 font-mono transition ease-in-out delay-150"> Paisaje </button>
      </Link>
      </div>
      <img
        src={image1}
        className="block w-full h-full"
        alt="Wild Landscape"
      />


    </div>

    <div className="carousel-item relative float-left w-full">
    <div className="container    mx-0 min-w-full flex flex-col items-center absolute  max-[500px]:mt-[9rem] max-[640px]:mt-[13rem] sm:mt-[15rem] md:mt-[18rem] min-[1024px]:mt-[22rem] 2xl:mt-[29rem]   max-[374px]:hidden ">
    <Link to="/GPERSONA">
      <button className="hover:-translate-y-1 hover:scale-110 bg-transparent hover:bg-gray-900 text-white 
       hover:text-white py-2 px-10 border  border-white hover:border-transparent md:w-60 md:h-20 lg:w-60 lg:h-20 font-mono transition ease-in-out delay-150"> Personas</button>
      </Link>
      </div>
      <img
        src={image2}
        className="block w-full "
        alt="Camera"
      />
    </div>
    <div className="carousel-item relative float-left w-full">
     <div className="container  mx-0 min-w-full flex flex-col items-center absolute  max-[500px]:mt-[9rem] max-[640px]:mt-[13rem] sm:mt-[15rem] md:mt-[18rem] min-[1024px]:mt-[22rem] 2xl:mt-[29rem]   max-[374px]:hidden ">
    <Link to="/GAUTO">
      <button className="hover:-translate-y-1 hover:scale-110 bg-transparent hover:bg-gray-900 text-white 
       hover:text-white py-2 px-10 border  border-white hover:border-transparent md:w-60 md:h-20 lg:w-60 lg:h-20 font-mono transition ease-in-out delay-150 "> Automovil</button>
      </Link>
      </div>
      <img
        src={image3}
        className="block w-full"
        alt="Exotic Fruits"
      />
    </div>
  </div>
  
 
  <button
    className="carousel-control-prev absolute top-52 lg:top-0 bottom-0   flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon inline-block bg-no-repeat "  aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next lg:top-0 absolute top-52 bottom-0  flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>

  </div>

      
      <div className="">
        <div>
          <nav className="flex h-10   justify-between lg:justify-items-center absolute inset-x-0 top-0 mt-6 font-mono " aria-label="Global">
           
           
            <div className="flex lg:min-w-0 lg:flex-1 " aria-label="Global">
              <Link to='/inicio' className="-m-1.5 p-1.5 lg:hidden ">
                <span className="sr-only">Buffon</span>
                <img className="h-12 rounded-full" src={Logo} alt="" />
              </Link>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="  inline-flex items-center justify-center rounded-md p-2.5 text-white"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:min-w-0  lg:justify-center lg:gap-x-12 justify-center text-xl ">
            <Link to="/inicio" className=" py-5   text-white">
                  Inicio
                </Link>
                <Link to="/about" className=" py-5  text-white">
                Sobre mi
                </Link>
           
              <Link to="/inicio"><img className="h-16  rounded-full  " src={Logo} alt="" /></Link>
              <Link to="/portafolio" className=" py-5  text-white">
                  Portafolio
                </Link>
                <Link to='/contact' className=" py-5  text-white ">
                  Contacto
                </Link>

            </div>
            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
             
            </div>



      


          </nav>
         
          <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <Dialog.Panel focus="true" className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
              <div className="flex h-9 items-center justify-between">
                <div className="flex ">
                  <Link to="/inicio" className="-m-1.5 p-1.5 ">
                    <span className="sr-only">Your Company</span>
                   
                    <img
                      className="h-12 rounded-full"
                      src={Logo}
                      alt=""
                    />
                  </Link>
                </div>
                <div className="flex">
                  <button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="mt-6 flow-root ">
                <div className="-my-6 divide-y divide-gray-500/10 ">
                  <div className="space-y-2 py-6 justify-center  ">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="-mx-3 block rounded-lg py-2 px-3 text-base font-mono leading-7 text-gray-900 hover:bg-gray-400/10"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
              
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </div>
      </div>
      
   



    </div>


    
    </>
  )
}
