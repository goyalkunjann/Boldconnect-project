import React from 'react';
import Banner from '../../components/Banner/Banner';
import Menu from '../../components/Navbar/Menu/Menu';

const Footer = () => {
  return (
    <div className="relative">
      
      {/* Footer Content */}
      <div className="bg-[#23272A] text-white py-32 sm:py-64 mt-20 sm:mt-60">
        <div className="max-w-screen-lg mx-auto flex flex-col sm:flex-col text-left space-y-2 sm:pt-32">

          {/* Contact Section */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-x-2">
            <p className="text-lg font-semibold">Contact</p>
            <p>
              <a href="mailto:xyz@connect.com" className="text-white hover:underline">
                xyz@connect.com
              </a>
            </p>
          </div>

          {/* Menu Section */}
          <div className="flex flex-wrap justify-center mt-4 sm:mt-8">
            <Menu whiteText /> {/* Pass whiteText prop to make text white */}
          </div>

          {/* Divider Line */}
          <hr className="my-4 sm:my-6 border-white" />
        </div>
      </div>

      {/* Banner Positioned Above the Footer */}
      <div className="absolute w-full -top-[40vh] transform -translate-y-1/2 hidden sm:block">
        <Banner />
      </div>
    </div>
  );
};

export default Footer;
