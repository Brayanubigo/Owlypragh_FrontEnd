import React from 'react'
import Navbar from '../Component/Navbar'
import Content from '../Component/Content'
import Footer from '../Component/Footer'
import HeroContent from '../Component/HeroContent'
import ContactHero from '../Component/ContactHero'

const Inicio = () => {
  return (
       <>
        <Navbar/>
        <Content/>

        <HeroContent/>
        <ContactHero/>

        <Footer/>
        </>
  )
}

export default Inicio