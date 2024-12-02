import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [showPortfolioDropdown, setShowPortfolioDropdown] = useState(false);
  const [isDarkBackground, setIsDarkBackground] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setShowPortfolioDropdown((prev) => !prev);
  };

  const closeDropdown = () => {
    setShowPortfolioDropdown(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
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
      className={`fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between transition-colors duration-300 ${
        isDarkBackground ? 'bg-transparent text-white' : 'bg-white text-black shadow-md'
      }`}
    >
      {/* Logo or Branding */}
      <h1 className="text-2xl font-bold font-poppins">
        <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          Pose & Say Cheese Photography
        </Link>
      </h1>

      {/* Desktop Navigation */}
      <ul className="hidden sm:flex space-x-6 font-medium font-poppins">
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
            <ul className="absolute bg-gray-900 bg-opacity-80 text-white shadow-lg mt-2 rounded w-48">
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
      <button
        className="sm:hidden text-inherit focus:outline-none"
        onClick={toggleMobileMenu}
      >
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

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-800 text-white flex flex-col items-center py-4 space-y-4 sm:hidden">
          <Link href="/" onClick={toggleMobileMenu}>
            Home
          </Link>
          <Link href="/about" onClick={toggleMobileMenu}>
            About
          </Link>
          <Link href="/pricing" onClick={toggleMobileMenu}>
            Pricing
          </Link>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="hover:text-gray-500 focus:outline-none"
            >
              Portfolio
            </button>
            {showPortfolioDropdown && (
              <ul className="bg-gray-900 text-white rounded w-full text-center space-y-2 py-2">
                <li>
                  <Link href="/portfolio/weddings" onClick={toggleMobileMenu}>
                    Weddings
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio/business-portraits" onClick={toggleMobileMenu}>
                    Business Portraits
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio/new-born" onClick={toggleMobileMenu}>
                    New Born
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio/pregnancy" onClick={toggleMobileMenu}>
                    Pregnancy
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio/family-portraits" onClick={toggleMobileMenu}>
                    Family Portraits
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio/fashion-portraits" onClick={toggleMobileMenu}>
                    Fashion Portraits
                  </Link>
                </li>
              </ul>
            )}
          </div>
          <Link href="/contact" onClick={toggleMobileMenu}>
            Contact
          </Link>
          <Link href="/blog" onClick={toggleMobileMenu}>
            Blog
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
