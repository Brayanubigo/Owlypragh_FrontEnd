import {useState}  from 'react'
import logo from '../../assets/Logo-Buffon.jpg'
import { Link } from 'react-router-dom'
const OlvidePassowrd = () => {
  return (
    <>
    <div className="bg-white w-96 p-6 shadow-lg rounded-xl" >
    <div className="flex items-center justify-center">
      <img className=" rounded-full w-28" src={logo} alt="" />
    </div>
      <h1 className="mt-5 text-blue-500 font-black text-3xl  text-center">Recuperar
      <span className="text-black"> Password</span>
      </h1>
      <div className="text-center ">
      <form action="">
        <label className="uppercase mt-10 ml-6 text-black block font-bold text-left" htmlFor="">
          Email
        </label>
        <input className="border w-72 p-3 mt-3 rounded-xl" type="text" placeholder="Email de registro" />
      
        <button className=" border-2 bg-blue-500 w-full font-bold text-white py-4 mt-10 rounded transition-colors hover:bg-black hover:text-white"  type="submit"> Enviar</button>
      </form>
      <nav>
            <Link to="/">¿Ya tienes cuenta? Iniciar sesion</Link>
        </nav>
    </div>

    </div>
  
    </>
  )
}

export default OlvidePassowrd