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
          // For each booking, fetch related package data from 'Packages' table
          const bookingsWithPackagesData = await Promise.all(
            data.map(async (booking) => {
              const packageData = await fetchPackageData(booking.PackageID);
              return { ...booking, packageData };
            })
          );

          setPackageBookings(bookingsWithPackagesData);
        }
      } catch (error) {
        console.error('Error fetching package bookings data:', error.message);
      }
    };

    fetchPackageBookings();
  }, []); // Ensure the effect runs only once

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

  return (
    <div>
      <h2>Package Bookings</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>BookingID</th>
            <th>Package Name</th>
            <th>Package Type</th>
            <th>Package Price</th>
          </tr>
        </thead>
        <tbody>
          {packageBookings.map((booking) => (
            <tr key={booking.BookingID}>
              <td>{booking.BookingID}</td>
              <td>{booking.packageData?.pacakge_name}</td>
              <td>{booking.packageData?.PackageType}</td>
              <td>{booking.packageData?.Package_price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Package_Bookings;
