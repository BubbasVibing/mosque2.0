import React, { useEffect } from 'react';
import './contact.css';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaMosque } from 'react-icons/fa';

const ContactPage: React.FC = () => {
  // Animation on scroll effect
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1 });
    
    // Small delay to ensure DOM is fully loaded
    setTimeout(() => {
      const sections = document.querySelectorAll('.animate-on-scroll');
      sections.forEach(section => {
        observer.observe(section);
      });
    }, 100);
    
    return () => {
      const sections = document.querySelectorAll('.animate-on-scroll');
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  // Effect to handle scrolling and ensure navbar works correctly
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact-page">
      <Navbar />
      
      {/* Hero Section */}
      <section className="contact-hero-section">
        <div className="hero-content">
          <h1 className="animate-title">Contact Us</h1>
          <p className="animate-subtitle">We'd love to hear from you</p>
        </div>
      </section>
      
      {/* Contact Information Section */}
      <section className="contact-info-section">
        <div className="section-container">
          <div className="section-header animate-on-scroll">
            <FaMosque className="section-icon" />
            <h2>Get in <span className="highlight">Touch</span></h2>
          </div>
          
          <div className="contact-content">
            <div className="contact-details-container animate-on-scroll">
              <div className="contact-card">
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>
                <h3>Address</h3>
                <p>123 Main Street<br />Westchester, NY 10123</p>
              </div>
              
              <div className="contact-card">
                <div className="contact-icon">
                  <FaPhone />
                </div>
                <h3>Phone</h3>
                <p>Main: (555) 123-4567<br />Office: (555) 987-6543</p>
              </div>
              
              <div className="contact-card">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <h3>Email</h3>
                <p>info@westchestermosque.org<br />admin@westchestermosque.org</p>
              </div>
              
              <div className="contact-card">
                <div className="contact-icon">
                  <FaClock />
                </div>
                <h3>Office Hours</h3>
                <p>Monday - Friday: 9am - 5pm<br />Saturday: 10am - 2pm</p>
              </div>
            </div>
            
            <div className="contact-form-container animate-on-scroll">
              <form className="contact-form">
                <h3>Send us a Message</h3>
                
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" placeholder="Your name" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="Your email" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" placeholder="Message subject" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={5} placeholder="Your message" required></textarea>
                </div>
                
                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="map-section">
        <div className="section-container">
          <div className="section-header animate-on-scroll">
            <h2>Find <span className="highlight">Us</span></h2>
          </div>
          
          <div className="map-container animate-on-scroll">
            {/* Map placeholder - in a real implementation, you would embed Google Maps or similar */}
            <div className="map-placeholder">
              <div className="map-overlay">
                <p>Interactive Map Coming Soon</p>
                <button className="map-btn">Get Directions</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Prayer Times Section */}
      <section className="prayer-times-section">
        <div className="section-container">
          <div className="section-header animate-on-scroll">
            <h2>Prayer <span className="highlight">Times</span></h2>
          </div>
          
          <div className="prayer-times-container animate-on-scroll">
            <table className="prayer-times-table">
              <thead>
                <tr>
                  <th>Prayer</th>
                  <th>Begins</th>
                  <th>Iqamah</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Fajr</td>
                  <td>5:30 AM</td>
                  <td>5:45 AM</td>
                </tr>
                <tr>
                  <td>Dhuhr</td>
                  <td>1:15 PM</td>
                  <td>1:30 PM</td>
                </tr>
                <tr>
                  <td>Asr</td>
                  <td>4:45 PM</td>
                  <td>5:00 PM</td>
                </tr>
                <tr>
                  <td>Maghrib</td>
                  <td>7:15 PM</td>
                  <td>7:25 PM</td>
                </tr>
                <tr>
                  <td>Isha</td>
                  <td>8:45 PM</td>
                  <td>9:00 PM</td>
                </tr>
                <tr>
                  <td>Jumu'ah</td>
                  <td>1:15 PM</td>
                  <td>1:30 PM</td>
                </tr>
              </tbody>
            </table>
            <div className="prayer-times-note">
              <p>Prayer times change according to the season. Please check our website or mobile app for the most up-to-date times.</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
