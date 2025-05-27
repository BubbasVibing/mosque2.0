import React, { useEffect } from 'react';
import './community.css';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import { FaUsers, FaCalendarAlt, FaHandsHelping, FaGraduationCap, FaChild, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CommunityPage: React.FC = () => {
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
    <div className="community-page">
      <Navbar />
      
      {/* Hero Section */}
      <section className="community-hero-section">
        <div className="hero-content">
          <h1 className="animate-title">Our Community</h1>
          <p className="animate-subtitle">Join our vibrant and diverse Muslim community</p>
        </div>
      </section>
      
      {/* Community Overview Section */}
      <section className="community-overview-section">
        <div className="section-container">
          <div className="section-header animate-on-scroll">
            <FaUsers className="section-icon" />
            <h2>Our <span className="highlight">Community</span></h2>
          </div>
          
          <div className="overview-content animate-on-scroll">
            <p className="section-intro">
              At Westchester Mosque, we pride ourselves on being a diverse, inclusive, and vibrant community. 
              Our mosque is home to Muslims from various ethnic backgrounds, professions, and age groups, 
              coming together in faith, fellowship, and service.
            </p>
            
            <div className="overview-grid">
              <div className="overview-card">
                <div className="overview-icon">
                  <FaUsers />
                </div>
                <h3>Diverse & Inclusive</h3>
                <p>
                  Our community includes members from over 30 different countries, representing the rich 
                  diversity of the global Muslim Ummah. We celebrate our differences while united in faith.
                </p>
              </div>
              
              <div className="overview-card">
                <div className="overview-icon">
                  <FaHandsHelping />
                </div>
                <h3>Supportive & Caring</h3>
                <p>
                  We support one another through life's challenges and celebrations, fostering a sense of 
                  brotherhood and sisterhood that extends beyond the walls of our mosque.
                </p>
              </div>
              
              <div className="overview-card">
                <div className="overview-icon">
                  <FaHeart />
                </div>
                <h3>Welcoming to All</h3>
                <p>
                  We welcome Muslims of all backgrounds and levels of practice, as well as non-Muslim visitors 
                  interested in learning about Islam and connecting with our community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Community Programs Section */}
      <section className="community-programs-section">
        <div className="section-container">
          <div className="section-header animate-on-scroll">
            <FaCalendarAlt className="section-icon" />
            <h2>Community <span className="highlight">Programs</span></h2>
          </div>
          
          <div className="programs-content">
            <div className="programs-image animate-on-scroll">
              {/* Image of community gathering */}
            </div>
            
            <div className="programs-text animate-on-scroll">
              <p>
                Our community thrives through regular programs and events that bring us together for worship, 
                education, service, and celebration. These programs are designed to meet the spiritual, 
                educational, and social needs of community members of all ages.
              </p>
              
              <div className="program-list">
                <div className="program-item">
                  <h3>Weekly Programs</h3>
                  <ul>
                    <li>Friday Jumu'ah prayers and sermon</li>
                    <li>Weekend Islamic school for children</li>
                    <li>Weekly halaqas (study circles) for adults</li>
                    <li>Youth group meetings and activities</li>
                    <li>Sisters' gatherings and programs</li>
                  </ul>
                </div>
                
                <div className="program-item">
                  <h3>Monthly Programs</h3>
                  <ul>
                    <li>Community potluck dinners</li>
                    <li>Family game nights</li>
                    <li>Educational workshops and seminars</li>
                    <li>Community service projects</li>
                    <li>New Muslim support group</li>
                  </ul>
                </div>
                
                <div className="program-item">
                  <h3>Special Events</h3>
                  <ul>
                    <li>Ramadan iftars and taraweeh prayers</li>
                    <li>Eid celebrations and festivals</li>
                    <li>Annual fundraising dinner</li>
                    <li>Interfaith events and open houses</li>
                    <li>Cultural celebrations</li>
                  </ul>
                </div>
              </div>
              
              <div className="programs-cta">
                <Link to="/programs" className="primary-btn">View Full Program Calendar</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Youth Section */}
      <section className="youth-section">
        <div className="section-container">
          <div className="section-header animate-on-scroll">
            <FaChild className="section-icon" />
            <h2>Youth <span className="highlight">Programs</span></h2>
          </div>
          
          <div className="youth-content">
            <div className="youth-text animate-on-scroll">
              <p className="section-intro">
                Our youth are the future of our community. We are committed to providing them with a supportive 
                environment where they can develop their Islamic identity, build strong friendships, and 
                grow as confident Muslims in contemporary society.
              </p>
              
              <div className="youth-programs-grid">
                <div className="youth-program-card">
                  <div className="youth-program-icon">
                    <FaGraduationCap />
                  </div>
                  <h3>Weekend Islamic School</h3>
                  <p>Comprehensive Islamic education for children aged 5-16, including Quran, Islamic studies, and Arabic.</p>
                  <p className="program-time">Sundays, 10:00 AM - 2:00 PM</p>
                </div>
                
                <div className="youth-program-card">
                  <div className="youth-program-icon">
                    <FaChild />
                  </div>
                  <h3>Youth Group (Ages 13-18)</h3>
                  <p>Regular meetings focused on Islamic knowledge, character development, and addressing youth challenges.</p>
                  <p className="program-time">Saturdays, 6:00 PM - 8:00 PM</p>
                </div>
                
                <div className="youth-program-card">
                  <div className="youth-program-icon">
                    <FaUsers />
                  </div>
                  <h3>Young Adults (Ages 18-30)</h3>
                  <p>Programs for college students and young professionals, including halaqas, social events, and mentoring.</p>
                  <p className="program-time">Fridays, After Isha Prayer</p>
                </div>
                
                <div className="youth-program-card">
                  <div className="youth-program-icon">
                    <FaHandsHelping />
                  </div>
                  <h3>Youth Community Service</h3>
                  <p>Regular volunteer opportunities teaching the importance of giving back to the wider community.</p>
                  <p className="program-time">Monthly, Various Times</p>
                </div>
              </div>
              
              <div className="youth-cta">
                <Link to="/youth-programs" className="primary-btn">Learn More About Youth Programs</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Get Involved Section */}
      <section className="get-involved-section">
        <div className="section-container">
          <div className="section-header animate-on-scroll">
            <FaHandsHelping className="section-icon" />
            <h2>Get <span className="highlight">Involved</span></h2>
          </div>
          
          <p className="section-intro animate-on-scroll">
            Our community thrives because of the active participation of our members. There are many ways 
            you can get involved, contribute your talents, and become an integral part of our mosque family.
          </p>
          
          <div className="involvement-cards animate-on-scroll">
            <div className="involvement-card">
              <h3>Volunteer</h3>
              <p>
                Share your time and skills by volunteering for various mosque activities and programs. 
                We need help with event organization, teaching, administrative tasks, and more.
              </p>
              <Link to="/volunteer" className="card-link">Volunteer Opportunities →</Link>
            </div>
            
            <div className="involvement-card">
              <h3>Committees</h3>
              <p>
                Join one of our committees focused on education, outreach, social services, maintenance, 
                youth activities, and more to help shape the direction of our community.
              </p>
              <Link to="/committees" className="card-link">Our Committees →</Link>
            </div>
            
            <div className="involvement-card">
              <h3>Donate</h3>
              <p>
                Support our mosque financially through one-time donations, monthly giving, or contributing 
                to specific projects and programs to help us serve the community better.
              </p>
              <Link to="/donate" className="card-link">Ways to Donate →</Link>
            </div>
          </div>
          
          <div className="interest-form animate-on-scroll">
            <h3>Express Your Interest</h3>
            <p>
              Fill out this quick form to let us know how you'd like to get involved, and someone from our 
              community will reach out to you with more information.
            </p>
            <form className="involvement-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" placeholder="Your name" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="Your email" required />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="interest">Area of Interest</label>
                <select id="interest" name="interest" required>
                  <option value="">Select an area of interest</option>
                  <option value="volunteer">General Volunteering</option>
                  <option value="teaching">Teaching/Education</option>
                  <option value="events">Event Planning</option>
                  <option value="outreach">Outreach & Dawah</option>
                  <option value="youth">Youth Programs</option>
                  <option value="maintenance">Facilities & Maintenance</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message (Optional)</label>
                <textarea id="message" name="message" rows={3} placeholder="Additional details about your interest"></textarea>
              </div>
              
              <button type="submit" className="submit-btn">Submit</button>
            </form>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CommunityPage;
