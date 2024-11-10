import React from 'react';
import Emailinput from './Emailinput/Emailinput';
import Sponsors from './Sponsors/Sponsors';
import gmailIcon from '../../assets/wrapicons/gmail.png';
import calendarIcon from '../../assets/wrapicons/calendar.png';
import slackIcon from '../../assets/wrapicons/slack.png';
import phoneIcon from '../../assets/wrapicons/contact.png';
import twitterIcon from '../../assets/wrapicons/twitter.png';
import linkedinIcon from '../../assets/wrapicons/linkedin.png';
import messageIcon from '../../assets/wrapicons/message.png';
import netflixIcon from '../../assets/wrapicons/netflix.png';
import whatsappIcon from '../../assets/wrapicons/whatsapp.png';
import zapierIcon from '../../assets/wrapicons/zapier.png';

const Home = () => {
  return (
    <div className="relative flex flex-col items-center justify-start bg-white text-center p-2 pt-20 mb-10">
     
      {/* Left-side floating icons */}
      <div className="absolute left-0 top-20 flex flex-col space-y-12">
        <img src={gmailIcon} alt="Gmail" className="w-20 h-20 transform -rotate-6 ml-[270px] wiggle-animation" />
        <img src={linkedinIcon} alt="LinkedIn" className="w-20 h-20 transform -rotate-10 ml-[100px] mt-[-10px] wiggle-animation" />
        <img src={messageIcon} alt="Message" className="w-20 h-20 transform -rotate-4 ml-[270px] wiggle-animation" />
        <img src={calendarIcon} alt="Calendar" className="w-20 h-20 transform rotate-2 ml-[150px] mt-[-20px] wiggle-animation" />
        <img src={netflixIcon} alt="Netflix" className="w-20 h-20 transform -rotate-5 ml-[270px] mt-[-15px] wiggle-animation" />
      </div>

      {/* Main content */}
      <div className="text-center max-w-2xl z-10">
        <h1 className="text-6xl font-bold leading-[4rem] text-[#07051D] m-0">
          <span className="block">Automate</span>
          <span className="block">Your Networking with</span>
          <span className="text-[#0B66C2]">BoldConnect</span>
        </h1>
        <p className="text-sm text-[#07051D] mt-4">
          Organize your contacts, streamline follow-ups, and let BoldConnect’s AI assistant handle the details – so you can focus on what matters.
        </p>

        {/* Centered Email Input */}
        <div className="mt-6 w-[80%] max-w-lg mx-auto">
          <Emailinput />
        </div>
      </div>

      {/* Right-side floating icons */}
      <div className="absolute right-14 top-20 flex flex-col space-y-12">
        <img src={phoneIcon} alt="Phone" className="w-20 h-20 transform -rotate-6 ml-[10px] wiggle-animation" />
        <img src={zapierIcon} alt="Zapier" className="w-20 h-20 transform -rotate-10 ml-[150px] mt-[-2px] wiggle-animation" />
        <img src={slackIcon} alt="Slack" className="w-20 h-20 transform -rotate-4 ml-[40px] wiggle-animation" />
        <img src={whatsappIcon} alt="WhatsApp" className="w-20 h-20 transform rotate-2 ml-[150px] mt-[-20px] wiggle-animation" />
        <img src={twitterIcon} alt="Twitter" className="w-20 h-20 transform -rotate-5 ml-[10px] mt-[-15px] wiggle-animation" />
      </div>

      {/* Loved by companies section */}
      <div className="flex flex-col items-center mt-28 bg-white text-center p-2">
        <h1 className="text-4xl text-center font-bold leading-[2rem] text-[#07051D]">
          We are loved by professionals at the 
          <br />
          <span className="text-4xl font-bold leading-[4rem] text-[#0B66C2]">world’s largest companies!</span>
        </h1>
      </div>

      {/* Sponsors component */}
      <Sponsors />
    </div>
  );
};

export default React.memo(Home);
