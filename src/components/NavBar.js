import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/quote',
      text: 'Quote',
    },
  ];
  return (
    <nav className="navBar">
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <Link to={link.path} activeclassname="active-link">
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
