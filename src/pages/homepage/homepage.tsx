import React, { useEffect, useRef } from 'react';
import './homepage.css';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import { FaMosque, FaBook, FaUsers, FaClock, FaSun, FaCloud, FaMoon, FaStar, FaCalendarAlt, FaGraduationCap, FaHands, FaUtensils, FaChild } from 'react-icons/fa';

const Homepage: React.FC = () => {
  const prayerTimesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const activitiesRef = useRef<HTMLDivElement>(null);
  const eventsRef = useRef<HTMLDivElement>(null);
  
  // Scroll to prayer times section when the button is clicked
  const scrollToPrayerTimes = () => {
    prayerTimesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Scroll to about section
  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Scroll to activities section
  const scrollToActivities = () => {
    activitiesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Scroll to events section
  const scrollToEvents = () => {
    eventsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Navigate to community page for all events
  const handleViewAllEvents = () => {
    window.location.href = '/community';
  };

  // Placeholder functions for external links (these would typically navigate to other pages)
  const handleMonthlySchedule = () => {
    // This could link to a calendar page or download a PDF
    console.log('Navigate to monthly schedule');
  };

  const handleReadMore = () => {
    // This could navigate to the about page
    window.location.href = '/about';
  };

  const handleDonateNow = () => {
    // This could navigate to the donate page
    window.location.href = '/donate';
  };

  const handleVolunteer = () => {
    // This could navigate to a volunteer/contact page
    window.location.href = '/contact';
  };
  
  // Animation on scroll effect
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1 });
    
    const sections = document.querySelectorAll('.animate-on-scroll');
    sections.forEach(section => {
      observer.observe(section);
    });
    
    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);
  
  return (
    <div className="homepage">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="animate-title">Welcome to Westchester Mosque</h1>
          <p className="animate-subtitle">A place of worship, community, and spiritual growth</p>
          <div className="hero-buttons">
            <button className="primary-btn" onClick={scrollToPrayerTimes}>Prayer Times</button>
            <button className="secondary-btn" onClick={scrollToAbout}>Learn More</button>
          </div>
        </div>
      </section>
      
      {/* Prayer Times Section */}
      <section className="prayer-times-section" ref={prayerTimesRef}>
        <div className="section-container">
          <div className="prayer-times-header animate-on-scroll">
            <FaClock className="section-icon" />
            <h2>Daily <span className="highlight">Prayer Times</span></h2>
          </div>
          
          <div className="prayer-times-cards animate-on-scroll">
            <div className="prayer-card fajr">
              <div className="prayer-icon">
                <FaSun />
              </div>
              <h3>Fajr</h3>
              <div className="prayer-time-display">5:30 AM</div>
              <div className="card-decoration"></div>
            </div>
            
            <div className="prayer-card dhuhr">
              <div className="prayer-icon">
                <FaSun />
              </div>
              <h3>Dhuhr</h3>
              <div className="prayer-time-display">1:30 PM</div>
              <div className="card-decoration"></div>
            </div>
            
            <div className="prayer-card asr">
              <div className="prayer-icon">
                <FaCloud />
              </div>
              <h3>Asr</h3>
              <div className="prayer-time-display">5:15 PM</div>
              <div className="card-decoration"></div>
            </div>
            
            <div className="prayer-card maghrib">
              <div className="prayer-icon">
                <FaMoon />
              </div>
              <h3>Maghrib</h3>
              <div className="prayer-time-display">8:30 PM</div>
              <div className="card-decoration"></div>
            </div>
            
            <div className="prayer-card isha">
              <div className="prayer-icon">
                <FaStar />
              </div>
              <h3>Isha</h3>
              <div className="prayer-time-display">10:00 PM</div>
              <div className="card-decoration"></div>
            </div>
          </div>
          
          <div className="prayer-times-info animate-on-scroll">
            <p>Prayer times updated daily. Join us for congregational prayers at Westchester Mosque.</p>
            <button className="outline-btn" onClick={handleMonthlySchedule}>Monthly Schedule</button>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="about-section" ref={aboutRef}>
        <div className="section-container">
          <div className="about-header animate-on-scroll">
            <FaMosque className="section-icon" />
            <h2>About <span className="highlight">Our Mosque</span></h2>
          </div>
          
          <div className="about-content">
            <div className="about-left-column">
              <div className="about-image animate-on-scroll">
                <img 
                  src="https://images.unsplash.com/photo-1564769625905-50e93615e769?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Beautiful Islamic architecture and calligraphy"
                />
                <div className="image-overlay">
                  <div className="overlay-text">
                    <h3>A Place of Peace</h3>
                    <p>Where faith meets community</p>
                  </div>
                </div>
              </div>
              
              <div className="about-text animate-on-scroll">
                <p>Westchester Mosque is a vibrant Islamic center dedicated to serving the Muslim community through spiritual guidance, education, and community services.</p>
                <p>Our mission is to promote the true teachings of Islam and foster a welcoming environment for Muslims and non-Muslims alike.</p>
                <button className="outline-btn" onClick={handleReadMore}>Read More</button>
              </div>
            </div>
            
            <div className="about-features">
              <div className="feature-card animate-on-scroll" style={{ animationDelay: '0.1s' }}>
                <div className="feature-icon">
                  <FaMosque />
                </div>
                <h3>Daily Prayers</h3>
                <p>Join us for the five daily prayers in congregation</p>
              </div>
              <div className="feature-card animate-on-scroll" style={{ animationDelay: '0.2s' }}>
                <div className="feature-icon">
                  <FaBook />
                </div>
                <h3>Islamic Education</h3>
                <p>Classes for children and adults</p>
              </div>
              <div className="feature-card animate-on-scroll" style={{ animationDelay: '0.3s' }}>
                <div className="feature-icon">
                  <FaUsers />
                </div>
                <h3>Community Events</h3>
                <p>Regular gatherings to strengthen our community</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Activities Section */}
      <section className="activities-section" ref={activitiesRef}>
        <div className="section-container">
          <div className="activities-header animate-on-scroll">
            <FaCalendarAlt className="section-icon" />
            <h2>Our <span className="highlight">Activities</span></h2>
          </div>
          
          <div className="activities-grid">
            <div className="activity-card animate-on-scroll" style={{ animationDelay: '0.1s' }}>
              <div className="activity-icon">
                <FaGraduationCap />
              </div>
              <div className="activity-content">
                <h3>Weekend School</h3>
                <p>Islamic education for children every Saturday and Sunday</p>
              </div>
              <div className="activity-overlay"></div>
            </div>
            
            <div className="activity-card animate-on-scroll" style={{ animationDelay: '0.2s' }}>
              <div className="activity-icon">
                <FaBook />
              </div>
              <div className="activity-content">
                <h3>Quran Study</h3>
                <p>Weekly Quran study circles for all ages and levels</p>
              </div>
              <div className="activity-overlay"></div>
            </div>
            
            <div className="activity-card animate-on-scroll" style={{ animationDelay: '0.3s' }}>
              <div className="activity-icon">
                <FaHands />
              </div>
              <div className="activity-content">
                <h3>Community Service</h3>
                <p>Regular volunteering and charity initiatives</p>
              </div>
              <div className="activity-overlay"></div>
            </div>
            
            <div className="activity-card animate-on-scroll" style={{ animationDelay: '0.4s' }}>
              <div className="activity-icon">
                <FaUtensils />
              </div>
              <div className="activity-content">
                <h3>Community Iftars</h3>
                <p>Ramadan iftars and special occasion gatherings</p>
              </div>
              <div className="activity-overlay"></div>
            </div>
            
            <div className="activity-card animate-on-scroll" style={{ animationDelay: '0.5s' }}>
              <div className="activity-icon">
                <FaChild />
              </div>
              <div className="activity-content">
                <h3>Youth Activities</h3>
                <p>Sports, workshops, and educational programs for youth</p>
              </div>
              <div className="activity-overlay"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Upcoming Events Section */}
      <section className="events-section" ref={eventsRef}>
        <div className="section-container">
          <div className="events-header animate-on-scroll">
            <FaCalendarAlt className="section-icon" />
            <h2>Upcoming <span className="highlight">Events</span></h2>
          </div>
          
          <div className="events-grid">
            <div className="event-card animate-on-scroll" style={{ animationDelay: '0.1s' }}>
              <div className="event-date">
                <span className="day">15</span>
                <span className="month">JUN</span>
              </div>
              <div className="event-details">
                <h3>Eid Prayer</h3>
                <p className="event-time">7:00 AM - 9:00 AM</p>
                <p className="event-location">Main Prayer Hall</p>
              </div>
            </div>
            <div className="event-card animate-on-scroll" style={{ animationDelay: '0.2s' }}>
              <div className="event-date">
                <span className="day">22</span>
                <span className="month">JUN</span>
              </div>
              <div className="event-details">
                <h3>Quran Study Circle</h3>
                <p className="event-time">8:00 PM - 9:30 PM</p>
                <p className="event-location">Education Center</p>
              </div>
            </div>
            <div className="event-card animate-on-scroll" style={{ animationDelay: '0.3s' }}>
              <div className="event-date">
                <span className="day">29</span>
                <span className="month">JUN</span>
              </div>
              <div className="event-details">
                <h3>Community Iftar</h3>
                <p className="event-time">7:30 PM - 9:30 PM</p>
                <p className="event-location">Community Hall</p>
              </div>
            </div>
          </div>
          <div className="center-btn animate-on-scroll">
            <button className="outline-btn" onClick={handleViewAllEvents}>View All Events</button>
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="cta-content animate-on-scroll">
          <h2>Join Our Community</h2>
          <p>Be part of our growing community and contribute to our mosque's mission</p>
          <div className="cta-buttons">
            <button className="primary-btn" onClick={handleDonateNow}>Donate Now</button>
            <button className="secondary-btn" onClick={handleVolunteer}>Volunteer</button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Homepage;
