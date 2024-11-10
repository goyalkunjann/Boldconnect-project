import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Iconsconnect from './components/Iconsconnect/Iconsconnect';
import CaseStudy from './components/CaseStudy/CaseStudy';
import CaseStudy1 from './components/CaseStudy/Case1/Case1';
import CaseStudy2 from './components/CaseStudy/Case2/Case2';
import CaseStudy3 from './components/CaseStudy/Case3/Case3';
import CaseStudy4 from './components/CaseStudy/Case4/Case4';
import CaseStudy5 from './components/CaseStudy/Case5/Case5';
import CaseStudy6 from './components/CaseStudy/Case6/Case6';
import Faq from './components/Faq/Faq';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';

function AppContent() {
  const homeRef = useRef(null);
  const featuresRef = useRef(null);
  const iconsConnectRef = useRef(null);
  const caseStudyRef = useRef(null);
  const faqRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const location = useLocation();
  const isCaseStudyPage = location.pathname.includes('/case-study');

  return (
    <div>
      <Navbar
        scrollToSection={scrollToSection}
        homeRef={homeRef}
        featuresRef={featuresRef}
        iconsConnectRef={iconsConnectRef}
        caseStudyRef={caseStudyRef}
        faqRef={faqRef}
      />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <div ref={homeRef}><Home /></div>
              <div ref={featuresRef}><Features /></div>
              <div ref={iconsConnectRef}><Iconsconnect /></div>
              <div ref={caseStudyRef}><CaseStudy /></div>
              <div ref={faqRef}><Faq /></div>
            </div>
          }
        />
        <Route path="/case-study-1" element={<CaseStudy1 />} />
        <Route path="/case-study-2" element={<CaseStudy2 />} />
        <Route path="/case-study-3" element={<CaseStudy3 />} />
        <Route path="/case-study-4" element={<CaseStudy4 />} />
        <Route path="/case-study-5" element={<CaseStudy5 />} />
        <Route path="/case-study-6" element={<CaseStudy6 />} />
      </Routes>
      
    
      {!isCaseStudyPage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
