import React, { useState } from 'react';
import { Menuitems } from './Menuitems';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../Components/AuthContext'; 

const Navbar = () => {
  const { user, logoutUser } = useAuth(); // Assuming useAuth provides user and logoutUser

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div>
      <nav className='NavbarItems'>
        <Link to="/Dashboard" className='Navbar-logo'>Evento</Link>
        <div className='menu-icons' onClick={handleClick}>
          <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
          {Menuitems.map((item, index) => (
            <li key={index}>
              <Link className={item.cName} to={item.url}>
                <i className={item.icon}></i>
                {item.title}
              </Link>
            </li>
          ))}
          {user && (
            <li>
              <button className="nav-links" onClick={logoutUser}>
                <i className="fa fa-sign-out"></i>
                Sign Out
              </button>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
