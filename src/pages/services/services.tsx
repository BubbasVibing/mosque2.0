import React, { useEffect } from 'react';
import './services.css';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import { FaPray, FaHeart, FaProcedures, FaUsers, FaMosque, FaCalendarDay, FaHandHoldingHeart, FaCertificate, FaScroll, FaStar, FaChevronRight, FaArrowRight, FaPhone, FaFileDownload } from 'react-icons/fa';

const ServicesPage: React.FC = () => {
  // Animation on scroll effect and hash navigation
  useEffect(() => {
    // Add a backup to make sure elements are visible even without IntersectionObserver
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach(element => {
      element.classList.add('animate-in');
    });
    
    // Handle hash navigation
    const handleHashNavigation = () => {
      const hash = window.location.hash.substring(1); // Remove the # symbol
      if (hash) {
        // Wait a bit for the page to render
        setTimeout(() => {
          const element = document.querySelector(`.${hash}`);
          if (element) {
            element.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          }
        }, 100);
      }
    };

    // Handle hash navigation on initial load
    handleHashNavigation();

    // Handle hash navigation when hash changes
    window.addEventListener('hashchange', handleHashNavigation);
    
    // If IntersectionObserver is supported, use it for smooth animations
    if ('IntersectionObserver' in window) {
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
        window.removeEventListener('hashchange', handleHashNavigation);
        sections.forEach(section => {
          observer.unobserve(section);
        });
      };
    }

    return () => {
      window.removeEventListener('hashchange', handleHashNavigation);
    };
  }, []);
  
  return (
    <div className="services-page">
      <Navbar />
      
      {/* Hero Section */}
      <section className="services-hero">
        <div className="hero-content">
          <h1>Our Services</h1>
          <p>Supporting our community through every aspect of Islamic life</p>
        </div>
      </section>
      
      {/* Prayer Services Section */}
      <section className="prayer-services">
        <div className="service-container">
          <div className="service-header animate-on-scroll">
            <FaPray className="service-icon" />
            <h2>Prayer <span className="highlight">Services</span></h2>
          </div>
          
          <div className="prayer-content">
            <div className="prayer-info animate-on-scroll">
              <p>Our mosque offers a serene and accessible space for all five daily prayers, with facilities for both men and women.</p>
              
              <div className="prayer-features">
                <div className="prayer-feature">
                  <FaMosque />
                  <h4>Daily Congregational Prayers</h4>
                  <p>Join our community for all five daily prayers led by our qualified imams</p>
                </div>
                
                <div className="prayer-feature">
                  <FaCalendarDay />
                  <h4>Friday (Jumu'ah) Prayers</h4>
                  <p>Weekly sermons and congregational prayers with insightful khutbahs</p>
                </div>
                
                <div className="prayer-feature">
                  <FaStar />
                  <h4>Eid Prayers</h4>
                  <p>Special Eid-ul-Fitr and Eid-ul-Adha prayers and celebrations</p>
                </div>
              </div>
            </div>
            
            <div className="prayer-schedule animate-on-scroll">
              <h3>Current Prayer Schedule</h3>
              <div className="schedule-table">
                <div className="schedule-row">
                  <span className="prayer-name">Fajr</span>
                  <span className="prayer-divider"></span>
                  <span className="prayer-time">5:30 AM</span>
                </div>
                <div className="schedule-row">
                  <span className="prayer-name">Dhuhr</span>
                  <span className="prayer-divider"></span>
                  <span className="prayer-time">1:30 PM</span>
                </div>
                <div className="schedule-row">
                  <span className="prayer-name">Asr</span>
                  <span className="prayer-divider"></span>
                  <span className="prayer-time">5:15 PM</span>
                </div>
                <div className="schedule-row">
                  <span className="prayer-name">Maghrib</span>
                  <span className="prayer-divider"></span>
                  <span className="prayer-time">8:30 PM</span>
                </div>
                <div className="schedule-row">
                  <span className="prayer-name">Isha</span>
                  <span className="prayer-divider"></span>
                  <span className="prayer-time">10:00 PM</span>
                </div>
              </div>
              <button className="primary-btn">Monthly Schedule</button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Nikaah Services Section */}
      <section className="nikaah-services">
        <div className="service-container">
          <div className="service-header animate-on-scroll">
            <FaHeart className="service-icon" />
            <h2>Nikaah <span className="highlight">Services</span></h2>
            <p className="service-subtitle">
              Our mosque provides comprehensive Nikaah services to guide couples through their Islamic marriage journey, from pre-marital counseling to the official ceremony, all conducted according to Islamic traditions.
            </p>
          </div>
          
          <div className="nikaah-content">
            <div className="nikaah-info animate-on-scroll">
              <div className="nikaah-process">
                <h3>The Nikaah Process</h3>
                <div className="process-steps">
                  <div className="process-step">
                    <div className="step-number">1</div>
                    <div className="step-content">
                      <h4>Initial Consultation</h4>
                      <p>Meet with our imam to discuss your needs</p>
                    </div>
                  </div>
                  
                  <div className="process-step">
                    <div className="step-number">2</div>
                    <div className="step-content">
                      <h4>Pre-marital Counseling</h4>
                      <p>Optional counseling for couples</p>
                    </div>
                  </div>
                  
                  <div className="process-step">
                    <div className="step-number">3</div>
                    <div className="step-content">
                      <h4>Documentation</h4>
                      <p>Preparation of Islamic marriage documents</p>
                    </div>
                  </div>
                  
                  <div className="process-step">
                    <div className="step-number">4</div>
                    <div className="step-content">
                      <h4>Ceremony</h4>
                      <p>The Nikaah performed according to Sunnah</p>
                    </div>
                  </div>
                </div>
                <div className="nikaah-cta">
                  <button className="secondary-btn">Schedule Consultation <FaChevronRight /></button>
                </div>
              </div>
            </div>
            
            <div className="nikaah-image-container animate-on-scroll">
              <div className="nikaah-image">
                <img src="https://images.unsplash.com/photo-1617788138017-80ad40651199?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Islamic wedding ceremony" />
                <div className="image-overlay"></div>
              </div>
              
              <div className="nikaah-services-cards">
                <div className="service-card">
                  <div className="service-card-icon">
                    <FaScroll />
                  </div>
                  <h4>Ceremony</h4>
                  <p>Islamic marriage ceremony in our beautifully prepared hall</p>
                </div>
                
                <div className="service-card">
                  <div className="service-card-icon">
                    <FaHandHoldingHeart />
                  </div>
                  <h4>Counseling</h4>
                  <p>Pre-marital counseling sessions for couples</p>
                </div>
                
                <div className="service-card">
                  <div className="service-card-icon">
                    <FaCertificate />
                  </div>
                  <h4>Documentation</h4>
                  <p>Official Islamic marriage certificates and legal documentation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Funeral and Burial Services Section */}
      <section className="funeral-services">
        <div className="service-container">
          <div className="service-header animate-on-scroll">
            <FaProcedures className="service-icon" />
            <h2>Funeral & Burial <span className="highlight">Services</span></h2>
            <p className="service-subtitle">
              Our mosque provides comprehensive support for the Islamic funeral process, offering guidance and assistance during this difficult time.
            </p>
          </div>
          
          <div className="funeral-content">
            <div className="funeral-left-column">
              <div className="funeral-image-container animate-on-scroll">
                <img 
                  src="https://images.unsplash.com/photo-1603008257451-73b377824a89?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Islamic cemetery" 
                  className="funeral-image"
                />
                <div className="funeral-image-overlay">
                  <div className="funeral-image-text">
                    <h3>Compassionate Care</h3>
                    <p>We provide support and guidance for families during their time of need, ensuring all Islamic rites are performed with dignity and respect.</p>
                  </div>
                </div>
              </div>
              
              <div className="emergency-assistance animate-on-scroll">
                <div className="emergency-assistance-content">
                  <h3>Need immediate assistance?</h3>
                  <p>Our team is available 24/7 to help families during this difficult time.</p>
                </div>
                <div className="emergency-contact-info">
                  <div className="emergency-phone">
                    <div className="phone-icon">
                      <FaPhone size={12} />
                    </div>
                    <a href="tel:+1234567890">123-456-7890</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="funeral-services-wrapper">
              <div className="funeral-services-list animate-on-scroll">
                <div className="service-item">
                  <div className="service-item-header">
                    <span className="service-item-icon"></span>
                    <h4>Ghusl (Ritual Washing)</h4>
                  </div>
                  <p>Our trained volunteers perform the ritual washing according to Islamic traditions</p>
                </div>
                
                <div className="service-item">
                  <div className="service-item-header">
                    <span className="service-item-icon"></span>
                    <h4>Shrouding (Kafan)</h4>
                  </div>
                  <p>Proper Islamic shrouding of the deceased with high-quality kafan</p>
                </div>
                
                <div className="service-item">
                  <div className="service-item-header">
                    <span className="service-item-icon"></span>
                    <h4>Janazah Prayer</h4>
                  </div>
                  <p>Funeral prayers led by our imam in our mosque or at the cemetery</p>
                </div>
                
                <div className="service-item">
                  <div className="service-item-header">
                    <span className="service-item-icon"></span>
                    <h4>Burial Arrangements</h4>
                  </div>
                  <p>Coordination with Islamic cemeteries and burial services</p>
                </div>
              </div>
              
              <div className="funeral-guide animate-on-scroll">
                <h3>Islamic Funeral Guide</h3>
                <p>Download our comprehensive guide to help families understand the Islamic funeral process.</p>
                <button className="outline-btn"><FaFileDownload /> Download Guide</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Membership Section */}
      <section className="membership-services">
        <div className="service-container">
          <div className="service-header animate-on-scroll">
            <FaUsers className="service-icon" />
            <h2>Mosque <span className="highlight">Membership</span></h2>
            <p className="service-subtitle">
              Becoming a member of our mosque supports our services and activities while connecting you with our vibrant community.
            </p>
          </div>
          
          <div className="membership-content">
            <div className="membership-info animate-on-scroll">
              <div className="membership-benefits">
                <h4>Membership Benefits</h4>
                <ul className="benefits-list">
                  <li><span className="benefit-check"></span> Access to exclusive events and programs</li>
                  <li><span className="benefit-check"></span> Priority registration for Islamic classes</li>
                  <li><span className="benefit-check"></span> Discounted rates for facility rentals</li>
                  <li><span className="benefit-check"></span> Regular updates on mosque activities</li>
                  <li><span className="benefit-check"></span> Voting rights in mosque's general meetings</li>
                  <li><span className="benefit-check"></span> Contribute to the growth of our community</li>
                </ul>
              </div>
            </div>
            
            <div className="membership-plans animate-on-scroll">
              <div className="plan-card featured">
                <div className="plan-badge">Most Popular</div>
                <h4 className="plan-title">Family Membership</h4>
                <div className="plan-price">
                  <span className="amount">$50</span>
                  <span className="period">/ month</span>
                </div>
                <ul className="plan-features">
                  <li>Covers entire family</li>
                  <li>50% off on weekend school</li>
                  <li>Free access to library resources</li>
                  <li>Priority for Eid prayers</li>
                </ul>
                <button className="primary-btn">Join Now</button>
              </div>
              
              <div className="plan-card">
                <h4 className="plan-title">Individual Membership</h4>
                <div className="plan-price">
                  <span className="amount">$25</span>
                  <span className="period">/ month</span>
                </div>
                <ul className="plan-features">
                  <li>Single person coverage</li>
                  <li>25% off on Islamic courses</li>
                  <li>Free access to library resources</li>
                  <li>Discounted event tickets</li>
                </ul>
                <button className="secondary-btn">Join Now</button>
              </div>
              
              <div className="plan-card">
                <h4 className="plan-title">Student Membership</h4>
                <div className="plan-price">
                  <span className="amount">$15</span>
                  <span className="period">/ month</span>
                </div>
                <ul className="plan-features">
                  <li>Valid student ID required</li>
                  <li>Free study groups</li>
                  <li>Access to youth activities</li>
                  <li>Mentorship opportunities</li>
                </ul>
                <button className="secondary-btn">Join Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="services-cta">
        <div className="service-container">
          <div className="cta-content animate-on-scroll">
            <h2>Have Questions About Our Services?</h2>
            <p>Our team is ready to assist you with any inquiries about our services.</p>
            <button className="primary-btn">Contact Us</button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ServicesPage;
