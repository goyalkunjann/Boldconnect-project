// CaseStudy.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import case1 from '../../assets/caseconnect/case5.png';
import case2 from '../../assets/caseconnect/case2.png';
import case3 from '../../assets/caseconnect/case6.png';
import case4 from '../../assets/caseconnect/case3.png';
import case5 from '../../assets/caseconnect/case4.png';
import case6 from '../../assets/caseconnect/case1.png';

const items = [
  { src: case1, title: 'Streamlining Deal Flow for a Venture Capitalist', path: '/case-study-1' },
  { src: case2, title: 'Networking Made Easy for a Startup Founder', path: '/case-study-2' },
  { src: case3, title: 'Enhancing Client Relationships for a Freelancer', path: '/case-study-3' },
  { src: case4, title: 'Automating News Updates for Professional Networking', path: '/case-study-4' },
  { src: case5, title: 'Automating Travel Networking', path: '/case-study-5' },
  { src: case6, title: 'Effortlessly Organizing a Themed House Party', path: '/case-study-6' },
];


const CaseStudy = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-white mt-10 mb-10 px-4 md:px-10">
      <h1 className="text-black font-bold text-2xl md:text-3xl text-center mb-6 md:mb-10">
        See how BoldConnect can help <br /> you <span className="text-[#0B66C2]">with your contacts</span>
      </h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 w-full max-w-5xl mx-auto">
        {items.map((item, index) => (
          <div key={index} className="border p-6 rounded-lg shadow-lg flex flex-col items-center bg-white">
            <img src={item.src} alt={item.title} className="w-20 h-20 md:w-28 md:h-28 object-cover rounded-md" />
            <h2 className="text-lg md:text-xl font-semibold text-center text-[#07051D] mt-4 mb-4">
              {item.title}
            </h2>
            <Link to={item.path} className="text-[#0B66C2] flex items-center font-medium">
              Know More <FaArrowRight className="ml-2" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};


export default CaseStudy;
