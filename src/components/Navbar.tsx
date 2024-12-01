import React from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <h1>Pose and Say Cheese</h1>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/wedding">Wedding</a></li>
        <li><a href="/business-portraits">Business Portraits</a></li>
        <li><a href="/new-born">New Born</a></li>
        <li><a href="/family-portraits">Family Portraits</a></li>
        <li><a href="/pregnancy">Pregnancy</a></li>
        <li><a href="/fashion-portraits">Fashion Portraits</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
