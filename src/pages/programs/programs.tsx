import React, { useEffect } from 'react';
import './programs.css';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import { 
  FaMosque, 
  FaBook, 
  FaCalendarAlt, 
  FaUsers, 
  FaPrayingHands, 
  FaQuran, 
  FaMoon, 
  FaStar, 
  FaGraduationCap, 
  FaChild, 
  FaChalkboardTeacher,
  FaHandsHelping,
  FaClock,
  FaBookReader,
  FaLightbulb,
  FaRegLightbulb,
  FaMapMarkerAlt,
  FaUserGraduate,
  FaRegCalendarAlt,
  FaRegStar,
  FaRegComment,
  FaGlobe,
  FaHeart,
  FaBalanceScale,
  FaPeopleCarry,
  FaRegPaperPlane,
  FaRegBell
} from 'react-icons/fa';
import { 
  BsBookHalf, 
  BsMoonStars, 
  BsFillCircleFill,
  BsCalendar2Week,
  BsPeopleFill,
  BsStars,
  BsChat,
  BsChatFill,
  BsGem,
  BsLightbulb,
  BsChatDots,
  BsPersonFill
} from 'react-icons/bs';
import { 
  GiTeacher, 
  GiOpenBook, 
  GiBookCover,
  GiTrophyCup,
  GiBookmark,
  GiMicroscope,
  GiLightBulb,
  GiMountainRoad,
  GiArchiveResearch,
  GiTeamIdea 
} from 'react-icons/gi';
import { MdGroups, MdCastForEducation, MdOutlineSchool, MdQuiz, MdOutlineGroups } from 'react-icons/md';
import { 
  IoCalendarOutline, 
  IoDocumentTextOutline,
  IoPeopleOutline
} from 'react-icons/io5';
import { Link } from 'react-router-dom';

const ProgramsPage: React.FC = () => {
  // Function to handle smooth scrolling for internal page links
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      
      // Update the URL hash without forcing a jump
      window.history.pushState(null, '', `#${targetId}`);
    }
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
    
    // Handle hash links in URL
    const { hash } = window.location;
    if (hash) {
      // Small delay to ensure the DOM is fully loaded
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    }
  }, []);

  return (
    <div className="programs-page">
      <Navbar />
      
      {/* Hero Section */}
      <section className="programs-hero-section">
        <div className="hero-content">
          <h1 className="animate-title">Our Programs</h1>
          <p className="animate-subtitle">Educational and spiritual programs for all ages</p>
        </div>
      </section>
      
      {/* Programs Overview Section */}
      <section className="overview-section">
        <div className="section-container">
          <div className="section-header animate-on-scroll">
            <BsMoonStars className="section-icon stellar-icon" />
            <h2>Our <span className="highlight">Programs</span></h2>
          </div>
          
          <p className="section-intro animate-on-scroll">
            At Westchester Mosque, we offer a variety of programs designed to promote spiritual growth, 
            educational development, and community engagement. Join us for these enriching experiences 
            that cater to community members of all ages and backgrounds.
          </p>
          
          <div className="programs-grid animate-on-scroll">
            <div className="program-card monthly-card">
              <div className="program-icon-container monthly-icon-bg">
                <BsMoonStars className="program-icon" />
              </div>
              <h3>Monthly Halaqa</h3>
              <p>In-depth discussions on Islamic topics led by scholars</p>
              <a href="#monthly-halaqa" className="program-link" onClick={(e) => scrollToSection(e, 'monthly-halaqa')}>Learn More</a>
            </div>
            
            <div className="program-card quran-card">
              <div className="program-icon-container quran-icon-bg">
                <FaQuran className="program-icon" />
              </div>
              <h3>Quran Tafseer Study</h3>
              <p>Detailed exploration of Quranic verses and their meanings</p>
              <a href="#quran-tafseer" className="program-link" onClick={(e) => scrollToSection(e, 'quran-tafseer')}>Learn More</a>
            </div>
            
            <div className="program-card youth-card">
              <div className="program-icon-container youth-icon-bg">
                <GiTrophyCup className="program-icon" />
              </div>
              <h3>Youth Leadership</h3>
              <p>Program to develop leadership skills in our youth</p>
              <a href="#youth-leadership" className="program-link" onClick={(e) => scrollToSection(e, 'youth-leadership')}>Learn More</a>
            </div>
            
            <div className="program-card weekly-card">
              <div className="program-icon-container weekly-icon-bg">
                <MdGroups className="program-icon" />
              </div>
              <h3>Weekly Halaqa</h3>
              <p>Regular study circles focused on Islamic education</p>
              <a href="#weekly-halaqa" className="program-link" onClick={(e) => scrollToSection(e, 'weekly-halaqa')}>Learn More</a>
            </div>
            
            <div className="program-card interfaith-card">
              <div className="program-icon-container interfaith-icon-bg">
                <FaHandsHelping className="program-icon" />
              </div>
              <h3>Interfaith Outreach</h3>
              <p>Building bridges of understanding with the wider community</p>
              <a href="#interfaith" className="program-link" onClick={(e) => scrollToSection(e, 'interfaith')}>Learn More</a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Monthly Halaqa Section */}
      <section id="monthly-halaqa" className="program-detail-section monthly-halaqa-section">
        {/* Floating Icons */}
        <div className="floating-icons">
          <FaCalendarAlt className="floating-icon icon-1" />
          <FaMoon className="floating-icon icon-2" />
          <BsStars className="floating-icon icon-3" />
          <FaRegCalendarAlt className="floating-icon icon-4" />
          <FaBookReader className="floating-icon icon-5" />
          <BsChat className="floating-icon icon-6" />
        </div>
        
        <div className="section-container">
          <div className="section-header animate-on-scroll">
            <div className="icon-moon-ring">
              <BsMoonStars className="section-icon moon-icon" />
            </div>
            <h2>Monthly <span className="highlight">Halaqa</span></h2>
          </div>
          
          <div className="program-content">
            <div className="program-image monthly-image animate-on-scroll">
              <div className="image-overlay">
                <FaMosque className="overlay-icon" />
              </div>
            </div>
            
            <div className="program-text animate-on-scroll">
              <div className="feature-tag gold-tag"><FaStar className="tag-icon" /> Featured Program</div>
              <p>
                Our Monthly Halaqa (study circle) is a special gathering where we explore important Islamic 
                topics in depth with guest scholars and speakers. These sessions provide an opportunity for 
                deeper understanding of our faith and traditions.
              </p>
              
              <h3 className="decorated-heading">What to Expect:</h3>
              <ul className="program-features gold-checkmark-list">
                <li><BsFillCircleFill className="list-icon" /> In-depth presentations by qualified scholars</li>
                <li><BsFillCircleFill className="list-icon" /> Interactive Q&A sessions</li>
                <li><BsFillCircleFill className="list-icon" /> Discussion of contemporary issues from an Islamic perspective</li>
                <li><BsFillCircleFill className="list-icon" /> Community dinner and socializing</li>
                <li><BsFillCircleFill className="list-icon" /> Special sessions for new Muslims and those interested in Islam</li>
              </ul>
              
              <div className="schedule-info">
                <div className="schedule-item">
                  <div className="schedule-day"><FaCalendarAlt /> Every first Friday of the month</div>
                  <div className="schedule-time"><FaStar /> 7:30 PM - 9:30 PM</div>
                </div>
              </div>
              
              <div className="program-cta">
                <a href="#" className="primary-btn gold-btn">Upcoming Topics</a>
                <a href="#" className="secondary-btn gold-outline-btn">Register</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Quran Tafseer Section */}
      <section id="quran-tafseer" className="program-detail-section quran-tafseer-section">
        {/* Floating Icons */}
        <div className="floating-icons">
          <FaQuran className="floating-icon icon-1" />
          <GiOpenBook className="floating-icon icon-2" />
          <GiBookmark className="floating-icon icon-3" />
          <BsBookHalf className="floating-icon icon-4" />
          <GiBookCover className="floating-icon icon-5" />
          <IoDocumentTextOutline className="floating-icon icon-6" />
        </div>
        
        <div className="section-container">
          <div className="quran-decoration left"></div>
          <div className="quran-decoration right"></div>
          
          <div className="section-header animate-on-scroll">
            <div className="quran-icon-container">
              <GiOpenBook className="section-icon quran-icon" />
            </div>
            <h2>Quran <span className="highlight">Tafseer Study</span></h2>
          </div>
          
          <div className="program-overview animate-on-scroll">
            <p className="quran-intro">
              Our Quran Tafseer program offers a systematic study of the Quran, exploring its verses, 
              context, and interpretations. This program is designed to help participants develop a 
              deeper connection with the Quran and apply its teachings in their daily lives.
            </p>
          </div>
          
          <div className="quran-content-grid">
            <div className="quran-feature-column animate-on-scroll">
              <h3 className="quran-heading">Program Features:</h3>
              <ul className="program-features quran-feature-list">
                <li><FaBook className="list-icon" /> Verse-by-verse explanation and commentary</li>
                <li><GiBookCover className="list-icon" /> Historical context and occasions of revelation</li>
                <li><BsBookHalf className="list-icon" /> Linguistic analysis of key terms</li>
                <li><FaQuran className="list-icon" /> Practical applications of Quranic teachings</li>
                <li><FaPrayingHands className="list-icon" /> Materials provided in both Arabic and English</li>
              </ul>
            </div>
            
            <div className="quran-image animate-on-scroll">
              <div className="image-overlay quran-overlay">
                <FaQuran className="overlay-icon" />
              </div>
            </div>
            
            <div className="quran-details animate-on-scroll">
              <div className="program-cta quran-cta">
                <a href="#" className="primary-btn green-btn">Study Materials</a>
                <a href="#" className="secondary-btn green-outline-btn">Join Online</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Youth Leadership Section */}
      <section id="youth-leadership" className="program-detail-section youth-leadership-section">
        {/* Floating Icons */}
        <div className="floating-icons">
          <FaGraduationCap className="floating-icon icon-1" />
          <FaChild className="floating-icon icon-2" />
          <MdOutlineSchool className="floating-icon icon-3" />
          <FaUserGraduate className="floating-icon icon-4" />
          <GiTeamIdea className="floating-icon icon-5" />
          <GiMountainRoad className="floating-icon icon-6" />
        </div>
        
        <div className="section-container">
          <div className="youth-header animate-on-scroll">
            <div className="youth-icon-box">
              <GiTrophyCup className="section-icon trophy-icon" />
            </div>
            <h2>Youth <span className="highlight">Leadership Program</span></h2>
          </div>
          
          <div className="youth-compact-layout">
            <div className="youth-image animate-on-scroll">
              <div className="image-overlay youth-overlay">
                <MdCastForEducation className="overlay-icon" />
              </div>
            </div>
            
            <div className="youth-content-combined animate-on-scroll">
              <p className="youth-highlight">
                Our Youth Leadership Program empowers young Muslims to become confident leaders through mentorship, 
                workshops, and hands-on projects, developing valuable skills while strengthening Islamic identity.
              </p>
              
              <div className="youth-features-compact">
                <div className="feature-item">
                  <FaChalkboardTeacher className="feature-icon" /> 
                  <span>Leadership Skills</span>
                </div>
                <div className="feature-item">
                  <GiTeacher className="feature-icon" /> 
                  <span>Public Speaking</span>
                </div>
                <div className="feature-item">
                  <FaPrayingHands className="feature-icon" /> 
                  <span>Community Service</span>
                </div>
                <div className="feature-item">
                  <FaUsers className="feature-icon" /> 
                  <span>Mentorship</span>
                </div>
              </div>
              
              <div className="youth-info-box">
                <div className="info-column">
                  <p><strong>Ages:</strong> 14-21</p>
                  <p><strong>Duration:</strong> 3-month program</p>
                </div>
                <div className="info-column">
                  <p><strong>Schedule:</strong> Biweekly Saturdays, 4-6 PM</p>
                  <p><strong>Cost:</strong> Free (members), $50 (non-members)</p>
                </div>
              </div>
              
              <div className="program-cta youth-cta">
                <a href="#" className="primary-btn blue-btn">Apply Now <span>→</span></a>
                <a href="#" className="text-link blue-link">View Curriculum</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Weekly Halaqa Section */}
      <section id="weekly-halaqa" className="program-detail-section weekly-halaqa-section">
        {/* Floating Icons */}
        <div className="floating-icons">
          <BsCalendar2Week className="floating-icon icon-1" />
          <FaClock className="floating-icon icon-2" />
          <IoCalendarOutline className="floating-icon icon-3" />
          <FaRegComment className="floating-icon icon-4" />
          <BsChatDots className="floating-icon icon-5" />
          <BsPeopleFill className="floating-icon icon-6" />
        </div>
        
        <div className="section-container">
          <div className="section-header animate-on-scroll">
            <div className="weekly-icon-container">
              <MdGroups className="section-icon groups-icon" />
            </div>
            <h2>Weekly <span className="highlight">Halaqa</span></h2>
          </div>
          
          <div className="weekly-halaqa-grid">
            <div className="weekly-info-card animate-on-scroll">
              <h3 className="weekly-heading">About the Program</h3>
              <p>
                Our Weekly Halaqa provides regular opportunities for Islamic learning and community bonding. 
                These sessions cover a variety of topics including faith basics, prophetic traditions, Islamic 
                history, and contemporary issues facing Muslims.
              </p>
              <div className="info-badge orange-badge">For All Knowledge Levels</div>
            </div>
            
            <div className="weekly-image animate-on-scroll">
              <div className="image-overlay weekly-overlay">
                <FaMosque className="overlay-icon" />
              </div>
            </div>
            
            <div className="topics-card animate-on-scroll">
              <h3 className="weekly-heading">Weekly Topics Include:</h3>
              <div className="topics-grid">
                <div className="topic-item">
                  <div className="topic-icon orange-topic-icon"><FaBook /></div>
                  <div className="topic-text">Fundamentals of Islamic faith</div>
                </div>
                <div className="topic-item">
                  <div className="topic-icon orange-topic-icon"><GiTeacher /></div>
                  <div className="topic-text">Prophetic traditions and their applications</div>
                </div>
                <div className="topic-item">
                  <div className="topic-icon orange-topic-icon"><FaPrayingHands /></div>
                  <div className="topic-text">Personal development from an Islamic perspective</div>
                </div>
                <div className="topic-item">
                  <div className="topic-icon orange-topic-icon"><FaUsers /></div>
                  <div className="topic-text">Family life and parenting in Islam</div>
                </div>
              </div>
            </div>
            
            <div className="weekly-schedule-card animate-on-scroll">
              <h3 className="weekly-heading">Schedule</h3>
              <div className="weekly-schedule-tabs">
                <div className="schedule-tab active">
                  <div className="tab-label">Brothers</div>
                  <div className="tab-content">
                    <div className="tab-day">Every Wednesday</div>
                    <div className="tab-time">7:30 PM - 9:00 PM</div>
                  </div>
                </div>
                <div className="schedule-tab">
                  <div className="tab-label">Sisters</div>
                  <div className="tab-content">
                    <div className="tab-day">Every Thursday</div>
                    <div className="tab-time">7:30 PM - 9:00 PM</div>
                  </div>
                </div>
              </div>
              <p className="notes">No registration required. Join us anytime!</p>
              <div className="weekly-actions">
                <a href="#" className="primary-btn orange-btn">Current Topic</a>
                <a href="#" className="text-link orange-link">View Readings</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Interfaith Section */}
      <section id="interfaith" className="program-detail-section interfaith-section">
        {/* Floating Icons */}
        <div className="floating-icons">
          <FaGlobe className="floating-icon icon-1" />
          <FaHeart className="floating-icon icon-2" />
          <FaBalanceScale className="floating-icon icon-3" />
          <FaPeopleCarry className="floating-icon icon-4" />
          <FaRegPaperPlane className="floating-icon icon-5" />
          <IoPeopleOutline className="floating-icon icon-6" />
        </div>
        
        <div className="interfaith-bg-elements">
          <div className="bg-circle circle-1"></div>
          <div className="bg-circle circle-2"></div>
          <div className="bg-circle circle-3"></div>
        </div>
        
        <div className="section-container">
          <div className="interfaith-header animate-on-scroll">
            <div className="interfaith-icon-ring">
              <FaHandsHelping className="section-icon hands-icon" />
            </div>
            <h2>Interfaith & <span className="highlight">Community Outreach</span></h2>
            <p className="interfaith-subtitle">Building bridges of understanding and cooperation</p>
          </div>
          
          <div className="interfaith-content">
            <div className="interfaith-description animate-on-scroll">
              <p>
                Our Interfaith and Community Outreach programs aim to build bridges of understanding with people 
                of different faiths and backgrounds. Through dialogue, education, and collaborative service projects, 
                we foster mutual respect and cooperation in our diverse community.
              </p>
            </div>
            
            <div className="interfaith-initiatives animate-on-scroll">
              <h3>Our Initiatives</h3>
              <div className="initiatives-grid">
                <div className="initiative-card">
                  <div className="initiative-icon">
                    <FaUsers className="initiative-icon-img" />
                  </div>
                  <div className="initiative-details">
                    <h4>Interfaith Dialogue Sessions</h4>
                    <p>Regular conversations between leaders and members of different faith traditions</p>
                  </div>
                </div>
                
                <div className="initiative-card">
                  <div className="initiative-icon">
                    <FaMosque className="initiative-icon-img" />
                  </div>
                  <div className="initiative-details">
                    <h4>Open House Events</h4>
                    <p>Welcoming the wider community to visit and learn about Islam and Muslims</p>
                  </div>
                </div>
                
                <div className="initiative-card">
                  <div className="initiative-icon">
                    <FaHandsHelping className="initiative-icon-img" />
                  </div>
                  <div className="initiative-details">
                    <h4>Joint Community Service</h4>
                    <p>Collaborative projects addressing community needs with other faith organizations</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="interfaith-cta animate-on-scroll">
              <a href="#" className="primary-btn purple-btn">Get Involved</a>
              <a href="#" className="secondary-btn purple-outline-btn">Partner Organizations</a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Registration Section */}
      <section className="registration-section">
        <div className="section-container">
          <div className="registration-content animate-on-scroll">
            <h2>Join Our Programs</h2>
            <p>
              Ready to participate in our programs? Register now to stay updated on upcoming events, 
              receive learning materials, and connect with other participants.
            </p>
            <div className="registration-buttons">
              <a href="#" className="primary-btn light-btn">Register Now</a>
              <a href="#" className="secondary-btn light-btn">Contact Program Coordinator</a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ProgramsPage;
