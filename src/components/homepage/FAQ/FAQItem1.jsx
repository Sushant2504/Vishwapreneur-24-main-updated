import React from 'react';

const FAQItem1 = ({ id, question, answer, isSelected, onItemClick }) => {
  return (
    <div key={id} className={`faq-item ${isSelected ? 'selected' : ''}`} onClick={() => onItemClick(id)}>
      <details>
        <summary>{question}</summary>
        <p className="answer">{answer}</p>
      </details>
    </div>
  );
};

export default FAQItem1;
