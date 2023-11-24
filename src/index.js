import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom'
import { AuthProvider } from './Components/AuthContext.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
  <BrowserRouter>
  <App />
  </BrowserRouter>
  </AuthProvider>

    
  
);