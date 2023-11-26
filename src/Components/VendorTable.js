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

  const handleDelete = async (vendorId) => {
    try {
      // Perform the deletion in the database
      const { error } = await supabase.from('Vendors').delete().eq('Vendor_ID', vendorId);

      if (error) {
        setError('Failed to delete vendor.');
      } else {
        // Update the local state after successful deletion
        setVendors((prevVendors) => prevVendors.filter((vendor) => vendor.Vendor_ID !== vendorId));
      }
    } catch (error) {
      setError('Failed to delete vendor.');
    }
  };

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
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {vendors.map((vendor) => (
            <tr key={vendor.Vendor_ID}>
              <td>{vendor.VendorsName}</td>
              <td>{vendor.Type}</td>
              <td>{vendor.ContactNo}</td>
              <td>{vendor.NIC}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(vendor.Vendor_ID)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default VendorTable;
