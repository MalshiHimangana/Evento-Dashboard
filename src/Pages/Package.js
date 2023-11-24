import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Hero from '../Components/Hero';
import PackagesImg from '../Assets/Packages.jpg';
import supabase from '../config/supabaseClient';

function Package() {
  const [formData, setFormData] = useState({
    package_name: '',
    PackageType: '',
    Package_price: '',
    Details: '',
    E_DiScription_Detaiels_headder: '',
    More: '',
    Image_Url: '',
    more_card_hedder: '',
    package_features: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Assuming 'packages' is the name of your Supabase table
    const { data, error } = await supabase.from('packages').insert([formData]);

    if (error) {
      console.error('Error adding package:', error.message);
    } else {
      console.log('Package added successfully:', data);
      // You can redirect the user or perform any other action upon successful submission
    }
  };

  return (
    <>
      <Navbar />
      <Hero cName="hero-other" heroImg={PackagesImg} title="Add Packages That Evento Offer" />

      <div className="container mt-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="packageName" className="form-label">Package Name</label>
            <input
              type="text"
              className="form-control"
              id="packageName"
              placeholder="Enter package name"
              name="package_name"
              value={formData.package_name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="packageType" className="form-label">Package Type</label>
            <select
              className="form-control"
              id="packageType"
              name="PackageType"
              value={formData.PackageType}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select Package Type</option>
              <option value="Birthday Party">Birthday Party</option>
              <option value="Weddings">Weddings</option>
              {/* Add more options as needed */}
            </select>
          </div>
          
          <div className="mb-3">
            <label htmlFor="packagePrice" className="form-label">Package Price</label>
            <input
              type="text"
              className="form-control"
              id="packagePrice"
              placeholder="Enter package price"
              name="Package_price"
              value={formData.Package_price}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="details" className="form-label">Details</label>
            <textarea
              className="form-control"
              id="details"
              placeholder="Enter package details"
              name="Details"
              value={formData.Details}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="descriptionHeader" className="form-label">Description Header</label>
            <input
              type="text"
              className="form-control"
              id="descriptionHeader"
              placeholder="Enter description header"
              name="E_DiScription_Detaiels_headder"
              value={formData.E_DiScription_Detaiels_headder}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="more" className="form-label">More</label>
            <textarea
              className="form-control"
              id="more"
              placeholder="Enter additional information"
              name="More"
              value={formData.More}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="imageUrl" className="form-label">Image URL</label>
            <input
              type="text"
              className="form-control"
              id="imageUrl"
              placeholder="Enter image URL"
              name="Image_Url"
              value={formData.Image_Url}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="moreCardHeader" className="form-label">More Card Header</label>
            <input
              type="text"
              className="form-control"
              id="moreCardHeader"
              placeholder="Enter more card header"
              name="more_card_hedder"
              value={formData.more_card_hedder}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="packageFeatures" className="form-label">Package Features (JSON)</label>
            <textarea
              className="form-control"
              id="packageFeatures"
              placeholder="Enter package features in JSON format"
              name="package_features"
              value={formData.package_features}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>

      <Footer />
    </>
  );
}

export default Package;
