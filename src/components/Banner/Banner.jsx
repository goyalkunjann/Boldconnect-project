// Banner Component
import React from 'react';
import Emailinput from '../Home/Emailinput/Emailinput';

const Banner = () => {
  return (
    <div className="hidden sm:flex flex-col items-center justify-center bg-[#0B66C2] w-[80%] h-[80vh] mx-auto rounded-lg shadow-lg pt-30 mt-[500px] z-20">
      {/* Logo & Heading */}
      <h1 className="text-[#EBEBEB] font-bold text-5xl text-center mb-6">
        Automate Your Networking with <br />
        <span className="text-[#1CBCFB]">BoldConnect</span>
      </h1>
      
      {/* Email Input */}
      <div className="w-full max-w-md mt-4 opacity-50">
        <Emailinput />
      </div>
    </div>
  );
}

export default Banner;
