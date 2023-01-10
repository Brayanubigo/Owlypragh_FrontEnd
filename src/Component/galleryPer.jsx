import {useEffect, useState} from 'react'

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import axios from 'axios';
function galleryPer() {
 
    const [images, setImages] = useState([])

    useEffect(() => {
    obtenerImagenes()
    }, []);
  
  
    
    async function  obtenerImagenes() { 
      const res = await axios.get('http://localhost:4000/image/showPer')
  
        setImages(res.data) 
       
        obtenerImagenes()
    }
    
  
 
    return (
    
    <>
    
    <div className="grid grid-cols-1 mt-[3rem] mx-[20rem] ">

        
    <ImageList variant="masonry" cols={3} gap={12}>
  {images.map((item) => (
    <ImageListItem key={item.img}>
      <img
        src={`${item.imageURL}?w=248&fit=crop&auto=format`}
        srcSet={`${item.imageURL}?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt={item.title}
        loading="lazy"
      />
    </ImageListItem>
  ))}
</ImageList>



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

export default galleryPer