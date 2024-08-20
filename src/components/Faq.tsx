import styled from 'styled-components';
import React, { useState } from 'react';

// FAQ Item component to handle individual FAQ state
const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='cursor-pointer'>
      <div 
        className='text-[20px] lg:text-[35px] text-[#00ffd4] flex justify-between items-center mb-[25px]' 
        onClick={toggleFAQ}
      >
        <h4 className='w-8/12 text-left'>{question}</h4>
        <button id="myButton" className='text-[35px]'>{isOpen ? '-' : '+'}</button>
      </div>
      {isOpen && (
        <p className='max-w-8/12 text-left text-white text-[85%] lg:text-[175%] mb-[10px] pl-[10px]'>
          {answer}
        </p>
      )}
      <hr className='border-[1px] border-white'/>
    </div>
  );
};

const Faq: React.FC = () => {
  // List of FAQ questions and answers
  const faqs = [
    {
      question: 'How many events are there in Matrix 2.0?',
      answer: 'There are 9 events in Matrix 2.0 namely- Hackathon, Live Project, Data Science, Pitchers, News Flash, Inside Edge, UI/UX Design, Gaming Tournament, and Gaming Parlour.',
    },
    {
      question: 'Is there a participation fee for the events?',
      answer: 'Excluding Hackathon, all events have their respective registration fee. Check the event details for registration fee and payment options.',
    },
    {
      question: 'Is there any reward or prize for these events?',
      answer: 'There is a pool prize for Hackathon and Gaming Tournament. All events offer other rewards such as certificates, trophies, etc.',
    },
    {
      question: 'Can I take part in multiple events?',
      answer: 'Yes, students can participate in multiple events.',
    },
    {
      question: 'How can I get all the event details and instructions?',
      answer: 'Stay tuned on the official Instagram channel of Matrix 2.0 for all details, updates, and guidelines.',
    },
  ];

  return (
    <FAQContainer className='relative z-20 top-[40rem] p-2 mt-[10rem] m-auto 2xl:w-4/5 xl:w-4/5 lg:w-3/4 md:max-lg:w-5/6'>
      <main className='flex flex-col justify-center text-center'>
        <div className="glitch-wrapper mb-[20px]">
          <div className="glitch" data-glitch="FAQ">FAQ</div>
        </div>

        <div className="faq-section w-8/12 m-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </main>
    </FAQContainer>
  );
};

const FAQContainer = styled.div`
  summary::marker {
    display: none;
    content: "";
  }
`;

export default Faq;
