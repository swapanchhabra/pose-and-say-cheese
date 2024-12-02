import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [showPortfolioDropdown, setShowPortfolioDropdown] = useState(false);
  const [isDarkBackground, setIsDarkBackground] = useState(true);

  const toggleDropdown = () => {
    setShowPortfolioDropdown((prev) => !prev);
  };

  const closeDropdown = () => {
    setShowPortfolioDropdown(false);
  };

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

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsDarkBackground(scrollPosition < 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center transition-colors duration-300 ${
        isDarkBackground ? 'bg-transparent text-white' : 'bg-white text-black'
      }`}
    >
      {/* Logo or Branding */}
      <h1 className="text-2xl font-bold font-poppins mt-5 ml-20">
        <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          Pose & Say Cheese
        </Link>
      </h1>

      {/* Navigation Links */}
      <ul className="hidden sm:flex space-x-6 font-medium font-poppins mt-5 mr-20">
        <li>
          <Link href="/" className="hover:text-gray-500">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-gray-500">
            About
          </Link>
        </li>
        <li>
          <Link href="/pricing" className="hover:text-gray-500">
            Pricing
          </Link>
        </li>
        <li className="relative dropdown-wrapper">
          {/* Dropdown Button */}
          <button
            onClick={toggleDropdown}
            className="hover:text-gray-500 focus:outline-none"
          >
            Portfolio
          </button>

          {/* Dropdown Content */}
          {showPortfolioDropdown && (
            <ul
              className="absolute bg-gray-900 bg-opacity-80 text-white shadow-lg mt-2 rounded w-48"
              onMouseEnter={() => setShowPortfolioDropdown(true)}
              onMouseLeave={() => setShowPortfolioDropdown(false)}
            >
              <li className="hover:bg-gray-700 px-4 py-2">
                <Link href="/portfolio/weddings">Weddings</Link>
              </li>
              <li className="hover:bg-gray-700 px-4 py-2">
                <Link href="/portfolio/business-portraits">Business Portraits</Link>
              </li>
              <li className="hover:bg-gray-700 px-4 py-2">
                <Link href="/portfolio/new-born">New Born</Link>
              </li>
              <li className="hover:bg-gray-700 px-4 py-2">
                <Link href="/portfolio/pregnancy">Pregnancy</Link>
              </li>
              <li className="hover:bg-gray-700 px-4 py-2">
                <Link href="/portfolio/family-portraits">Family Portraits</Link>
              </li>
              <li className="hover:bg-gray-700 px-4 py-2">
                <Link href="/portfolio/fashion-portraits">Fashion Portraits</Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link href="/contact" className="hover:text-gray-500">
            Contact
          </Link>
        </li>
        <li>
          <Link href="/blog" className="hover:text-gray-500">
            Blog
          </Link>
        </li>
      </ul>

      {/* Mobile Menu Toggle */}
      <button className="sm:hidden text-inherit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.25h16.5M3.75 12h16.5M3.75 18.75h16.5"
          />
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
