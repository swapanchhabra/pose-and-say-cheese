import React, { useState } from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [showPortfolioDropdown, setShowPortfolioDropdown] = useState(false);

  return (
    <nav className="navbar">
      <h1>Pose and Say Cheese</h1>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/pricing">Pricing</a></li>
        <li 
          onMouseEnter={() => setShowPortfolioDropdown(true)} 
          onMouseLeave={() => setShowPortfolioDropdown(false)}
        >
          <a href="/portfolio">Portfolio</a>
          {showPortfolioDropdown && (
            <ul className="dropdown">
              <li><a href="/portfolio/weddings">Weddings</a></li>
              <li><a href="/portfolio/business-portraits">Business Portraits</a></li>
              <li><a href="/portfolio/new-born">New Born</a></li>
              <li><a href="/portfolio/pregnancy">Pregnancy</a></li>
              <li><a href="/portfolio/family-portraits">Family Portraits</a></li>
              <li><a href="/portfolio/fashion-portraits">Fashion Portraits</a></li>
            </ul>
          )}
        </li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/blog">Blog</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;