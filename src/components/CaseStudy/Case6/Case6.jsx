import React from 'react';
import Navbar from '../../../components/Navbar/Navbar';
import caseImage from '../../../assets/caseconnect/case1.png';
import questionImage from '../../../assets/caseconnect/question.png';
import bulbImage from '../../../assets/caseconnect/bulb.png';

const Case6 = () => {
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
              <h2 className="text-2xl font-semibold mb-4">Effortlessly Organizing a Themed House Party</h2>
              <p className="text-base leading-relaxed mb-6">
                John, a product manager, was planning a house party and wanted to invite his connections working in SaaS companies who were also engaged in AI-related conversations.
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
                  John’s contacts were spread across LinkedIn, email, and other platforms, making it difficult to identify and reach out to the right people without manually sorting through his network.
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
                  Using BoldConnect, John filtered his connections based on job roles in SaaS and discussions related to AI across his email, LinkedIn, X, and Slack. BoldConnect then drafted personalized invitation messages for each contact, tailored to their interests. With a single tap, John sent out all the invites through email and WhatsApp, saving time and ensuring the right people were invited.
                </p>
                <p className="text-base leading-relaxed">
                  The party had a great turnout, with guests aligned with John’s professional and social interests, creating valuable conversations and networking opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Case6;
