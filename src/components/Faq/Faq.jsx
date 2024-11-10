// FAQ Component
import React, { useState } from 'react';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Faq = () => {
    const data = [
        { question: 'Who is this for?', answer: 'BoldConnect is designed for professionals...' },
        { question: 'I already use Excel, Google Sheets...', answer: 'BoldConnect complements these tools...' },
        { question: 'Can I trust you?', answer: 'Yes, we prioritize your privacy and data security...' },
        { question: 'Do I need technical skills to use BoldConnect?', answer: 'No technical skills are required...' },
    ];

    const [openStates, setOpenStates] = useState(new Array(data.length).fill(false));

    const handleClick = (index) => {
        const newOpenStates = [...openStates];
        newOpenStates[index] = !newOpenStates[index];
        setOpenStates(newOpenStates);
    };

    return (
        <section className="relative w-full md:w-[80%] h-auto mt-[100px] mx-auto pb-0 sm:pb-[200px] z-10">
            <h1 className="text-[#07051D] font-semibold text-3xl mb-8 ml-[20px] lg:ml-[20px]">
                Frequently Asked Questions
            </h1>
            <section className="my-[30px] max-w-[1290px] mx-auto h-auto flex flex-col">
                {data.map((item, index) => (
                    <div className="mb-[20px] rounded-lg" key={index}>
                        <div 
                            onClick={() => handleClick(index)} 
                            className={`bg-[#F3F4F5] flex justify-between cursor-pointer items-center border-[0.5px] rounded-lg ${!openStates[index] && 'shadow-md'} border-[#e0dede] px-[20px] py-[12px] text-[16px] text-black font-medium`}
                        > 
                            <p>{item.question}</p>
                            <span className="w-[23px] h-[23px] p-[6px] bg-[#F3F4F5] shadow-sm border border-[#e0dede] flex items-center text-[10px] rounded-full">
                                <FontAwesomeIcon icon={openStates[index] ? faChevronUp : faChevronDown} />
                            </span>
                        </div>
                        {openStates[index] && (
                            <div className="w-full mx-auto py-[20px] px-[21px] rounded-lg h-auto text-black bg-white">
                                {item.answer}
                            </div>
                        )}
                    </div>
                ))}
            </section>
        </section>
    );
};

export default Faq;
