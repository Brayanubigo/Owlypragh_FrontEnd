import { Outlet, Navigate } from "react-router-dom"
import useAuth from "../hook/useAuth";

import Footer from "../Component/Footer"
const Rutaprotegida = () => {
  
    const {auth , cargando} = useAuth();
   

   if(cargando) return 'cargando'

    return (
    <>
   
   {auth?._id ? <Outlet/> : <Navigate to="/"/> }
    

   
     
   </>
  )
}

export default Rutaprotegida