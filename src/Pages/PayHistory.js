import React from 'react'
import Footer from '../Components/Footer'
import Hero from '../Components/Hero'
import payHistoryImg from '../Assets/payHistory.jpg'
import Navbar from '../Components/Navbar'

function PayHistory() {
  return (
   <>
   <Navbar/>
    <Hero
    cName = "hero-other"
    heroImg = {payHistoryImg}
    title = "Pay History Of Customers"
    />
    <Footer/>
    </>

  )
}

export default PayHistory
