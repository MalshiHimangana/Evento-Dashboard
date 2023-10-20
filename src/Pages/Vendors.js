import React from 'react'
import Footer from '../Components/Footer'
import Hero from '../Components/Hero'
import VendorImg from '../Assets/Vendors.jpg'
import Navbar from '../Components/Navbar'

function Vendors() {
  return (
    <>
    <Navbar/>
    <Hero
    cName = "hero-other"
    heroImg = {VendorImg}
    title = "Manage All Vendors Of Evento"
    />
    <Footer/>
    </>
  )
}

export default Vendors
