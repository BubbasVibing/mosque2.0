import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import { FaMosque, FaClock, FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Westchester Mosque</h3>
          <p>A place of worship, community, and spiritual growth for Muslims in Westchester.</p>
          <div className="social-icons">
            <a href="#" className="social-icon" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" className="social-icon" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" className="social-icon" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" className="social-icon" aria-label="YouTube">
              <FaYoutube />
            </a>
          </div>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/prayer-times">Prayer Times</Link></li>
            <li><Link to="/programs">Programs</Link></li>
            <li><Link to="/community">Community</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Contact Us</h3>
          <address>
            <p><FaMapMarkerAlt /> 123 Main Street, Westchester, NY 10001</p>
            <p><FaPhone className="phone-icon" /> (123) 456-7890</p>
            <p><FaEnvelope /> info@westchestermosque.org</p>
          </address>
        </div>
        
        <div className="footer-section">
          <h3>Prayer Times</h3>
          <div className="prayer-times">
            <div className="prayer-time">
              <span>Fajr</span>
              <span>5:30 AM</span>
            </div>
            <div className="prayer-time">
              <span>Dhuhr</span>
              <span>1:30 PM</span>
            </div>
            <div className="prayer-time">
              <span>Asr</span>
              <span>5:15 PM</span>
            </div>
            <div className="prayer-time">
              <span>Maghrib</span>
              <span>8:30 PM</span>
            </div>
            <div className="prayer-time">
              <span>Isha</span>
              <span>10:00 PM</span>
            </div>
          </div>
          <div className="prayer-times-note">
            <FaClock /> Today's Prayer Times
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Westchester Mosque. All Rights Reserved.</p>
        <div className="footer-bottom-links">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-of-service">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
