import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [showPortfolioDropdown, setShowPortfolioDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowPortfolioDropdown((prev) => !prev);
  };

  const closeDropdown = () => {
    setShowPortfolioDropdown(false);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest('.dropdown-wrapper')) {
        closeDropdown();
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

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
        <li className="relative dropdown-wrapper">
          <button
            onClick={toggleDropdown}
            className="hover:text-gray-300 focus:outline-none"
          >
            Portfolio
          </button>
          {showPortfolioDropdown && (
            <ul
              className="absolute bg-white text-gray-800 shadow-lg mt-2 rounded w-48"
              onMouseEnter={() => setShowPortfolioDropdown(true)}
              onMouseLeave={() => setShowPortfolioDropdown(false)}
            >
              <li className="hover:bg-gray-100 px-4 py-2">
                <Link href="/portfolio/weddings">Weddings</Link>
              </li>
              <li className="hover:bg-gray-100 px-4 py-2">
                <Link href="/portfolio/business-portraits">Business Portraits</Link>
              </li>
              <li className="hover:bg-gray-100 px-4 py-2">
                <Link href="/portfolio/new-born">New Born</Link>
              </li>
              <li className="hover:bg-gray-100 px-4 py-2">
                <Link href="/portfolio/pregnancy">Pregnancy</Link>
              </li>
              <li className="hover:bg-gray-100 px-4 py-2">
                <Link href="/portfolio/family-portraits">Family Portraits</Link>
              </li>
              <li className="hover:bg-gray-100 px-4 py-2">
                <Link href="/portfolio/fashion-portraits">Fashion Portraits</Link>
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
