import React, { useState } from 'react';
import { useAuth } from '../Components/AuthContext';
import supabase from '../config/supabaseClient';
import { useNavigate } from 'react-router-dom';
import './Login.css'

function Login() {
  const { loginUser } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    // Query the ADMIN_PANEL table for matching records
    const { data, error } = await supabase
      .from('ADMIN_PANEL')
      .select('*')
      .eq('Name', username)
      .eq('Password', password);

    if (error) {
      console.error('Error querying Supabase:', error.message);
      return;
    }

    // If matching records are found, log in the user
    if (data && data.length > 0) {
      // Assuming the user data includes 'name' and 'adminId'
      const userData = {
        name: data[0].Name,
        adminId: data[0].AdminId,
      };

      loginUser(userData);

      console.log('User data stored in local storage:', userData);
      navigate('/Dashboard');

     
    } else {
      console.log('Invalid credentials. Please try again.');
      // You may want to display an error message to the user
    }
  };


  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-card-body">
          <form>
            <div className="mb-3">
              <label htmlFor="username" className="login-form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="login-form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="button" className="login-btn-primary" onClick={handleLogin}>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
 
}


export default Login;
