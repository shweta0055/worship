import React, { useState } from 'react';
import './Faq.css';

const faqData = [
  {
    question: "Which coaching is best for CAPF AC?",
    answer: "Worship Academy is considered one of the top CAPF AC Coaching in Delhi. It offers the CAPF foundation course in both offline and online modes."
  },
  {
    question: "What is the fee for CAPF AC Coaching?",
    answer: "The fee structure for the offline CAPF Foundation course is Rs…….., and for the online CAPF AC Foundation course is Rs……."
  },
  {
    question: "Is there any refund policy?",
    answer: "We don’t have a standard refund policy. However, if a student is not satisfied after attending classes for one week, we do offer a refund option in such cases."
  },
  {
    question: "What if I miss a live class?",
    answer: "All classes in this course are conducted live. However, recordings are also provided for revision or if you miss a session."
  },
  {
    question: "Are the classes live or recorded?",
    answer: "Yes, you'll receive a certificate after successful completion of the course."
  },
  {
    question: "Are there any EMI Options?",
    answer: "Yes, EMI options are available. To know more, please contact our course advisor for details."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq-container mt-5">
      <h2>FAQs: UPSC CAPF AC Coaching</h2>
      {faqData.map((faq, index) => (
        <div className="faq-item" key={index}>
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            <h3>{faq.question}</h3>
            <span className="icon">{activeIndex === index ? '−' : '+'}</span>
          </div>
          {activeIndex === index && (
            <div className="faq-answer">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
