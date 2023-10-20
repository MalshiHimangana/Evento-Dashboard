import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Hero from '../Components/Hero'
import Evento from '../Assets/evento.jpg'

function Dashboard() {
  return (
    <>
    <Navbar/>
    <Hero
    cName = "hero-other"
    heroImg = {Evento}
    title = "Manage All Ongoing Process With Evento Dashboard"
    />
    <Footer/>
    </>
  )
}

export default Dashboard
