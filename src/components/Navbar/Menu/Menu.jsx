import React from 'react';

const Menu = ({ scrollToSection, homeRef, featuresRef, iconsConnectRef, caseStudyRef, faqRef, whiteText }) => {
  const textColor = whiteText ? 'text-white' : 'text-[#575B5F]';

  return (
    <nav className="hidden mr-30 md:flex justify-center space-x-8">
      <button onClick={() => scrollToSection && scrollToSection(homeRef)} className={`${textColor} hover:underline`}>Home</button>
      <button onClick={() => scrollToSection && scrollToSection(featuresRef)} className={`${textColor} hover:underline`}>Features</button>
      <button onClick={() => scrollToSection && scrollToSection(iconsConnectRef)} className={`${textColor} hover:underline`}>Integration</button>
      <button onClick={() => scrollToSection && scrollToSection(caseStudyRef)} className={`${textColor} hover:underline`}>Case Study</button>
      <button onClick={() => scrollToSection && scrollToSection(faqRef)} className={`${textColor} hover:underline`}>FAQ</button>
    </nav>
  );
};

export default React.memo(Menu);
