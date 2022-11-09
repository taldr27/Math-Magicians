import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <h1 className="logo">Math Magicians</h1>
      <ul className="nav-bar">
        <li className="link-item">
          <NavLink to="/">
            Home
          </NavLink>
        </li>
        <li className="link-separator " />
        <li className="link-item">
          <NavLink to="/calculator">
            Calculator
          </NavLink>
        </li>
        <li className="link-separator" />
        <li className="link-item">
          <NavLink to="/quote">
            Quote
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
