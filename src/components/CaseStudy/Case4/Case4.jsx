import React from 'react';
import Navbar from '../../../components/Navbar/Navbar';
import caseImage from '../../../assets/caseconnect/case3.png';
import questionImage from '../../../assets/caseconnect/question.png';
import bulbImage from '../../../assets/caseconnect/bulb.png';

const Case4 = () => {
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
              <h2 className="text-2xl font-semibold mb-4">Automating News Updates for Professional Networking</h2>
              <p className="text-base leading-relaxed mb-6">
                Alex, a business development executive, wanted to stay updated on news related to his key contacts but found it time-consuming to track relevant articles and events.
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
                  Manually searching for news about his network took up valuable time, and missing out on key updates led to less meaningful interactions with potential clients and partners.
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
                  Using BoldConnect’s AI-powered news scraping feature, Alex received daily summaries of news related to his contacts, including promotions, funding announcements, and new projects. BoldConnect even generated automated personalized messages for Alex to send, helping him stay top-of-mind without extra effort. This led to deeper, more timely conversations and strengthened his professional relationships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Case4;
