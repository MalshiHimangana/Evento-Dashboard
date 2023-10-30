import React from 'react';
import Footer from '../Components/Footer';
import Hero from '../Components/Hero';
import BookingImg from '../Assets/Bookings.jpg';
import Navbar from '../Components/Navbar';
import './Booking.css'
import supabase from '../config/supabaseClient';

function Booking() {
  //Dummy Data
  const bookingData = [
    {
      customerName: 'John Doe',
      bookingDate: '2023-10-05',
      bookingTime: '10:00 AM',
      status: 'Pending',
    },
    {
      customerName: 'Jane Smith',
      bookingDate: '2023-10-10',
      bookingTime: '3:30 PM',
      status: 'Pending',
    },
    {
      customerName: 'Alice Johnson',
      bookingDate: '2023-10-15',
      bookingTime: '2:00 PM',
      status: 'Pending',
    },
    {
      customerName: 'Bob Williams',
      bookingDate: '2023-10-20',
      bookingTime: '11:45 AM',
      status: 'Pending',
    },
    {
      customerName: 'Eva Davis',
      bookingDate: '2023-11-02',
      bookingTime: '4:15 PM',
      status: 'Pending',
    },
    // Add more data as needed
  ];
  
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-other"
        heroImg={BookingImg}
        title="Manage All Customer Bookings"
      />
      <div className="container mt-4 mb-4">
        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive">
              <table className="table table-striped table-bordered table-hover">
                <thead>
                  <tr>
                    <th>Customer Name</th>
                    <th>Booking Date</th>
                    <th>Booking Time</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {bookingData.map((booking, index) => (
                    <tr key={index}>
                      <td>{booking.customerName}</td>
                      <td>{booking.bookingDate}</td>
                      <td>{booking.bookingTime}</td>
                      <td>{booking.status}</td>
                      <td>
                        <button className="btn btn-success accept-button  mr-2">Accept</button>
                        <button className="btn btn-danger decline-button ml-2">Decline</button>
                     </td>

                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Booking;
