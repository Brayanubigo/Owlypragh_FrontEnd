
import { useState, useEffect } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, LinkIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from '../assets/owlylogo_negro.png'
import { Link } from 'react-router-dom' 
import 'animate.css';
import image from '../Fotosbuffonprueba/sobre mi.jpg'

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
    <div className="    " >
        
    <div className=" relative  overflow-hidden lg:h-[44rem]  ">
  <div className=' container py-10 px-10 mx-0 min-w-full flex flex-col items-center absolute '>
      <h1 className=' relative  text-5xl font-mono lg:py-[15rem]  max-[640px]:hidden sm:py-[9rem] text-white'>¿Quien soy?</h1>
   
    </div>
      <img
        src={image}
        className=" object-cover h-full w-full "
        alt="Wild Landscape"
      />
   


 


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
                className=" inline-flex items-center justify-center rounded-md p-2.5 text-white"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:min-w-0  lg:justify-center lg:gap-x-12 justify-center text-xl ">
            <Link to="/inicio" className=" py-5  text-white">
                  Inicio
                </Link>
                <Link to="/about" className=" py-5  text-white">
                Sobre mi
                </Link>
           
              <Link to="/inicio"><img className="h-16  rounded-full  " src={Logo} alt="" /></Link>
              <Link to="/portafolio" className=" py-5  text-white">
                  Portafolio
                </Link>
                <Link to="/contact" className=" py-5  text-white ">
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
