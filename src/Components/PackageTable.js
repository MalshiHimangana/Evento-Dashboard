import React, { useState, useEffect } from 'react';
import supabase from '../config/supabaseClient';

function PackageTable() {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    // Fetch packages from Supabase on component mount
    fetchPackages();
  }, []);

  const fetchPackages = async () => {
    try {
      // Assuming 'packages' is the name of your Supabase table
      const { data, error } = await supabase.from('Packages').select('*');

      if (error) {
        throw error;
      }

      setPackages(data);
    } catch (error) {
      console.error('Error fetching packages:', error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      // Assuming 'packages' is the name of your Supabase table
      const { error } = await supabase.from('Packages').delete().eq('PackageID', id);

      if (error) {
        throw error;
      }

      console.log('Package deleted successfully');
      // Fetch packages again after deletion
      fetchPackages();
    } catch (error) {
      console.error('Error deleting package:', error.message);
    }
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Package Name</th>
            <th>Package Type</th>
            <th>Package Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {packages.map((packageItem) => (
            <tr key={packageItem.PackageID}>
              <td>{packageItem.pacakge_name}</td>
              <td>{packageItem.PackageType}</td>
              <td>{packageItem.Package_price}</td>
              {/* Add more columns as needed */}
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(packageItem.PackageID)}
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

export default PackageTable;
