// EventPaymentComponent.js

import React from "react";
import { useNavigate } from "react-router-dom";

const HaveYouPaid = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className="bg-gray-900 p-8 rounded-md text-white">
        <p className="text-xl mb-4">Have you paid for the event?</p>
        <div className="space-y-4">
          <button
            onClick={() => {
              localStorage.setItem("hasPaid", "true");
              navigate("/login");
            }}
            className="bg-blue-500 w-full px-4 py-2 rounded-md"
          >
            Yes
          </button>
          <button
            onClick={() => {
              window.location.href = "https://learner.vierp.in/events";
            }}
            className="bg-blue-500 w-full px-4 py-2 rounded-md"
          >
            No, I want to pay now
          </button>
          <button
            onClick={() => {
              localStorage.setItem("hasPaid", "false");
              navigate("/login");
            }}
            className="bg-blue-500 w-full px-4 py-2 rounded-md"
          >
            Not Yet Decided
          </button>
        </div>
      </div>
    </div>
  );
};

export default HaveYouPaid;
