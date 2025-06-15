import React, { useState } from 'react';
import './Faq.css';

const faqData = [
  {
    question: "What is digital marketing course?",
    answer: "A digital marketing course is skill-based training that helps you learn several in-demand skills like SEO, SMM, Google Ads, PPC, YouTube Marketing, Email Marketing, Content Marketing, and much more. When you do this course from the best digital marketing institute in India, like WsCube Tech, it helps you kickstart a thriving career and find high-paying jobs."
  },
  {
    question: "Are the classes live or recorded?",
    answer: "The classes are both live and recorded, so you can review them anytime."
  },
  {
    question: "What if I miss a live class?",
    answer: "You can watch the recorded session later at your convenience."
  },
  {
    question: "What if my queries or doubts are not solved during a live class?",
    answer: "You can ask your questions in the doubt forum or during one-on-one sessions."
  },
  {
    question: "Will I receive a digital marketing course certificate on completion of training?",
    answer: "Yes, you'll receive a certificate after successful completion of the course."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq-container">
      <h2>FAQs of the Course</h2>
      <p className="faq-subtext">Faq paragraph text</p>
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
