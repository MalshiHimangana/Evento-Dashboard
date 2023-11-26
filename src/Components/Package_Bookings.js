import React, { useState, useEffect } from 'react';
import supabase from '../config/supabaseClient';

function Package_Bookings() {
  const [packageBookings, setPackageBookings] = useState([]);

  useEffect(() => {
    // Fetch data from the 'Package_Bookings' table
    const fetchPackageBookings = async () => {
      try {
        const { data, error } = await supabase
          .from('Package_Bookings')
          .select('*');

        if (error) {
          throw error;
        }

        if (data) {
          // For each booking, fetch related package and booking event data
          const bookingsWithPackagesData = await Promise.all(
            data.map(async (booking) => {
              const packageData = await fetchPackageData(booking.PackageID);
              const bookingEventData = await fetchBookingEventData(booking.BookingID);
              return { ...booking, packageData, bookingEventData };
            })
          );

          setPackageBookings(bookingsWithPackagesData);
        }
      } catch (error) {
        console.error('Error fetching package bookings data:', error.message);
      }
    };

    fetchPackageBookings();
  }, []); 

  // Function to fetch package data based on PackageID
  const fetchPackageData = async (packageID) => {
    try {
      const { data, error } = await supabase
        .from('Packages')
        .select('*')
        .eq('PackageID', packageID)
        .single();

      if (error) {
        throw error;
      }

      return data;
    } catch (error) {
      console.error('Error fetching package data:', error.message);
      return null;
    }
  };

  // Function to fetch BookingDate based on BookingID
  const fetchBookingEventData = async (bookingID) => {
    try {
      const { data, error } = await supabase
        .from('BookingEvents')
        .select('BookingDate')
        .eq('BookingID', bookingID)
        .single();

      if (error) {
        throw error;
      }

      return data;
    } catch (error) {
      console.error('Error fetching booking event data:', error.message);
      return null;
    }
  };

  return (
    <div>
     
      <table className="table table-striped">
        <thead>
          <tr>
            <th>BookingID</th>
            <th>Package Name</th>
            <th>Package Type</th>
            <th>Package Price</th>
            <th>Booking Date</th>
          </tr>
        </thead>
        <tbody>
          {packageBookings.map((booking) => (
            <tr key={booking.BookingID}>
              <td>{booking.BookingID}</td>
              <td>{booking.packageData?.pacakge_name}</td>
              <td>{booking.packageData?.PackageType}</td>
              <td>{booking.packageData?.Package_price}</td>
              <td>{booking.bookingEventData?.BookingDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Package_Bookings;
