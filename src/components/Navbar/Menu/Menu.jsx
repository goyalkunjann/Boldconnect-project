import React from 'react';

const Menu = ({ scrollToSection, homeRef, featuresRef, iconsConnectRef, caseStudyRef, faqRef, whiteText }) => {
  const textColor = whiteText ? 'text-white' : 'text-[#575B5F]';

  return (
    <nav className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
      <button onClick={() => scrollToSection(homeRef)} className={`${textColor} hover:underline`}>Home</button>
      <button onClick={() => scrollToSection(featuresRef)} className={`${textColor} hover:underline`}>Features</button>
      <button onClick={() => scrollToSection(iconsConnectRef)} className={`${textColor} hover:underline`}>Integration</button>
      <button onClick={() => scrollToSection(caseStudyRef)} className={`${textColor} hover:underline`}>Case Study</button>
      <button onClick={() => scrollToSection(faqRef)} className={`${textColor} hover:underline`}>FAQ</button>
    </nav>
  );
};

export default React.memo(Menu);
