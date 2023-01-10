import { Link, useNavigate } from "react-router-dom"
import logo from "../../assets/owlylogo_negro.png"
import { useState } from 'react'
import Alerta from "../../Component/alerta"
import axios from "axios"
import clienteAxios from "../../config/axios"
import useAuth from "../../hook/useAuth"


const Login = () => {


  const [nombre, setNombre] = useState('');
  const [password, setPassword] = useState('');
  const [alerta, setAlerta] = useState('');

  const navigate = useNavigate('')
  const {setAuth} = useAuth()
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([nombre, password].includes('')) {
      setAlerta({ msg: 'Hay campos vacios', error: true });
      return;
    }
    setAlerta({});
    //iniciar sesion
    try {

      const { data } = await clienteAxios.post('/admin/login', { nombre, password })
      localStorage.setItem('token', data.token)
     
      setAuth(data)
      navigate('/admin')
     
    

    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true
      })
    }
  }
  const { msg } = alerta

  return (
    <>
      <div className="bg-white w-96 p-6 shadow-lg rounded-xl" >
        <div className="flex items-center justify-center">
          <img className=" rounded-full w-52" src={logo} alt="" />
        </div>
        <h1 className="mt-5 text-blue-500 font-black text-3xl  text-center">Iniciar
          <span className="text-black"> Sesion</span>
        </h1>
        <div className="text-center ">
          {msg && <Alerta
            alerta={alerta} />}
          <form action="" onSubmit={handleSubmit}>
            <label className="uppercase mt-10 ml-6 text-black block font-bold text-left" htmlFor="">
              Nombre
            </label>
            <input className="border w-72 p-3 mt-3 rounded-xl" type="text" placeholder="Nombre" value={nombre} onChange={e => setNombre(e.target.value)} />
            <label className="uppercase mt-4 ml-6 text-black block font-bold text-left" htmlFor="">
              Contraseña
            </label>
            <input className="border w-72 p-3 mt-3 rounded-xl" type="password" placeholder="Tu contraseña" value={password} onChange={e => setPassword(e.target.value)} />
            <button className=" border-2 bg-blue-500 w-full font-bold text-white py-4 mt-10 rounded transition-colors hover:bg-black hover:text-white" type="submit"> Login</button>
          </form>
       
        </div>

      </div>

    </>
  )
}

export default Login