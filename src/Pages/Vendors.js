import React, { useState } from 'react';
import Footer from '../Components/Footer';
import Hero from '../Components/Hero';
import VendorImg from '../Assets/Vendors.jpg';
import Navbar from '../Components/Navbar';

function Vendors() {
  const [vendorName, setVendorName] = useState('');
  const [vendorType, setVendorType] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [vendors, setVendors] = useState([]);
  const [error, setError] = useState('');

  const handleAddVendor = () => {
    if (vendorName && vendorType && contactNumber && email) {
      const newVendor = {
        name: vendorName,
        type: vendorType,
        contact: contactNumber,
        email: email,
      };
      setVendors([...vendors, newVendor]);
      setVendorName('');
      setVendorType('');
      setContactNumber('');
      setEmail('');
      setError('');
    } else {
      setError('Please fill out all fields before adding a vendor.');
    }
  };

  const handleDeleteVendor = (index) => {
    const updatedVendors = vendors.filter((_, i) => i !== index);
    setVendors(updatedVendors);
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
              <label>Vendor Type</label>
              <select
                className="form-control"
                value={vendorType}
                onChange={(e) => setVendorType(e.target.value)}
              >
                <option value="">Select Vendor Type</option>
                <option value="Caterer">Caterer</option>
                <option value="Photographer">Photographer</option>
                <option value="Decorator">Decorator</option>
                {/* Add more vendor types as needed */}
              </select>
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
              <label>Email</label>
              <input
                type="text"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                    <th>Vendor Type</th>
                    <th>Contact Number</th>
                    <th>Email</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {vendors.map((vendor, index) => (
                    <tr key={index}>
                      <td>{vendor.name}</td>
                      <td>{vendor.type}</td>
                      <td>{vendor.contact}</td>
                      <td>{vendor.email}</td>
                      <td>
                        <button
                          className="btn btn-danger "
                          onClick={() => handleDeleteVendor(index)}
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
