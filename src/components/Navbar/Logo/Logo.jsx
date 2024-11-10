// Logo.js
import React from 'react';
import logo from '../../../assets/logo.png';


const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <img src={logo} alt="Logo" className="h-12 w-20" />
      <span className="text-xl font-semibold text-[#0B66C2]">BOLDCONNECT</span>
      
    </div>
  );
};

export default React.memo(Logo);
