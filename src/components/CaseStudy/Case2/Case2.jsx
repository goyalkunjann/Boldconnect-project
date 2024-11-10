import React from 'react';
import Navbar from '../../../components/Navbar/Navbar';
import caseImage from '../../../assets/caseconnect/case2.png';
import questionImage from '../../../assets/caseconnect/question.png';
import bulbImage from '../../../assets/caseconnect/bulb.png';

const Case2 = () => {
  return (
    <div>
      <div className="text-center mt-8">
        <h1 className="text-5xl text-[#07051D] font-semibold">
          Automate your Networking with <br />
          <span className="font-bold text-[#0B66C2]">BoldConnect</span>
        </h1>
      </div>

      <div className="flex flex-col items-center mx-auto px-10 py-10 w-4/5">
        {/* Rectangle Box */}
        <div className="w-full bg-[#F3F4F5] rounded-lg shadow-lg p-8 mb-8">
          <div className="text-left max-w-5xl mx-auto flex items-start gap-4">
            <img src={caseImage} alt="Case Image" className="w-25 h-25 mb-6" />
            <div>
              <h2 className="text-2xl font-semibold mb-4">Networking Made Easy for a Startup Founder</h2>
              <p className="text-base leading-relaxed mb-6">
                Raj, a startup founder, regularly attended events and connected with dozens of potential investors and partners but found it hard to keep track of everyone.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between w-full gap-6">
          {/* Left Square Box */}
          <div className="w-full md:w-1/2 bg-[#F3F4F5] rounded-lg shadow-lg p-6 text-left">
            <div className="flex items-start gap-4">
              <img src={questionImage} alt="Problem Icon" className="w-20 h-20 mb-4" />
              <div>
                <h3 className="text-xl font-semibold mb-3">Problem</h3>
                <p className="text-base leading-relaxed">
                  Raj often forgot to follow up, and his contacts were scattered across LinkedIn, email, and business cards, making networking ineffective.
                </p>
              </div>
            </div>
          </div>

          {/* Right Square Box */}
          <div className="w-full md:w-1/2 bg-[#F3F4F5] rounded-lg shadow-lg p-6 text-left">
            <div className="flex items-start gap-4">
              <img src={bulbImage} alt="Solution Icon" className="w-20 h-20 mb-4" />
              <div>
                <h3 className="text-xl font-semibold mb-3">Solution with BoldConnect</h3>
                <p className="text-base leading-relaxed">
                  BoldConnect helped Raj sync all his contacts in one place, set automatic reminders, and gain insights into when and how to follow up. This improved his relationship-building efforts and led to several successful partnerships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Case2;
