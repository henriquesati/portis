import React from 'react';
import { Link } from 'react-router-dom';
import './navibar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div id='namelogo'>
        pilasfoli
      </div>
      <div className="navbar-content"> 
      </div>
      <div className="navbar-content">
        portfolios |
      </div> 
      <div className="navbar-content">
      </div>
    </div>
  );
};

export default Navbar;