import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';
import { FaMosque } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar: React.FC = () => {
  const location = useLocation();
  const isInnerPage = location.pathname !== '/';
  const [scrolled, setScrolled] = useState(isInnerPage);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Always set scrolled to true for inner pages
    if (isInnerPage) {
      setScrolled(true);
      return;
    }

    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled, isInnerPage]);

  // Close mobile menu when changing routes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Control body overflow when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [mobileMenuOpen]);

  // Handle clicks outside of the mobile menu
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      // If menu is open and click is outside menu and not on the menu button
      if (
        mobileMenuOpen &&
        mobileMenuRef.current &&
        menuButtonRef.current &&
        !mobileMenuRef.current.contains(e.target as Node) &&
        !menuButtonRef.current.contains(e.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isInnerPage ? 'inner-page-navbar' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo-container">
          <Link to="/" className="navbar-logo">
            <FaMosque />
            <span>Mosque</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="main-nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          
          <div className="dropdown-container">
            <Link to="/programs" className="dropdown-toggle">
              Programs
            </Link>
            <div className="dropdown-menu">
              <Link to="/programs" className="dropdown-item">All Programs</Link>
              <Link to="/sundayschool" className="dropdown-item">Sunday School</Link>
              <Link to="/programs#monthly-halaqa" className="dropdown-item">Monthly Halaqa</Link>
              <Link to="/programs#quran-tafseer" className="dropdown-item">Quran Tafseer</Link>
              <Link to="/programs#youth-leadership" className="dropdown-item">Youth Leadership</Link>
              <Link to="/programs#weekly-halaqa" className="dropdown-item">Weekly Halaqa</Link>
              <Link to="/programs#interfaith" className="dropdown-item">Interfaith Outreach</Link>
            </div>
          </div>
          
          <div className="dropdown-container">
            <Link to="/services" className="dropdown-toggle">
              Services
            </Link>
            <div className="dropdown-menu">
              <Link to="/services" className="dropdown-item">All Services</Link>
              <Link to="/services#prayer-services" className="dropdown-item">Prayer Services</Link>
              <Link to="/services#nikaah-services" className="dropdown-item">Nikaah Services</Link>
              <Link to="/services#funeral-services" className="dropdown-item">Funeral & Burial</Link>
              <Link to="/services#membership-services" className="dropdown-item">Membership</Link>
            </div>
          </div>
          
          <Link to="/sundayschool" className="nav-link">Sunday School</Link>
          
          <Link to="/community" className="nav-link">Community</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>
        
        {/* Desktop Action Buttons */}
        <div className="action-buttons">
          <Link to="/portal" className="nav-link portal-btn">Portal</Link>
          <Link to="/donate" className="nav-link donate-btn">Donate</Link>
        </div>

        {/* Mobile Menu Toggle - Always visible on mobile */}
        <button 
          className="mobile-menu-toggle" 
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
          ref={menuButtonRef}
        >
          {mobileMenuOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* Mobile Navigation Menu */}
        <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`} ref={mobileMenuRef}>
          <div className="mobile-nav-content">
            {/* Mobile Menu Header with Logo */}
            <div className="mobile-nav-header">
              <Link to="/" className="mobile-nav-logo">
                <FaMosque />
                <span>Mosque</span>
              </Link>
            </div>

            <Link to="/" className="mobile-nav-link">Home</Link>
            <Link to="/about" className="mobile-nav-link">About</Link>
            <Link to="/programs" className="mobile-nav-link">Programs</Link>
            <Link to="/services" className="mobile-nav-link">Services</Link>
            <Link to="/sundayschool" className="mobile-nav-link">Sunday School</Link>
            <Link to="/community" className="mobile-nav-link">Community</Link>
            <Link to="/contact" className="mobile-nav-link">Contact</Link>
            
            {/* Mobile Action Buttons */}
            <div className="mobile-action-buttons">
              <Link to="/portal" className="mobile-nav-link portal-btn">Portal</Link>
              <Link to="/donate" className="mobile-nav-link donate-btn">Donate</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
