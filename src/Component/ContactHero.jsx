import { useState} from 'react'
import avatar from '../assets/avatar.jpg'
import Alerta from "./alerta"

import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const ContactHero = () => {
 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [alerta, setAlerta] = useState('');


  const resetForm = () => {
    setName("")
    setEmail("")
    setMessage("")
  }


  const sendEmail = (e) => {
    e.preventDefault();
    if ([name, email,message].includes('')) {
      setAlerta({ msg: 'Hay campos vacios', error: true });
      return;
    }
    setAlerta({});
    try{
      emailjs.sendForm(import.meta.env.VITE_SERVICE_EMAIL,import.meta.env.VITE_TEMPLATE_EMAIL, e.target, import.meta.env.VITE_KEY_EMAIL)
      .then((result) => {
       console.log(import.meta.env.SERVICE_EMAIL)
        Swal.fire({
          title: 'Enviado!',
          text: 'Su correo fue enviado!',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500
        })  
        console.log(result.text);
        resetForm();
      }, (error) => {
          console.log(error.text);
      });
    }
  catch(error){
    
    console.log(error)
  }
  }  







  const { msg } = alerta
  return (
    <>
  

  <div className="container mx-auto ">
  <div className="grid  grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
  <div className="flex justify-center   ">
    <form className='w-full lg:mt-32 sm:mb-10 lg:w-5/6' action="" onSubmit={sendEmail}>
    {msg && <Alerta
            alerta={alerta} />}
    <div className=''>
    <label className='text-xl font-mono' htmlFor="">Nombre</label>
      <input className='h-10 w-full block border-2 p-2 border-gray-300'type="text" name="nombre" value={name} onChange={e => setName(e.target.value)} />
      </div>
      <div className='mt-5'>
    <label className='text-xl font-mono ' htmlFor="">Email</label>
      <input className='h-10 w-full block border-2 p-2 border-gray-300'type="text" name="email" value={email} onChange={e => setEmail(e.target.value)} />
      </div>
      <div className='mt-5'>
    <label className='text-xl font-mono ' htmlFor="">Mensaje</label>
      <textarea className='w-full block border-2 p-2 border-gray-300' rows="5" type="text" name="message" value={message} onChange={e => setMessage(e.target.value)}  />
      </div>
      <div className='mt-5 text-center'>
      <button className="hover:-translate-y-1 hover:scale-110 bg-transparent hover:bg-gray-900 text-gray-900 font-semibold
       hover:text-white py-2 px-10 border  border-gray-900 hover:border-transparent rounded font-mono transition ease-in-out delay-50"> Enviar!</button>
      </div>
       
      </form>
    </div>
    <div className='   w-full   mt-5'>
    <img className='  sm:w-full lg:w-96 sm:p-10 lg:p-0 lg:ml-32 md:ml-0 sm:ml-0' src={avatar} alt="" />
    </div>
    </div>
    </div>
    </>
  )
}

export default ContactHero