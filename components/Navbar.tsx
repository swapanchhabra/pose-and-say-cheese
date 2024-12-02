import React, { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [showPortfolioDropdown, setShowPortfolioDropdown] = useState(false);

  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">
        <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        Pose and Say Cheese
        </Link>
        </h1>
      <ul className="flex space-x-6">
        <li>
          <a href="/" className="hover:text-gray-300">
            Home
          </a>
        </li>
        <li>
          <a href="/about" className="hover:text-gray-300">
            About
          </a>
        </li>
        <li>
          <a href="/pricing" className="hover:text-gray-300">
            Pricing
          </a>
        </li>
        <li
          className="relative"
          onMouseEnter={() => setShowPortfolioDropdown(true)}
          onMouseLeave={() => setShowPortfolioDropdown(false)}
        >
          <a href="/portfolio" className="hover:text-gray-300">
            Portfolio
          </a>
          {showPortfolioDropdown && (
            <ul className="absolute bg-white text-gray-800 shadow-lg mt-2 rounded w-48">
              <li className="hover:bg-gray-100 px-4 py-2">
                <a href="/portfolio/weddings">Weddings</a>
              </li>
              <li className="hover:bg-gray-100 px-4 py-2">
                <a href="/portfolio/business-portraits">Business Portraits</a>
              </li>
              <li className="hover:bg-gray-100 px-4 py-2">
                <a href="/portfolio/new-born">New Born</a>
              </li>
              <li className="hover:bg-gray-100 px-4 py-2">
                <a href="/portfolio/pregnancy">Pregnancy</a>
              </li>
              <li className="hover:bg-gray-100 px-4 py-2">
                <a href="/portfolio/family-portraits">Family Portraits</a>
              </li>
              <li className="hover:bg-gray-100 px-4 py-2">
                <a href="/portfolio/fashion-portraits">Fashion Portraits</a>
              </li>
            </ul>
          )}
        </li>
        <li>
          <a href="/contact" className="hover:text-gray-300">
            Contact
          </a>
        </li>
        <li>
          <a href="/blog" className="hover:text-gray-300">
            Blog
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
