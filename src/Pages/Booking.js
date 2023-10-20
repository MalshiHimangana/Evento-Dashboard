import React from 'react'
import Footer from '../Components/Footer'
import Hero from '../Components/Hero'
import BookingImg from '../Assets/Bookings.jpg'
import Navbar from '../Components/Navbar'

function Booking() {
  return (
   <>
   <Navbar/>
    <Hero
    cName = "hero-other"
    heroImg = {BookingImg}
    title = "Manage All Customer Bookings"
    />
    <Footer/>
   </>
  )
}

export default Booking
