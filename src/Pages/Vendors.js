import React, { useState, useEffect } from 'react';
import Footer from '../Components/Footer';
import Hero from '../Components/Hero';
import VendorImg from '../Assets/Vendors.jpg';
import Navbar from '../Components/Navbar';
import supabase from '../config/supabaseClient';

function Vendors() {
  const [vendorName, setVendorName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [vendorPassword, setVendorPassword] = useState('');
  const [nic, setNic] = useState('');
  const [vendors, setVendors] = useState([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleAddVendor = async () => {
    if (vendorName && email && contactNumber && vendorPassword && nic) {
      try {
        const { data, error } = await supabase.from('Vendors').insert([
          {
            VendorsName: vendorName,
            Email: email,
            ContatNo: contactNumber,
            V_Password: vendorPassword,
            NIC: nic,
          },
        ]);

        if (error) {
          setError('Failed to add vendor.');
          setSuccess('');
        } else {
          setVendors([...vendors, data[0]]);
          setVendorName('');
          setEmail('');
          setContactNumber('');
          setVendorPassword('');
          setNic('');
          setError('');
          setSuccess('Vendor added successfully!');
          setTimeout(() => {
            setSuccess('');
          }, 8000); // Clear success message after 8 seconds
        }
      } catch (error) {
        setError('Failed to add vendor.');
        setSuccess('');
      }
    } else {
      setError('Please fill out all fields before adding a vendor.');
      setSuccess('');
    }
  };



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

  const handleDeleteVendor = async (index, vendorID) => {
    try {
      const { data, error } = await supabase.from('Vendors').delete().eq('Vendor ID', [`Vendor ID`]);

      if (error) {
        setError('Failed to delete vendor.');
      } else {
        const updatedVendors = vendors.filter((_, i) => i !== index);
        setVendors(updatedVendors);
        setSuccess('Vendor deleted successfully!');
        setTimeout(() => {
          setSuccess('');
        }, 8000); // Clear success message after 8 seconds
      }
    } catch (error) {
      setError('Failed to delete vendor.');
      setSuccess('');
    }
  };

  return (
    <>
      <Navbar />
      <Hero
        cName="hero-other"
        heroImg={VendorImg}
        title="Manage All Vendors Of Evento"
      />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2>Add Vendor</h2>
            {error && <p className="text-danger">{error}</p>}
            {success && <p className="text-success">{success}</p>}
            <div className="form-group">
              <label>Vendor Name</label>
              <input
                type="text"
                className="form-control"
                value={vendorName}
                onChange={(e) => setVendorName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="text"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Contact Number</label>
              <input
                type="text"
                className="form-control"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Vendor Password</label>
              <input
                type="password"
                className="form-control"
                value={vendorPassword}
                onChange={(e) => setVendorPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>NIC (National Identity Card)</label>
              <input
                type="text"
                className="form-control"
                value={nic}
                onChange={(e) => setNic(e.target.value)}
              />
            </div>
            <button className="btn btn-primary mt-3 mb-4" onClick={handleAddVendor}>
              Add Vendor
            </button>
          </div>
          <div className="col-md-6">
            <h2>Vendor List</h2>
            <div className="table-responsive">
              <table className="table table-striped table-bordered table-hover">
                <thead>
                  <tr>
                   
                    <th>Vendor Name</th>
                    <th>Email</th>
                    <th>Contact Number</th>
                    <th>Vendor Password</th>
                    <th>NIC</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {vendors.map((vendor, index) => (
                    <tr key={index}>
                      
                      <td>{vendor.VendorsName}</td>
                      <td>{vendor.Email}</td>
                      <td>{vendor.ContatNo}</td>
                      <td>{vendor.V_Password}</td>
                      <td>{vendor.NIC}</td>
                      <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDeleteVendor(index, vendor.VendorID)}
                  >
                    Delete
                  </button>
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

export default Vendors;
