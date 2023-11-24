import React, { useState, useEffect } from 'react';
import supabase from '../config/supabaseClient';

function VendorTable() {
  const [vendors, setVendors] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchVendors() {
      try {
        const { data, error } = await supabase.from('Vendors').select('*');

        if (error) {
          setError('Failed to fetch vendors.');
        } else {
          setVendors(data);
        }
      } catch (error) {
        setError('Failed to fetch vendors.');
      }
    }

    fetchVendors();
  }, []);

  return (
    <div className="table-responsive">
      {error && <p className="text-danger">{error}</p>}
      <table className="table table-striped table-bordered table-hover">
        <thead className="thead-dark">
          <tr>
            <th>Vendor Name</th>
            <th>Type</th>
            <th>Contact No</th>
            <th>NIC</th>
          </tr>
        </thead>
        <tbody>
          {vendors.map((vendor) => (
            <tr key={vendor.Vendor_ID}>
              <td>{vendor.VendorsName}</td>
              <td>{vendor.Type}</td>
              <td>{vendor.ContactNo}</td>
              <td>{vendor.NIC}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default VendorTable;
