import React from 'react';
import Navbar from '../../../components/Navbar/Navbar';
import caseImage from '../../../assets/caseconnect/case5.png';
import questionImage from '../../../assets/caseconnect/question.png';
import bulbImage from '../../../assets/caseconnect/bulb.png';

const Case1 = () => {
  return (
    <div>
      <div className="text-center mt-8">
        <h1 className="text-4xl text-[#07051D] font-medium">
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
              <h2 className="text-2xl font-semibold mb-4">Streamlining Deal Flow for a Venture Capitalist</h2>
              <p className="text-base leading-relaxed mb-6">
                Sarah is a venture capitalist managing a portfolio of early-stage startups. She has an extensive network, including founders, investors, and accelerators, but struggles to track ongoing conversations, follow-ups, and key relationship moments. Managing all this data manually across different platforms is overwhelming, leading to missed opportunities and strained connections.
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
                  Overwhelming number of contacts spread across different platforms (LinkedIn, email, Slack). Difficulty in tracking conversation history, deal flow, and relationship touchpoints. Lack of an integrated view of her relationships with founders and co-investors.
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
                  Sarah implemented BoldConnect to automate contact management, centralize all her communications, and set personalized reminders for follow-ups and check-ins, which goes out automatically.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Case1;
