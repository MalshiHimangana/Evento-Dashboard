import React, { useState, useEffect } from 'react';
import Footer from '../Components/Footer';
import Hero from '../Components/Hero';
import VendorImg from '../Assets/Vendors.jpg';
import Navbar from '../Components/Navbar';
import supabase from '../config/supabaseClient';
import VendorTable from '../Components/VendorTable';

function Vendors() {
  const [vendors, setVendors] = useState([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [vendorName, setVendorName] = useState('');
  const [nic, setNic] = useState('');
  const [type, setType] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [description, setDescription] = useState('');

  const handleAddVendor = async () => {
   

     if (vendorName && nic && type && contactNo && description) {
        // Validate NIC format
        const nicRegex = /^[0-9]{12}$/;
      if (!nicRegex.test(nic)) {
        setError('Invalid NIC format. Please enter a valid NIC with 12 digits.');
        setSuccess('');
        return;
      }

      const contactNoRegex = /^[0-9]{10}$/;
      if (!contactNoRegex.test(contactNo)) {
        setError('Invalid Contact Number format. Please enter a valid number with 10 digits.');
        setSuccess('');
        return;
      }
      
      try {
        const { error } = await supabase
          .from('Vendors')
          .insert([
            {
              VendorsName: vendorName,
              NIC: nic,
              Type: type,
              ContactNo: contactNo,
              Description: description,
            },
          ]);
  
        if (error) {
          setError('Failed to add vendor.');
          setSuccess('');
        } else {
          setVendorName('');
          setNic('');
          setType('');
          setContactNo('');
          setDescription('');
          setError('');
          setSuccess('Vendor added successfully!');
          setTimeout(() => {
            setSuccess('');
          }, 8000); // Clear success message after 8 seconds
        }
      } catch (error) {
        console.error('Catch Error:', error);
        setError('Failed to add vendor.');
        setSuccess('');
      }
    } else {
      setError('Please fill out all fields before adding a vendor.');
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
          <div className="col-md-12">
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
              <label>NIC (National Identity Card)</label>
              <input
                type="text"
                className="form-control"
                value={nic}
                onChange={(e) => setNic(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Type</label>
              <select
                className="form-control"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="">Select a Type</option>
                <option value="Photography">Photography</option>
                <option value="Venue">Venue</option>
                <option value="Sound">Sound</option>
              </select>
            </div>
            <div className="form-group">
              <label>Contact Number</label>
              <input
                type="text"
                className="form-control"
                value={contactNo}
                onChange={(e) => setContactNo(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <button className="btn btn-primary mt-3 mb-4" onClick={handleAddVendor}>
              Add Vendor
            </button>
          </div>
        </div>
      </div>
      <VendorTable/>
      <Footer />
    </>
  );
}

export default Vendors;
