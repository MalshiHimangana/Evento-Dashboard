import React from 'react';
import Footer from '../Components/Footer';
import Hero from '../Components/Hero';
import BookingImg from '../Assets/Bookings.jpg';
import Navbar from '../Components/Navbar';
import './Booking.css'
import supabase from '../config/supabaseClient';
import Package_Bookings from '../Components/Package_Bookings';

function Booking() {
  
  
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-other"
        heroImg={BookingImg}
        title="Manage All Customer Bookings"
      />
     <Package_Bookings/>
      <Footer />
    </>
  );
}

export default Booking;
