import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Hero from '../Components/Hero'
import Evento from '../Assets/evento.jpg'
import VendorTable from '../Components/VendorTable'
import PackageTable from '../Components/PackageTable' 

function Dashboard() {
  return (
    <>
    <Navbar/>
    <Hero
    cName = "hero"
    heroImg = {Evento}
    title = "Manage All Ongoing Process With Evento Dashboard"
    text = "Start with Evento"
    url = "/Booking"
    btnClass ="homeBtn"
    btnText ="Start"

    />

    <h3 className='mt-2'>Available Vendors </h3>
    <VendorTable/>
    <h3 className='mt-4'>Company Packages</h3>
    <PackageTable/>
    <Footer/>
    </>
  )
}

export default Dashboard
