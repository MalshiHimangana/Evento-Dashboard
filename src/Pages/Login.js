import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import './Login.css';
import supabase from '../config/supabaseClient';

function Login() {
  const navigate = useNavigate(); // Initialize the navigate function
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleLogin = () => {
    // Replace this with your authentication logic. For now, we'll use dummy data.
    if (formData.username === 'admin' && formData.password === '123') {
      // Successful login; navigate to the dashboard page
      navigate('/Dashboard');
    } else {
      // Invalid login
      alert('Invalid credentials. Try "demo" and "password".');
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
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      name="username"
                      placeholder="Enter your username"
                      value={formData.username}
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
                  <button type="button" className="btn btn-primary btn-block" onClick={handleLogin}>
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
