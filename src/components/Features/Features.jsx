import React from 'react';
import featureImage1 from '../../assets/features/feature1.png';
import featureImage2 from '../../assets/features/feature2.png';
import featureImage3 from '../../assets/features/feature3.png';
import featureImage4 from '../../assets/features/feature4.png';
import featureImage5 from '../../assets/features/feature9.png';
import featureImage6 from '../../assets/features/feature6.png';
import featureImage7 from '../../assets/features/feature1.png';
import featureImage8 from '../../assets/features/feature8.png';
import featureImage9 from '../../assets/features/feature9.png';
import rectangle1 from '../../assets/features/pink.png';
import rectangle2 from '../../assets/features/blue.png';

const featuresData = [
  { 
    heading: 'Centralized Contact Management', 
    description: 'Store and manage all contacts (WhatsApp, Gmail, Slack, Twitter (X), LinkedIn, & many more) in one place.', 
    image: featureImage1, 
    rectangle: rectangle1 
  },
  { 
    heading: 'Chat History for All Channels', 
    description: 'When you pull up a person, their interactions from LinkedIn and WhatsApp messages to Gmail and Outlook emails and all info are displayed in a beautiful profile. Our feature lets you easily access, review, and organize your entire conversation history for a streamlined experience.', 
    image: featureImage2, 
    rectangle: rectangle2 
  },
  { 
    heading: 'Automated Notes', 
    description: 'AI takes down important details. Automatic log interactions with each contact, including meetings, emails, messages using AI with actionable insights.', 
    image: featureImage3, 
    rectangle: rectangle1 
  },
  { 
    heading: 'Automatic Messages Based on Context', 
    description: 'With just one click, AI can generate a ready-to-send message based on your notes, the person\'s information, and the context of the occasion.', 
    image: featureImage4, 
    rectangle: rectangle2 
  },
  { 
    heading: 'Call to Action', 
    description: 'AI creates automated CTAs/reminders for follow-ups. Automated reminders for follow-ups, birthdays, anniversaries, and important dates related to contacts.', 
    image: featureImage5, 
    rectangle: rectangle1 
  },
  { 
    heading: 'Custom Fields & Instant Search', 
    description: 'Fit your needs with personalization and quickly search through every field (even custom ones).', 
    image: featureImage6, 
    rectangle: rectangle2 
  },
  { 
    heading: 'Groups & Tags', 
    description: 'Categorize based on your criteria and create tags based on user profiles. Users can geo-tag contacts based on their locations, allowing for easy identification of who to connect with in different cities.', 
    image: featureImage7, 
    rectangle: rectangle1 
  },
  { 
    heading: 'Automatic Updates about Your Contacts', 
    description: 'Continuously monitors news sources for updates related to users’ contacts, ensuring staying informed about significant events and automatically generating personalized messages based on the news.', 
    image: featureImage8, 
    rectangle: rectangle2 
  },
  { 
    heading: 'Analytics and Insights', 
    description: 'AI-driven analytics that provide insights into relationship health, engagement frequency, and opportunities for deeper connections.', 
    image: featureImage9, 
    rectangle: rectangle1 
  },
];

const Features = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-white py-12 px-5 md:px-12">
      
      <h1 className="text-4xl font-bold text-center mb-6">
        Easily pull your entire network into your <br /> <span className="text-[#0B66C2]">Personal CRM</span>
      </h1>
      <p className="text-center text-gray-600 mb-8 pb-[20px]"> 
        Complete with all the key professional and personal details, perfectly organized!
      </p>
      
      
      <div className="space-y-32 w-full max-w-7xl mx-auto">
        {featuresData.map((feature, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-10"> 
            {index % 2 !== 0 ? (
              <>
                
                <div className="relative flex-1 flex justify-start items-center ml-8"> 
                  <img src={feature.rectangle} alt="background" className="absolute rounded-lg w-[60%] h-[150%] left-0 top-0 object-cover" />
                  <img src={feature.image} alt={feature.heading} className="relative top-20 left-20 w-1/2 h-auto object-cover rounded-lg" />
                </div>
                <div className="flex-1 text-right px-4 mr-8">
                  <h2 className="text-4xl font-semibold text-black mb-2 leading-tight">
                    {feature.heading.split(' ').slice(0, 2).join(' ')} <br />
                    <span className="text-[#0B66C2]">{feature.heading.split(' ').slice(2).join(' ')}</span>
                  </h2>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </>
            ) : (
              <>
               
                <div className="flex-1 text-left px-4 ml-8">
                  <h2 className="text-4xl font-semibold text-black mb-2 leading-tight">
                    {feature.heading.split(' ').slice(0, 2).join(' ')} <br />
                    <span className="text-[#0B66C2]">{feature.heading.split(' ').slice(2).join(' ')}</span>
                  </h2>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
                <div className="relative flex-1 flex justify-start items-center mr-8">
                  <img src={feature.rectangle} alt="background" className="absolute rounded-lg w-[60%] h-[150%] right-0 top-0 object-cover" />
                  <img src={feature.image} alt={feature.heading} className="relative top-20 left-50 w-3/4 h-auto object-cover rounded-lg" />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
