import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './sundayschool.css';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import { FaRegCalendarAlt, FaFileAlt, FaCreditCard, FaPaypal, FaChalkboardTeacher, FaGraduationCap, FaBook, FaPhone, FaEnvelope, FaArrowRight, FaCheck } from 'react-icons/fa';

const SundaySchool: React.FC = () => {
  // Create refs for each section
  const aboutRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const registrationRef = useRef<HTMLDivElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);
  
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
    <div className="sunday-school-page">
      <Navbar />
      
      {/* Hero Section */}
      <section className="sunday-school-hero">
        <div className="hero-content">
          <h1>Islamic Sunday School</h1>
          <p>Nurturing young minds with Islamic knowledge, values, and community</p>
        </div>
      </section>
      
      {/* About Section */}
      <section className="about-section" ref={aboutRef}>
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-subtitle">About Our Program</span>
            <h2>Inspiring the Next Generation</h2>
            <div className="divider"></div>
          </div>
          
          <div className="about-content">
            <div className="about-text animate-on-scroll">
              <p className="featured-text">ISCC Sunday school is run by Principal and school committee selected by the ISCC board. All of our teachers are volunteers from the community.</p>
              
              <div className="school-features">
                <div className="feature">
                  <div className="feature-icon">
                    <FaBook />
                  </div>
                  <div className="feature-content">
                    <h3>Quranic Studies</h3>
                    <p>Memorization, recitation, and understanding of the Holy Quran with tajweed.</p>
                  </div>
                </div>
                
                <div className="feature">
                  <div className="feature-icon">
                    <FaChalkboardTeacher />
                  </div>
                  <div className="feature-content">
                    <h3>Islamic Studies</h3>
                    <p>Learning about Islamic history, principles, and applying Islamic values in daily life.</p>
                  </div>
                </div>
                
                <div className="feature">
                  <div className="feature-icon">
                    <FaGraduationCap />
                  </div>
                  <div className="feature-content">
                    <h3>Arabic Language</h3>
                    <p>Developing reading, writing, and speaking skills in Arabic language.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="about-image animate-on-scroll">
              <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Students learning in Sunday School" />
              <div className="image-caption">
                <span>Creating a supportive learning environment</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="team-section" ref={teamRef}>
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-subtitle">Our Leadership</span>
            <h2>Meet Our Team</h2>
            <div className="divider"></div>
          </div>
          
          <div className="principal-profile animate-on-scroll">
            <div className="principal-image">
              <div className="image-placeholder">
                <FaChalkboardTeacher />
              </div>
            </div>
            <div className="principal-info">
              <h3>School Principal</h3>
              <h4>Br. Mansoor Salahuddin</h4>
              <p>Leading our Sunday School program with dedication and vision to provide quality Islamic education to our community's children.</p>
              <div className="contact-buttons">
                <a href="mailto:principal@iscc.org" className="contact-btn">
                  <FaEnvelope /> Email
                </a>
                <a href="tel:+1234567890" className="contact-btn">
                  <FaPhone /> Contact
                </a>
              </div>
            </div>
          </div>
          
          <div className="team-grid animate-on-scroll">
            <div className="team-header">
              <h3>Management Committee</h3>
            </div>
            
            <div className="team-members">
              <div className="team-member">
                <div className="member-avatar">
                  <div className="avatar-placeholder"></div>
                </div>
                <h4>Br. Aqeel Siddiqui</h4>
                <span className="member-role">Committee Member</span>
              </div>
              
              <div className="team-member">
                <div className="member-avatar">
                  <div className="avatar-placeholder"></div>
                </div>
                <h4>Br. Ejaz Sabir</h4>
                <span className="member-role">Committee Member</span>
              </div>
              
              <div className="team-member">
                <div className="member-avatar">
                  <div className="avatar-placeholder"></div>
                </div>
                <h4>Br. Akhtar Ali</h4>
                <span className="member-role">Committee Member</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Registration Section */}
      <section className="registration-section" ref={registrationRef}>
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-subtitle">Enrollment</span>
            <h2>Registration Information</h2>
            <div className="divider"></div>
          </div>
          
          <div className="registration-content">
            <div className="registration-fees animate-on-scroll">
              <div className="fees-card">
                <div className="fees-header">
                  <h3>Registration Fees</h3>
                  <p>Annual registration fees for the academic year 2023-2024</p>
                </div>
                
                <ul className="fees-list">
                  <li>
                    <span className="fee-check"><FaCheck /></span>
                    <div className="fee-item">
                      <span className="fee-desc">One Child</span>
                      <span className="fee-amount">$300</span>
                    </div>
                  </li>
                  <li>
                    <span className="fee-check"><FaCheck /></span>
                    <div className="fee-item">
                      <span className="fee-desc">Two Children</span>
                      <span className="fee-amount">$500</span>
                    </div>
                  </li>
                  <li>
                    <span className="fee-check"><FaCheck /></span>
                    <div className="fee-item">
                      <span className="fee-desc">Three Children</span>
                      <span className="fee-amount">$650</span>
                    </div>
                  </li>
                  <li>
                    <span className="fee-check"><FaCheck /></span>
                    <div className="fee-item">
                      <span className="fee-desc">Additional Child</span>
                      <span className="fee-amount">$150</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="registration-form-container animate-on-scroll">
              <div className="form-header">
                <h3>Register Your Children</h3>
                <p>Complete the form below to register for Sunday School</p>
              </div>
              <form className="registration-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Parent/Guardian Name*</label>
                    <input type="text" required />
                  </div>
                  
                  <div className="form-group">
                    <label>Email Address*</label>
                    <input type="email" required />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label>Phone Number*</label>
                    <input type="tel" required />
                  </div>
                  
                  <div className="form-group">
                    <label>Preferred Contact Method</label>
                    <select>
                      <option value="email">Email</option>
                      <option value="phone">Phone</option>
                    </select>
                  </div>
                </div>
                
                <div className="form-group">
                  <label>Children's Names & Ages*</label>
                  <textarea placeholder="Please enter the names and ages of your children" required></textarea>
                </div>
                
                <button type="submit" className="submit-btn">
                  Submit Registration <FaArrowRight />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Calendar Section */}
      <section className="calendar-section" ref={calendarRef}>
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-subtitle">Academic Schedule</span>
            <h2>School Calendar</h2>
            <div className="divider"></div>
          </div>
          
          <div className="calendar-content animate-on-scroll">
            <div className="calendar-card">
              <div className="calendar-card-header">
                <div className="calendar-icon">
                  <FaRegCalendarAlt />
                </div>
                <h3>2023-2024 Academic Year</h3>
              </div>
              
              <div className="calendar-info">
                <p>Our Sunday School operates every Sunday from September through June. Below are important dates for the current academic year:</p>
                
                <div className="calendar-events">
                  <div className="calendar-event">
                    <div className="event-date">
                      <span className="month">SEP</span>
                      <span className="day">10</span>
                    </div>
                    <div className="event-details">
                      <h4>First Day of Classes</h4>
                      <p>Orientation for new students and parents</p>
                    </div>
                  </div>
                  
                  <div className="calendar-event">
                    <div className="event-date">
                      <span className="month">DEC</span>
                      <span className="day">17</span>
                    </div>
                    <div className="event-details">
                      <h4>Winter Break Begins</h4>
                      <p>No classes until January 7</p>
                    </div>
                  </div>
                  
                  <div className="calendar-event">
                    <div className="event-date">
                      <span className="month">JAN</span>
                      <span className="day">7</span>
                    </div>
                    <div className="event-details">
                      <h4>Classes Resume</h4>
                      <p>Return from winter break</p>
                    </div>
                  </div>
                  
                  <div className="calendar-event">
                    <div className="event-date">
                      <span className="month">JUN</span>
                      <span className="day">9</span>
                    </div>
                    <div className="event-details">
                      <h4>Last Day & Graduation</h4>
                      <p>End of year celebration and certificate ceremony</p>
                    </div>
                  </div>
                </div>
                
                <div className="calendar-download">
                  <a href="#" className="download-btn">
                    <FaFileAlt /> Download Full Calendar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Policy Section */}
      <section className="policy-section">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-subtitle">Guidelines</span>
            <h2>School Policies</h2>
            <div className="divider"></div>
          </div>
          
          <div className="policy-content animate-on-scroll">
            <div className="policy-card">
              <div className="policy-card-header">
                <div className="policy-icon">
                  <FaFileAlt />
                </div>
                <h3>Policy Document</h3>
              </div>
              <div className="policy-info">
                <p>Our Sunday School has established policies to ensure a productive learning environment for all students. Please familiarize yourself with our attendance, behavior, and other important guidelines.</p>
                <div className="policy-download">
                  <a href="#" className="download-btn">
                    <FaFileAlt /> Download Policy Document
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content animate-on-scroll">
            <h2>Give Your Children the Gift of Islamic Education</h2>
            <p>Join our vibrant Sunday School community and help your children build a strong Islamic foundation.</p>
            <button className="cta-btn" onClick={() => registrationRef.current?.scrollIntoView({ behavior: 'smooth' })}>
              Register Today <FaArrowRight />
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default SundaySchool;
