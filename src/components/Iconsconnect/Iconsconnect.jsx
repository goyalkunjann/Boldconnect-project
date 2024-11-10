import React from 'react';
import gmailIcon from '../../assets/wrapicons/gmail.png';
import calendarIcon from '../../assets/wrapicons/calendar.png';
import slackIcon from '../../assets/wrapicons/slack.png';
import phoneIcon from '../../assets/wrapicons/contact.png';
import twitterIcon from '../../assets/wrapicons/twitter.png';
import linkedinIcon from '../../assets/wrapicons/linkedin.png';
import messageIcon from '../../assets/wrapicons/message.png';
import netflixIcon from '../../assets/wrapicons/netflix.png';
import outlookIcon from '../../assets/wrapicons/outlook.png';
import whatsappIcon from '../../assets/wrapicons/whatsapp.png';
import zapierIcon from '../../assets/wrapicons/zapier.png';
import blockicon from '../../assets/blockconnect.png';

const Iconsconnect = () => {
  return (
    <div className="flex flex-col items-center bg-[#F3F4F5] min-h-screen pt-10 mt-20 relative overflow-hidden">
      <h1 className="text-black font-bold text-3xl text-center mb-10">
        We connect with all your <br />
        <span className="text-[#0B66C2]">networking tools in a flash!</span>
      </h1>
      <div className="relative flex items-center justify-center w-[600px] h-[600px] perspective-1000 animate-spin-slow">
        <img src={blockicon} alt="Center Icon" className="w-46 h-36 absolute z-10" />
        
        <div className="absolute w-[500px] h-[500px] rounded-full border border-[#C6C3D4]"></div>
        <div className="absolute w-[400px] h-[400px] rounded-full border border-[#C6C3D4]"></div>
        
        <img src={linkedinIcon} alt="LinkedIn" className="icon absolute w-20 h-20 top-[2%] left-[30%] transform -rotate-15 gentle-wiggle" />
        <img src={whatsappIcon} alt="WhatsApp" className="icon absolute w-20 h-20 top-[15%] left-[-2%] transform -rotate-15 gentle-wiggle" />
        <img src={messageIcon} alt="Message" className="icon absolute w-20 h-20 top-[0%] right-[20%] gentle-wiggle" />
        <img src={gmailIcon} alt="Gmail" className="icon absolute w-20 h-20 bottom-[50%] left-[12%] gentle-wiggle" />
        <img src={netflixIcon} alt="Netflix" className="icon absolute w-20 h-20 top-[10%] right-[40%] gentle-wiggle" />
        <img src={phoneIcon} alt="Phone" className="icon absolute w-20 h-20 top-[55%] left-[87%] gentle-wiggle" />
        <img src={calendarIcon} alt="Calendar" className="icon absolute w-20 h-20 top-[32%] right-[10%] gentle-wiggle" />
        <img src={slackIcon} alt="Slack" className="icon absolute w-20 h-20 bottom-[28%] left-[5%] transform -rotate-15 gentle-wiggle" />
        <img src={twitterIcon} alt="Twitter" className="icon absolute w-20 h-20 bottom-[17%] right-[20%] transform -rotate-20 gentle-wiggle" />
        <img src={zapierIcon} alt="Zapier" className="icon absolute w-20 h-20 bottom-[5%] left-[38%] transform rotate-15 gentle-wiggle" />
        <img src={outlookIcon} alt="Outlook" className="icon absolute w-20 h-20 bottom-[7%] left-[5%] transform -rotate-15 gentle-wiggle" />
      </div>
    </div>
  );
};

export default Iconsconnect;
