import React, { useEffect } from 'react';
import './about.css';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import { FaMosque, FaBook, FaUsers, FaGraduationCap, FaHandHoldingHeart, FaHistory, FaCalendarAlt, FaChild } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
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
    <div className="about-page">
      <Navbar />
      
      {/* Hero Section */}
      <section className="about-hero-section">
        <div className="hero-content">
          <h1 className="animate-title">About Our Mosque</h1>
          <p className="animate-subtitle">Serving the community with faith, knowledge and compassion</p>
        </div>
      </section>
      
      {/* Introduction Section */}
      <section className="intro-section">
        <div className="section-container">
          <div className="intro-content animate-on-scroll">
            <h2>Welcome to <span className="highlight">Westchester Mosque</span></h2>
            
            <div className="intro-cards-container">
              <div className="intro-card">
                <div className="intro-card-icon">
                  <FaMosque />
                </div>
                <h3>Our Mission</h3>
                <p>
                  Westchester Mosque is a vibrant Islamic center dedicated to serving the Muslim community 
                  in Westchester County and surrounding areas. Our mission is to provide a welcoming space 
                  for worship, education, and community building, following the teachings of the Quran and 
                  the Sunnah of Prophet Muhammad (peace be upon him).
                </p>
              </div>
              
              <div className="intro-card">
                <div className="intro-card-icon">
                  <FaUsers />
                </div>
                <h3>Our Community</h3>
                <p>
                  Our mosque serves as a spiritual sanctuary, a center for learning, and a hub for community 
                  services. We strive to foster a sense of brotherhood and sisterhood among Muslims while 
                  building bridges of understanding and cooperation with the broader community.
                </p>
              </div>
              
              <div className="intro-card">
                <div className="intro-card-icon">
                  <FaHandHoldingHeart />
                </div>
                <h3>Our Values</h3>
                <p>
                  We are committed to excellence in service, inclusivity, and creating a welcoming environment
                  for all. Our community is built on the principles of compassion, respect, and continuous
                  learning. We invite you to join us in this journey of faith and community building.
                </p>
              </div>
            </div>
            
            <div className="intro-stats">
              <div className="stat-item">
                <span className="stat-number">35+</span>
                <span className="stat-label">Years Serving</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Community Members</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">20+</span>
                <span className="stat-label">Weekly Programs</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">1000+</span>
                <span className="stat-label">Annual Visitors</span>
              </div>
            </div>
            
            <div className="intro-cta">
              <Link to="/programs" className="intro-button">Explore Our Programs</Link>
              <Link to="/contact" className="intro-button outline">Visit Us</Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* History Section */}
      <section className="history-section" id="history">
        <div className="section-container">
          <div className="section-header animate-on-scroll">
            <FaHistory className="section-icon" />
            <h2>Our <span className="highlight">History</span></h2>
          </div>
          
          <div className="history-content">
            <div className="history-image animate-on-scroll"></div>
            
            <div className="history-text animate-on-scroll">
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <h3>1985</h3>
                  <p>
                    Founded by a small group of Muslim families who gathered in homes for prayer and religious studies. 
                    Our community began with just 20 families dedicated to establishing an Islamic presence in Westchester County.
                  </p>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <h3>1995</h3>
                  <p>
                    Acquired our first dedicated space, a modest storefront that served as our initial prayer hall.
                    This milestone allowed us to establish regular prayer services and begin offering educational programs
                    for children and adults alike.
                  </p>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <h3>2010</h3>
                  <p>
                    Purchased our current property and began construction of our beautiful mosque. This was a significant 
                    achievement made possible by the generous contributions of our growing community and supporters
                    who shared our vision for a permanent home.
                  </p>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <h3>Present</h3>
                  <p>
                    Today, Westchester Mosque stands as a vibrant center for Islamic worship, education, and community service.
                    With expanded facilities, diverse programs, and outreach initiatives, we continue to grow while staying true
                    to our founding principles of faith, knowledge, and compassion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Programs Section */}
      <section className="programs-section" id="programs">
        <div className="section-container">
          <div className="section-header animate-on-scroll">
            <FaCalendarAlt className="section-icon" />
            <h2>Our <span className="highlight">Programs</span></h2>
          </div>
          
          <p className="section-intro animate-on-scroll">
            At Westchester Mosque, we offer a variety of programs to enrich the spiritual, educational, 
            and social aspects of our community members' lives.
          </p>
          
          <div className="programs-grid">
            <div className="program-card animate-on-scroll">
              <div className="program-icon">
                <FaBook />
              </div>
              <h3>Quran Study</h3>
              <p>
                Weekly Quran study circles for all ages and proficiency levels, focusing on recitation, 
                memorization, and understanding the meanings.
              </p>
              <div className="program-schedule">
                <span>Every Monday & Wednesday</span>
                <span>7:00 PM - 8:30 PM</span>
              </div>
            </div>
            
            <div className="program-card animate-on-scroll">
              <div className="program-icon">
                <FaUsers />
              </div>
              <h3>Islamic Lectures</h3>
              <p>
                Weekly lectures on various Islamic topics by knowledgeable speakers, covering aspects of faith, 
                practice, history, and contemporary issues.
              </p>
              <div className="program-schedule">
                <span>Every Friday</span>
                <span>After Maghrib Prayer</span>
              </div>
            </div>
            
            <div className="program-card animate-on-scroll">
              <div className="program-icon">
                <FaChild />
              </div>
              <h3>Youth Programs</h3>
              <p>
                Dedicated programs for youth including sports, social activities, mentoring, and Islamic 
                education tailored for young Muslims.
              </p>
              <div className="program-schedule">
                <span>Every Saturday</span>
                <span>2:00 PM - 5:00 PM</span>
              </div>
            </div>
            
            <div className="program-card animate-on-scroll">
              <div className="program-icon">
                <FaHandHoldingHeart />
              </div>
              <h3>Community Services</h3>
              <p>
                Charitable activities, food drives, counseling services, and other community support initiatives.
              </p>
              <div className="program-schedule">
                <span>Ongoing</span>
                <span>Contact office for details</span>
              </div>
            </div>
          </div>
          
          <div className="center-btn animate-on-scroll">
            <Link to="/programs" className="outline-btn">View All Programs</Link>
          </div>
        </div>
      </section>
      
      {/* Community Section */}
      <section className="community-section" id="community">
        <div className="section-container">
          <div className="section-header animate-on-scroll">
            <FaUsers className="section-icon" />
            <h2>Our <span className="highlight">Community</span></h2>
          </div>
          
          <div className="community-content">
            <div className="community-text animate-on-scroll">
              <p>
                Our mosque is home to a diverse and vibrant community of Muslims from various cultural backgrounds, 
                professions, and age groups. We celebrate this diversity while being united in our faith and commitment 
                to Islamic principles.
              </p>
              <p>
                The Westchester Mosque community is built on principles of brotherhood, sisterhood, mutual respect, 
                and support. We strive to create an environment where everyone feels welcome and valued.
              </p>
              <p>
                Through regular gatherings, community events, and social activities, we foster strong bonds among 
                community members and create opportunities for meaningful connections and friendship.
              </p>
            </div>
            
            <div className="community-image animate-on-scroll">
              {/* Community image replaces the feature boxes */}
            </div>
          </div>
          
          <div className="testimonials animate-on-scroll">
            <h3>Community Voices</h3>
            <div className="testimonial-slider">
              <div className="testimonial">
                <p className="testimonial-text">
                  "The mosque has been like a second home for me and my family. The community here is so welcoming and supportive."
                </p>
                <p className="testimonial-author">- Ahmed H., Community Member since 2005</p>
              </div>
              
              <div className="testimonial">
                <p className="testimonial-text">
                  "I'm grateful for the educational programs that have helped my children learn about their faith while making friends in a positive environment."
                </p>
                <p className="testimonial-author">- Fatima R., Parent</p>
              </div>
              
              <div className="testimonial">
                <p className="testimonial-text">
                  "As a convert to Islam, the community at Westchester Mosque has been instrumental in my journey, providing guidance and friendship."
                </p>
                <p className="testimonial-author">- Michael S., New Muslim</p>
              </div>
            </div>
          </div>
          
          <div className="gallery animate-on-scroll">
            <h3>Community Gallery</h3>
            <div className="gallery-grid">
              <div className="gallery-item"></div>
              <div className="gallery-item"></div>
              <div className="gallery-item"></div>
              <div className="gallery-item"></div>
              <div className="gallery-item"></div>
              <div className="gallery-item"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Sunday School Section */}
      <section className="sunday-school-section" id="sunday-school">
        <div className="section-container">
          <div className="section-header animate-on-scroll">
            <FaGraduationCap className="section-icon" />
            <h2>Sunday <span className="highlight">School</span></h2>
          </div>
          
          <div className="sunday-school-content">
            <div className="sunday-school-image animate-on-scroll"></div>
            
            <div className="sunday-school-text animate-on-scroll">
              <p>
                Our weekend Islamic school provides comprehensive Islamic education for children aged 5-16. 
                The curriculum is designed to nurture their faith, character, and understanding of Islamic principles.
              </p>
              
              <h3>Curriculum</h3>
              <ul className="curriculum-list">
                <li>Quran recitation and memorization</li>
                <li>Islamic studies and history</li>
                <li>Arabic language</li>
                <li>Islamic ethics and character development</li>
                <li>Contemporary issues from an Islamic perspective</li>
              </ul>
              
              <h3>Class Schedule</h3>
              <div className="class-schedule">
                <div className="schedule-item">
                  <span className="schedule-day">Sundays</span>
                  <span className="schedule-time">10:00 AM - 2:00 PM</span>
                </div>
                <div className="schedule-detail">
                  <span>Ages 5-16, divided into age-appropriate groups</span>
                </div>
              </div>
              
              <h3>Registration</h3>
              <p>
                Registration for our Sunday School takes place twice a year, in August for the Fall semester 
                and in December for the Spring semester. Please contact our office for registration details 
                and tuition information.
              </p>
              
              <div className="action-buttons">
                <button className="primary-btn">Register Now</button>
                <button className="secondary-btn">Download Syllabus</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Donate Section */}
      <section className="donate-section" id="donate">
        <div className="donation-background-elements">
          <div className="floating-circle circle-1"></div>
          <div className="floating-circle circle-2"></div>
          <div className="floating-circle circle-3"></div>
        </div>
        
        <div className="section-container">
          <div className="donate-header animate-on-scroll">
            <div className="section-icon-wrapper">
              <FaHandHoldingHeart className="section-icon" />
            </div>
            <h2>Support Our <span className="highlight">Mosque</span></h2>
            <p className="donate-subtitle">
              Your generous contribution helps us continue our mission of serving the community
            </p>
          </div>
          
          <div className="donation-cards-container animate-on-scroll">
            <div className="donation-card highlight-card">
              <div className="donation-card-header">
                <div className="card-badge">Most Popular</div>
                <h3>Monthly Support</h3>
                <p>Become a sustaining member</p>
              </div>
              <div className="donation-card-body">
                <div className="donation-amount">
                  <span className="currency">$</span>
                  <span className="amount">50</span>
                  <span className="period">/month</span>
                </div>
                <ul className="donation-benefits">
                  <li>Sustain our daily operations</li>
                  <li>Support educational programs</li>
                  <li>Help with facility maintenance</li>
                  <li>Contribute to community services</li>
                </ul>
                <button className="donate-card-btn">Become a Monthly Supporter</button>
              </div>
            </div>
            
            <div className="donation-card">
              <div className="donation-card-header">
                <h3>One-Time Gift</h3>
                <p>Make an immediate impact</p>
              </div>
              <div className="donation-card-body">
                <div className="custom-amount-selector">
                  <div className="amount-presets">
                    <button className="amount-preset-btn">$25</button>
                    <button className="amount-preset-btn active">$50</button>
                    <button className="amount-preset-btn">$100</button>
                    <button className="amount-preset-btn">$250</button>
                    <button className="amount-preset-btn">$500</button>
                  </div>
                  <div className="custom-amount">
                    <label>Or enter a custom amount</label>
                    <div className="custom-amount-input">
                      <span className="currency-symbol">$</span>
                      <input type="text" placeholder="Other amount" />
                    </div>
                  </div>
                </div>
                <button className="donate-card-btn">Donate Now</button>
              </div>
            </div>
            
            <div className="donation-card">
              <div className="donation-card-header">
                <h3>Zakat & Sadaqah</h3>
                <p>Fulfill your religious obligation</p>
              </div>
              <div className="donation-card-body">
                <p className="donation-description">
                  Your Zakat and Sadaqah contributions are distributed to those in need according to Islamic principles.
                </p>
                <div className="zakat-options">
                  <label className="zakat-option">
                    <input type="radio" name="zakat-type" checked />
                    <span>Zakat al-Mal</span>
                  </label>
                  <label className="zakat-option">
                    <input type="radio" name="zakat-type" />
                    <span>Zakat al-Fitr</span>
                  </label>
                  <label className="zakat-option">
                    <input type="radio" name="zakat-type" />
                    <span>Sadaqah</span>
                  </label>
                </div>
                <button className="donate-card-btn">Calculate & Pay Zakat</button>
              </div>
            </div>
          </div>
          
          <div className="donation-impact-section animate-on-scroll">
            <h3>Your Donation Makes a Difference</h3>
            <div className="impact-container">
              <div className="impact-item">
                <div className="impact-icon">
                  <FaBook />
                </div>
                <div className="impact-amount">$50</div>
                <div className="impact-description">Provides Islamic education materials for one student</div>
              </div>
              
              <div className="impact-item">
                <div className="impact-icon">
                  <FaUsers />
                </div>
                <div className="impact-amount">$100</div>
                <div className="impact-description">Sponsors a community iftar for 10 people during Ramadan</div>
              </div>
              
              <div className="impact-item">
                <div className="impact-icon">
                  <FaMosque />
                </div>
                <div className="impact-amount">$250</div>
                <div className="impact-description">Supports facility maintenance and operations for one day</div>
              </div>
              
              <div className="impact-item">
                <div className="impact-icon">
                  <FaChild />
                </div>
                <div className="impact-amount">$500</div>
                <div className="impact-description">Funds a month of youth programs and activities</div>
              </div>
            </div>
          </div>
          
          <div className="donation-cta-section animate-on-scroll">
            <div className="donation-cta-content">
              <h3>Other Ways to Support</h3>
              <p>
                Besides financial contributions, you can support Westchester Mosque by volunteering your time and skills, 
                donating items, or participating in our fundraising events.
              </p>
              <div className="donation-cta-buttons">
                <a href="/volunteer" className="donation-cta-btn primary">Volunteer With Us</a>
                <a href="/contact" className="donation-cta-btn secondary">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
