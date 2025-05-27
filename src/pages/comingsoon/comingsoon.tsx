import React, { useEffect, useState } from 'react';
import './comingsoon.css';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import { FaMosque, FaClock, FaEnvelope, FaBell, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ComingSoon: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Animation on scroll effect
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1 });
    
    const sections = document.querySelectorAll('.coming-soon-animate-on-scroll');
    sections.forEach(section => {
      observer.observe(section);
    });
    
    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      // Here you would typically send the email to your backend
      console.log('Email submitted:', email);
    }
  };

  return (
    <div className="coming-soon-page">
      <Navbar />
      
      {/* Hero Section */}
      <section className="coming-soon-hero">
        <div className="coming-soon-hero-background">
          <div className="coming-soon-floating-elements">
            <div className="coming-soon-floating-element coming-soon-element-1">
              <FaMosque />
            </div>
            <div className="coming-soon-floating-element coming-soon-element-2">
              <FaClock />
            </div>
            <div className="coming-soon-floating-element coming-soon-element-3">
              <FaBell />
            </div>
          </div>
        </div>
        
        <div className="coming-soon-hero-content">
          <div className="coming-soon-back-link coming-soon-animate-on-scroll">
            <Link to="/" className="coming-soon-back-button">
              <FaArrowLeft />
              <span>Back to Home</span>
            </Link>
          </div>
          
          <div className="coming-soon-main-icon coming-soon-animate-on-scroll">
            <div className="coming-soon-icon-container">
              <FaMosque />
            </div>
          </div>
          
          <h1 className="coming-soon-animate-on-scroll">Portal Coming Soon</h1>
          <p className="coming-soon-hero-subtitle coming-soon-animate-on-scroll">
            We're working hard to bring you an amazing portal experience for our mosque community.
          </p>
          
          <div className="coming-soon-features-preview coming-soon-animate-on-scroll">
            <div className="coming-soon-feature-item">
              <FaClock />
              <span>Prayer Time Notifications</span>
            </div>
            <div className="coming-soon-feature-item">
              <FaEnvelope />
              <span>Event Updates</span>
            </div>
            <div className="coming-soon-feature-item">
              <FaBell />
              <span>Community Announcements</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Notification Section */}
      <section className="coming-soon-notification-section">
        <div className="coming-soon-section-container">
          <div className="coming-soon-notification-content coming-soon-animate-on-scroll">
            <h2>Get Notified When We Launch</h2>
            <p>Be the first to know when our portal goes live. We'll send you an email with all the details.</p>
            
            {!isSubscribed ? (
              <form className="coming-soon-email-form" onSubmit={handleEmailSubmit}>
                <div className="coming-soon-input-group">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button type="submit" className="coming-soon-notify-btn">
                    <FaBell />
                    Notify Me
                  </button>
                </div>
              </form>
            ) : (
              <div className="coming-soon-success-message">
                <div className="coming-soon-success-icon">
                  <FaBell />
                </div>
                <h3>Thank You!</h3>
                <p>We'll notify you as soon as the portal is ready.</p>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="coming-soon-features-section">
        <div className="coming-soon-section-container">
          <h2 className="coming-soon-animate-on-scroll">What to Expect</h2>
          <div className="coming-soon-features-grid">
            <div className="coming-soon-feature-card coming-soon-animate-on-scroll">
              <div className="coming-soon-feature-icon">
                <FaClock />
              </div>
              <h3>Prayer Times & Reminders</h3>
              <p>Personalized prayer time notifications and Islamic calendar integration</p>
            </div>
            
            <div className="coming-soon-feature-card coming-soon-animate-on-scroll">
              <div className="coming-soon-feature-icon">
                <FaEnvelope />
              </div>
              <h3>Event Management</h3>
              <p>Register for events, view schedules, and receive important updates</p>
            </div>
            
            <div className="coming-soon-feature-card coming-soon-animate-on-scroll">
              <div className="coming-soon-feature-icon">
                <FaBell />
              </div>
              <h3>Community Hub</h3>
              <p>Connect with fellow community members and stay informed</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ComingSoon;
