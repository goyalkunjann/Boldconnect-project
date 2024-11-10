import React from 'react';
import Banner from '../../components/Banner/Banner';
import Menu from '../../components/Navbar/Menu/Menu';

const Footer = () => {
  return (
    <div className="relative">
      
      {/* Footer Content */}
      <div className="bg-[#23272A] text-white py-64 mt-60">
        <div className="max-w-screen-lg mx-auto flex flex-col text-left space-y-2 pt-32">
          
          {/* Contact Section */}
          <p className="text-lg font-semibold">Contact</p>
          <p><a href="mailto:xyz@connect.com" className="text-white hover:underline">xyz@connect.com</a></p>

          {/* Menu Section */}
          <div className="flex justify-center mt-8">
            <Menu whiteText /> {/* Pass whiteText prop to make text white */}
          </div>
          <hr className="my-6 border-white" />
        </div>
      </div>

      {/* Banner Positioned Above the Footer */}
      <div className="absolute w-full -top-[40vh] transform -translate-y-1/2">
        <Banner />
      </div>
    </div>
  );
};

export default Footer;
