import {useEffect, useState} from 'react'
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import clienteAxios from '../config/axios';
import Masonry from '@mui/lab/Masonry';

function galleryAuto() {
 
    const [images, setImages] = useState([])
    const [open, setOpen] = useState(false);
    const [modal, setModal] = useState([])
    const handleOpen = () => setOpen(true);
    
    
    const handleClose = () => setOpen(false);
   
   
   
    useEffect(() => {
    obtenerImagenes()
    }, []);
  
  
    
    async function  obtenerImagenes() { 
      const res = await clienteAxios.get('/image/showtable')
  
        setImages(res.data) 
       
        obtenerImagenes()
    }


    
    const viewImage = (img,i) =>{
      setModal({img,i})
    }
 
 
    return (
    
    <>
    
    {
     modal.img &&   
     <div className='flex mx-0  bg-black content-center justify-center items-center overflow-hidden'>
    <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[
          { src: `${modal.img}` },
        
        ]}

       
      />
      
      {/* <img src={modal.img} style={{width:'auto', maxWidth: '90%', maxHeight:'90%'}} alt="" /> */}
    
         
    
       </div>
    }


    <div className="grid grid-cols-1 mt-[3rem] lg:px-[15rem] px-2 ">
    
        
    <Masonry   columns={{xs:1,sm:2 ,md:3}}  >
  {images.map((item, i) => (
    
    <>



   
    <img
        className='cursor-pointer'
        src={`${item.imageURL}?w=248&fit=crop&auto=format`}
        srcSet={`${item.imageURL}?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt={item.title}
        loading="lazy"
        onClick={() => {viewImage(item.imageURL, i ),handleOpen()}}
      />

   
      
  
    </>
  ))}
</Masonry>



</div>
<div className='mt-16 text-center'>
      <a href='https://www.instagram.com/owlygraph/' target="_blank">
      <button className="hover:-translate-y-1 hover:scale-110 bg-transparent hover:bg-gray-900 text-gray-900 font-semibold
       hover:text-white py-5 px-14 border  border-gray-900 hover:border-transparent  font-mono transition ease-in-out delay-50 uppercase"> Ver más!</button>
      </a>
      </div>
    </>
  )
}

export default galleryAuto