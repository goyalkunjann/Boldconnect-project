import React, { useState } from 'react';
import Menu from './Menu/Menu';
import Logo from './Logo/Logo';
import Button from './Button/Button';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ scrollToSection, homeRef, featuresRef, iconsConnectRef, caseStudyRef, faqRef }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="flex justify-between items-center p-4 bg-[#ffffff] border-b border-[#C6C6C6]">
      <Logo />

     
      <div className="hidden md:flex">
        <Menu
          scrollToSection={scrollToSection}
          homeRef={homeRef}
          featuresRef={featuresRef}
          iconsConnectRef={iconsConnectRef}
          caseStudyRef={caseStudyRef}
          faqRef={faqRef}
        />
      </div>

      <Button text="Sign Up" className="hidden md:block" />

     
      <button className="md:hidden text-[#0B66C2]" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-lg p-4 flex flex-col space-y-4 z-50 md:hidden">
          <Menu
            scrollToSection={scrollToSection}
            homeRef={homeRef}
            featuresRef={featuresRef}
            iconsConnectRef={iconsConnectRef}
            caseStudyRef={caseStudyRef}
            faqRef={faqRef}
          />
          <Button text="Sign Up" />
        </div>
      )}
    </header>
  );
};

export default React.memo(Navbar);
