import React from 'react';
import Menu from './Menu/Menu';
import Logo from './Logo/Logo';
import Button from './Button/Button';

const Navbar = ({ scrollToSection, homeRef, featuresRef, iconsConnectRef, caseStudyRef, faqRef }) => {
  return (
    <header className="flex justify-between items-center p-4 mx-10 bg-[#ffffff] border-b border-[#C6C6C6]">
      <Logo />
      <Menu 
        scrollToSection={scrollToSection}
        homeRef={homeRef}
        featuresRef={featuresRef}
        iconsConnectRef={iconsConnectRef}
        caseStudyRef={caseStudyRef}
        faqRef={faqRef}
      />
      <Button text="Sign Up" />
    </header>
  );
};

export default React.memo(Navbar);
