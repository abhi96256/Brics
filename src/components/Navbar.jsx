'use client';

import React, { useState, useEffect, useRef } from 'react';
import { FaInstagram, FaFacebook, FaGithub, FaCode, FaPalette, FaBullhorn, FaMobileAlt, FaBrain } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import MobileDrawer from './MobileDrawer';
import './Navbar.css';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownTimeout = useRef(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerDropdownOpen, setDrawerDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 480);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleDropdownEnter = () => {
    if (dropdownTimeout.current) {
      clearTimeout(dropdownTimeout.current);
    }
    setDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 350);
  };

  return (
    <nav className="navbar-nav">
      <div className="navbar-logo">
        <Link href="/">
          <Image src="/logo.png" alt="MayDiv Logo" width={150} height={50} quality={100} unoptimized />
        </Link>
      </div>
      {!isMobile && (
        <ul className="navbar-links">
          <li><Link href="/">Home</Link></li>
          <li className="navbar-dropdown"
            onMouseEnter={handleDropdownEnter}
            onMouseLeave={handleDropdownLeave}
            onFocus={handleDropdownEnter}
            onBlur={handleDropdownLeave}
          >
            <span className="navbar-dropdown-toggle" style={{ marginBottom: '10px' }}>Services</span>
            <ul className="navbar-dropdown-menu" style={{
              display: dropdownOpen ? 'flex' : 'none',
              opacity: dropdownOpen ? 1 : 0,
              pointerEvents: dropdownOpen ? 'auto' : 'none',
              transform: dropdownOpen ? 'translateX(-43%) translateY(0) scale(1)' : 'translateX(-50%) translateY(10px) scale(0.95)'
            }}>
              <li><Link href="/web-development"><span><FaCode className="navbar-dropdown-icon" /> Web Development</span></Link></li>
              <li><Link href="/apps/ui-ux"><span><FaPalette className="navbar-dropdown-icon" /> UI/UX Design</span></Link></li>
              <li><Link href="/marketing"><span><FaBullhorn className="navbar-dropdown-icon" /> Social Media and Marketing</span></Link></li>
              <li><Link href="/app-development"><span><FaMobileAlt className="navbar-dropdown-icon" /> App Development</span></Link></li>
              <li><Link href="/ai"><span><FaBrain className="navbar-dropdown-icon" /> Artificial Intelligence</span></Link></li>
            </ul>
          </li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/about">About Us</Link></li>
        </ul>
      )}
      <MobileDrawer
        drawerOpen={drawerOpen}
        setDrawerOpen={setDrawerOpen}
        drawerDropdownOpen={drawerDropdownOpen}
        setDrawerDropdownOpen={setDrawerDropdownOpen}
        isMobile={isMobile}
      />
      <div className="navbar-socials">
        <a href="https://www.instagram.com/maydiv_infotech?igsh=YjE4YnB5NmJ0MzFy" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://www.facebook.com/profile.php?id=615720000000000" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        <a href="https://github.com/" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
      </div>
    </nav>
  );
};

export default Navbar; 