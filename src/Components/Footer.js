import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="social-icons mb-4">
              <a href="https://www.facebook.com/" target='_blank' className="text-white me-3">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://twitter.com/?lang=en" target='_blank' className="text-white me-3">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/?hl=en" target='_blank' className="text-white me-3">
                <i className="fab fa-instagram"></i>
              </a>
            </div>

            <div className="mb-4">
              <h5>Contact Us</h5>
              <p>Email: contact@Evento.com</p>
              <p>Phone: +1 (123) 456-7890</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="mb-4">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li>
                  <Link to="/Dashboard" className="footer-link">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="/Vendors" className="footer-link">
                    Vendors
                  </Link>
                </li>
                <li>
                  <Link to="/Booking" className="footer-link">
                    Bookings
                  </Link>
                </li>
                <li>
                  <Link to="/PayHistory" className='footer-link'>
                    Pay History
                  </Link>
                </li>
                
              </ul>
            </div>
          </div>

          <div className="col-lg-4 col-md-12">
            <div className="mb-4">
              <h5>Subscribe to Our Newsletter</h5>
              <form>
                <div className="input-group">
                  <input type="email" className="form-control" placeholder="Enter your email" />
                  <button className="btn btn-success" type="button">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} Evento. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
