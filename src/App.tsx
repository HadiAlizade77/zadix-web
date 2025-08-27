import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Solutions from './pages/Solutions'
import Industries from './pages/Industries'
import Pricing from './pages/Pricing'
import Process from './pages/Process'
import CaseStudies from './pages/CaseStudies'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Contact from './pages/Contact'
import Security from './pages/Security'
import Documentation from './pages/Documentation'
import Careers from './pages/Careers'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import DPA from './pages/DPA'
import Cookies from './pages/Cookies'
import CookieBanner from './components/ui/cookie-banner'

// Industry pages
import RealEstate from './pages/industries/RealEstate'
import Investment from './pages/industries/Investment'
import Logistics from './pages/industries/Logistics'
import Healthcare from './pages/industries/Healthcare'
import Legal from './pages/industries/Legal'
import Construction from './pages/industries/Construction'
import SaaS from './pages/industries/SaaS'
import Hospitality from './pages/industries/Hospitality'

function App() {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/industries/real-estate" element={<RealEstate />} />
        <Route path="/industries/investment" element={<Investment />} />
        <Route path="/industries/logistics" element={<Logistics />} />
        <Route path="/industries/healthcare" element={<Healthcare />} />
        <Route path="/industries/legal" element={<Legal />} />
        <Route path="/industries/construction" element={<Construction />} />
        <Route path="/industries/saas" element={<SaaS />} />
        <Route path="/industries/hospitality" element={<Hospitality />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/process" element={<Process />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/security" element={<Security />} />
        <Route path="/docs" element={<Documentation />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/dpa" element={<DPA />} />
        <Route path="/cookies" element={<Cookies />} />
      </Routes>
      <CookieBanner />
    </div>
  )
}

export default App