import { json, Link } from "react-router-dom"
import useAuth from "../hook/useAuth"
import React, { useState, useEffect } from "react";
import logo from '../assets/owlylogo_negro.png'
import control from '../assets/control.png'
import clienteAxiosimage from '../config/axios'
import { GoDashboard, GoDiffAdded, GoSignOut, GoPerson } from "react-icons/go";
import Swal from 'sweetalert2'
import axios from "axios";
import { data } from "autoprefixer";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import clienteAxios from "../config/axios";





const SidebarAddPer = () => {
  const {cerrarSesion} = useAuth()
  const [file, setFile] = useState([])
  const [currentImage, setCurrtenImage] = useState();
  const [images, setImages] = useState([])

  useEffect(() => {
  obtenerImagenes()
  
  }, []);


  
  async function  obtenerImagenes() { 
    const res = await clienteAxios.get('/image/showPer')

      setImages(res.data) 
     
      obtenerImagenes()
  }
  
  async function  eliminarFoto(id) { 
    const res = await clienteAxios.get(`/image/deleteper/${id}`).then((res) =>{
      console.log(res.data)
      
      Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Imagenes eliminada con exito',
          showConfirmButton: false,
          timer: 2000
        })
        obtenerImagenes()
      
    }).catch((err)=>{
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Seleccione una imagen',
        showConfirmButton: false,
        timer: 2000
      })    
    })
    
  }


  const handleSubmitImage = async (e) => {
    
   
    let formData = new FormData()
    formData.append('file', file)
    Array.from(file).forEach(file =>{
      formData.append('file', file)
    })
    await clienteAxios.post('/image/uploadPer', formData).then((res) =>{
      console.log(res.data)
      
      Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Imagenes subidas con exito',
          showConfirmButton: false,
          timer: 2000
        })
        setFile([])    
      
    }).catch((err)=>{
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'no tan rapido cerebrito',
        showConfirmButton: false,
        timer: 2000
      })    
    })
   
  }




  const [open, setOpen] = useState(true);
  const Menus = [
  
    { title: "Imagenes Auto", icon: <GoDiffAdded/> ,link: '/admin'},
    { title: "Imagenes Personas", icon: <GoDiffAdded/> ,link: '/admin/persona'},
   
    { title: "Cerrar Sesion", icon: <GoSignOut/> , onclick: cerrarSesion }
    
  ];

  
    return (
    <>
            <div className="flex ">
      <div
        className={`  ${
          open ? "lg:w-72 " : "w-20 "
        } bg-gradient-to-r from-slate-700 via-zinc-700 to-slate-900 p-5  pt-8 relative duration-300`}
      >
        <img
          src={control}
          className={`absolute cursor-pointer -right-3 top-9 w-7  border-black
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src={logo}
            className={`cursor-pointer duration-500 w-32 ${
              open && "rotate-[360deg]"
            }`}
          />
      
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex font-bold rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-md items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              {Menu.icon}
              <Link className={`${!open && "hidden"} origin-left duration-200`} onClick={Menu.onclick} to={Menu.link}>
                {Menu.title}
              </Link>
          
            </li>
            
          ))}
         
        </ul>
        
      </div>


      <div className="  mx-auto flex-auto p-7 justify-center">
     
      <div className="flex justify-center">
    <h1 className="container mx-auto font-bold text-center ">AGREGAR IMAGEN PERSONA</h1>
    </div>
  
    <div className="w-full mx-auto my-6 ">
    <label
        className="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
        <span className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            <span className="font-medium text-gray-600">
                Click para subir una imagen  
                <span className="text-blue-600 underline"> Buscar </span>
            </span>
            
        </span>
        <input type="file"  className="hidden" onChange={(e) => {setFile(e.target.files)}}/>
       
    </label>
</div>
<button className=" my-4 w-full h-12 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" onClick={handleSubmitImage}>Enviar</button>
<h2 className="text-center font-bold text-2xl">Previsualizacion a subir</h2>
<div className="flex">
  
  {Array.from(file).map(item =>{
    return(
      <span>
        <img className=" grid my-3 mx-4 w-40" src={item ? URL.createObjectURL(item):null} alt="" />
      </span>
    )
  })
  }

  

</div>
<div className="grid grid-cols-1">

<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Imagenes</TableCell>
            <TableCell align="center">Accion</TableCell>
       
          </TableRow>
        </TableHead>
        <TableBody>
          {images.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" >
                <img className="w-12 items-center  " src={row.imageURL} alt="" />
               
              </TableCell>


              <TableCell align="center">
             
     <button className="hover:-translate-y-1 hover:scale-110 bg-transparent hover:bg-gray-900 text-red-600 font-semibold
       hover:text-white py-2 px-10 border border-red-600 hover:border-transparent rounded font-mono transition ease-in-out delay-50" onClick={() => eliminarFoto(row._id)}> Eliminar</button>
            
              </TableCell>
       
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>


      </div>
    </div>
      </>
  )
}

export default SidebarAddPer;