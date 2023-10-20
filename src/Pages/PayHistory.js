import React from 'react';
import Footer from '../Components/Footer';
import Hero from '../Components/Hero';
import payHistoryImg from '../Assets/payHistory.jpg';
import Navbar from '../Components/Navbar';

function PayHistory() {
  //Dummy data
  const payHistoryData = [
    {
      customerName: 'John Doe',
      paymentAmount: 100,
      paymentDate: '2023-10-01',
    },
    {
      customerName: 'Jane Smith',
      paymentAmount: 150,
      paymentDate: '2023-09-15',
    },
    {
      customerName: 'Alice Johnson',
      paymentAmount: 75,
      paymentDate: '2023-08-28',
    },
    {
      customerName: 'Bob Williams',
      paymentAmount: 200,
      paymentDate: '2023-08-10',
    },
    {
      customerName: 'Eva Davis',
      paymentAmount: 50,
      paymentDate: '2023-07-22',
    },
    {
      customerName: 'Michael Brown',
      paymentAmount: 120,
      paymentDate: '2023-07-05',
    },
    // Add more data as needed
  ];

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
                    <th>Customer Name</th>
                    <th>Payment Amount</th>
                    <th>Payment Date</th>
                  </tr>
                </thead>
                <tbody>
                  {payHistoryData.map((payment, index) => (
                    <tr key={index}>
                      <td>{payment.customerName}</td>
                      <td>${payment.paymentAmount}</td>
                      <td>{payment.paymentDate}</td>
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
