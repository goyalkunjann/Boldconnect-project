import React from 'react';
import Navbar from '../../../components/Navbar/Navbar';
import caseImage from '../../../assets/caseconnect/case4.png';
import questionImage from '../../../assets/caseconnect/question.png';
import bulbImage from '../../../assets/caseconnect/bulb.png';

const Case5 = () => {
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
            <img src={caseImage} alt="Case Image" className="w-20 h-20 mb-6" />
            <div>
              <h2 className="text-2xl font-semibold mb-4">Automating Travel Networking</h2>
              <p className="text-base leading-relaxed mb-6">
                Emily, a sales executive, frequently traveled to different cities for work but struggled to connect with potential clients and colleagues in each location ahead of time.
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
                  Emily often missed opportunities to engage with her network while traveling, as manually checking contacts in each city and sending individual messages was time-consuming.
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
                  When Emily booked a trip to New York, BoldConnect automatically retrieved her flight details from her email. A few days before her trip, it highlighted all her contacts in New York and drafted personalized messages for her to send. With one click, Emily sent tailored messages to multiple contacts, setting up meetings and maximizing her networking opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Case5;
