// FAQItem.js

import React from "react";

const FAQItem = ({ question, answer, isOpen, toggleAnswer }) => {
  return (
    <div className="mb-8">
      <button
        className="text-sm text-blue-500 underline mb-2"
        onClick={toggleAnswer}
      >
        {question}
      </button>
      {isOpen && <p className="text-gray-700">{answer}</p>}
    </div>
  );
};

export default FAQItem;
