import React from 'react';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">TechSolutions</div>
<ul className="nav-links">
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/services" className={({ isActive }) => (isActive ? "active-link" : "")}>
            Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active-link" : "")}>
            About
          </NavLink>
        </li>
       
      </ul>

      <div className="nav-profile">
        {/* نلف الزرار بـ Link ليعمل عند الضغط عليه */}
        <Link to="/profile">
          <button className="profile-btn">Profile</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;