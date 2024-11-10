import React from 'react';
import Navbar from '../../../components/Navbar/Navbar';
import caseImage from '../../../assets/caseconnect/case6.png';
import questionImage from '../../../assets/caseconnect/question.png';
import bulbImage from '../../../assets/caseconnect/bulb.png';

const Case3 = () => {
  return (
    <div>
      <div className="text-center mt-8">
        <h1 className="text-4xl md:text-5xl text-[#07051D] font-semibold">
          Automate your Networking with <br />
          <span className="font-bold text-[#0B66C2]">BoldConnect</span>
        </h1>
      </div>

      <div className="flex flex-col items-center mx-auto px-4 md:px-10 py-8 md:py-10 w-full md:w-4/5">
        {/* Rectangle Box */}
        <div className="w-full bg-[#F3F4F5] rounded-lg shadow-lg p-6 md:p-8 mb-6 md:mb-8">
          <div className="text-left max-w-5xl mx-auto flex flex-col md:flex-row items-start gap-4">
            <img src={caseImage} alt="Case Image" className="w-20 h-20 md:w-25 md:h-25 mb-4 md:mb-6" />
            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">Enhancing Client Relationships for a Freelancer</h2>
              <p className="text-sm md:text-base leading-relaxed mb-4 md:mb-6">
                Lisa, a freelance marketer, juggled multiple clients and struggled to maintain personalized interactions.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between w-full gap-6">
          {/* Left Square Box */}
          <div className="w-full md:w-1/2 bg-[#F3F4F5] rounded-lg shadow-lg p-4 md:p-6 text-left">
            <div className="flex items-start gap-4">
              <img src={questionImage} alt="Problem Icon" className="w-12 h-12 md:w-20 md:h-20 mb-4" />
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Problem</h3>
                <p className="text-sm md:text-base leading-relaxed">
                  Managing deadlines and remembering each client's preferences became overwhelming, causing delays in communication and reduced client satisfaction.
                </p>
              </div>
            </div>
          </div>

          {/* Right Square Box */}
          <div className="w-full md:w-1/2 bg-[#F3F4F5] rounded-lg shadow-lg p-4 md:p-6 text-left">
            <div className="flex items-start gap-4">
              <img src={bulbImage} alt="Solution Icon" className="w-12 h-12 md:w-20 md:h-20 mb-4" />
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Solution with BoldConnect</h3>
                <p className="text-sm md:text-base leading-relaxed">
                  BoldConnect helped Lisa centralize her communications, manage client preferences, and set reminders for timely follow-ups, significantly enhancing client satisfaction and retention.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Case3;