import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Homepage from './pages/homepage/homepage'
import AboutPage from './pages/about/about'
import ContactPage from './pages/contact/contact'
import CommunityPage from './pages/community/community'
import ProgramsPage from './pages/programs/programs'
import ServicesPage from './pages/services/services'
import SundaySchool from './pages/sundayschool/sundayschool'
import ComingSoon from './pages/comingsoon/comingsoon'

function App() {
  return (
    <Router>
      <div className="app full-width">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/sundayschool" element={<SundaySchool />} />
          <Route path="/portal" element={<ComingSoon />} />
          {/* Add more routes as you develop other pages */}
          {/* <Route path="/prayer-times" element={<PrayerTimes />} /> */}
          {/* <Route path="/donate" element={<Donate />} /> */}
        </Routes>
      </div>
    </Router>
  )
}

export default App
