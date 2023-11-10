import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { useAuth } from '../Components/AuthContext'; // Update the path as needed
import supabase from '../config/supabaseClient';

function Login() {
  const navigate = useNavigate();
  const { user } = useAuth(); // Assuming the useAuth hook provides user details
  const [formData, setFormData] = useState({ name: '', password: '' });

  const handleLogin = async () => {
    try {
      // Check if the user exists in the ADMIN_PANEL table
      const { data, error } = await supabase
        .from('ADMIN_PANEL')
        .select('AdminId')
        .eq('Name', formData.name)
        .eq('Password', formData.password)
        .single();

      if (error) {
        console.error('Error during login:', error.message);
        throw new Error('An error occurred during login.');
      }

      if (data) {
        // Successful login; navigate to the dashboard page
        navigate('/Dashboard');
        
        // Assuming successful login updates the user context
        // You can now check if the user details are available
        if (user) {
          console.log('User details saved:', user);
        }
      } else {
        // Invalid login
        throw new Error('Invalid credentials. Please try again.');
      }
    } catch (error) {
      console.error('Error during login:', error.message);
      // Show an alert for any login errors
      alert(error.message);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="login-page">
      <div className="container">
        <div className="row justify-content-center align-items-center min-vh-100">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h3>Login</h3>
              </div>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={handleInputChange}
                    />
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary btn-block mt-2"
                    onClick={handleLogin}
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
