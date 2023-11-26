import React, { useState, useEffect } from 'react';
import Footer from '../Components/Footer';
import Hero from '../Components/Hero';
import payHistoryImg from '../Assets/payHistory.jpg';
import Navbar from '../Components/Navbar';
import supabase from '../config/supabaseClient';

function PayHistory() {
  const [payHistoryData, setPayHistoryData] = useState([]);
  

  useEffect(() => {
    // Fetch data from the 'Payment History' table in Supabase
    const fetchPayHistory = async () => {
      try {
        const { data, error } = await supabase
          .from('PaymentHistory')
          .select('*')
          .order('PaymentDate', { ascending: false }) // Order by Payment Date, latest first
          .limit(10); // Limit the results to 10 records

        if (error) {
          throw error;
        }

        if (data) {
          setPayHistoryData(data);
        }
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchPayHistory();
  }, []); // Ensure the effect runs only once

  
  return (
    <>
      <Navbar />
      <Hero cName="hero-other" heroImg={payHistoryImg} title="Pay History Of Customers" />
      <div className="container mt-4 mb-4">
       
        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive">
              <table className="table table-striped table-bordered table-hover">
                <thead>
                  <tr>
                    <th>Payment ID</th>
                    <th>Value</th>
                    <th>Payment Type</th>
                    <th>Payment Date</th>
                    <th>Booking ID</th>
                    {/* Add other table header as needed */}
                  </tr>
                </thead>
                <tbody>
                  {payHistoryData
                   
                    .map((payment, index) => (
                      <tr key={index}>
                        <td>{payment.PaymentID}</td>
                        <td>${payment.Value}</td>
                        <td>{payment.PaymentType}</td>
                        <td>{payment.PaymentDate}</td>
                        <td>{payment.BookingID}</td>
                        {/* Add other table data as needed */}
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

export default PayHistory;
