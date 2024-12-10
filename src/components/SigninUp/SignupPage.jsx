// SignupPage.js

import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [name, setName] = useState("");
  const [college, setCollege] = useState("");
  const [yearOfStudy, setYearOfStudy] = useState("");
  const [branchOfStudy, setBranchOfStudy] = useState("");
  const [showEmailSection, setShowEmailSection] = useState(true);
  const [showOtpSection, setShowOtpSection] = useState(false);
  const [showDetailsSection, setShowDetailsSection] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [logs, setlogs] = useState([]);
  const navigate = useNavigate();
  const addToLogs = (log) => {
    setlogs((prevList) => [...prevList, log]);
  };
  const sendOtp = async () => {
    try {
      const response = await fetch("http://localhost:3001/auth/sendOTP", {
        method: "POST", // or 'GET' depending on your server's implementation
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        addToLogs("sent");
        console.log(`OTP sent successfully to ${email}`);
        setIsOtpSent(true);
        return true;
      } else {
        const errorData = await response.json();
        addToLogs(errorData.message);
        console.error("Error sending OTP:", errorData.message);
      }
    } catch (error) {
      addToLogs(error.message);
      console.error("Error sending OTP:", error.message);
    }
    return false;
  };
  const verifyOtp = async () => {
      try {
        const response = await fetch("http://localhost:3001/auth/verifyOTP", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, otp }),
        });

        if (response.ok) {
          addToLogs(response);
          console.log(response);
          const Data = await response.json();
          console.log(Data);
          addToLogs(Data.token);
          setShowOtpSection(false);
          setShowDetailsSection(true);
          console.log("reached here")
          navigate("/");
          return true
        } else {
          const errorData = await response.json();
          addToLogs(errorData.message);
          console.error("Error verifying OTP:", errorData.message);
        }
      } catch (error) {
        addToLogs(error.message);
        console.error("Error verifying OTP:", error.message);
        // Optionally, update state or show an error message to the user
      }
      return false;
    };
  const handleSendOtp = async () => {
    // Implement logic to send OTP to the provided email
    const toProceed = await sendOtp();
    if(!toProceed) return;
    //Sets the visibility of sections based on the user flow
    setShowEmailSection(false);
    setShowOtpSection(true);
    // navigate("/");
  };

  const handleVerifyOtp =async (e) => {
    console.log(e)
    e.preventDefault();
    // Implement logic to verify the OTP
    navigate("/")
    const toProceed = await verifyOtp();
    console.log(toProceed)
    if (!toProceed) return;
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Implement logic to submit user details
    console.log("Signup submitted");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800 flex-col">
      <div className="bg-gray-900 p-8 rounded-md text-white w-96">
        {showEmailSection && (
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-400 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white mb-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              className="bg-blue-500 w-full px-4 py-2 rounded-md"
              onClick={handleSendOtp}
            >
              Send OTP
            </button>
          </div>
        )}

        {showOtpSection && (
          <div className="mt-4">
            <label
              htmlFor="otp"
              className="block text-sm font-medium text-gray-400 mb-2"
            >
              OTP
            </label>
            <input
              type="text"
              id="otp"
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white mb-4"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
            <button
              className="bg-blue-500 w-full px-4 py-2 rounded-md"
              onClick={handleVerifyOtp}
            >
              Verify OTP
            </button>
          </div>
        )}

        {showDetailsSection && (
          <form onSubmit={handleSignupSubmit} className="mt-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-400 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white mb-4"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label
              htmlFor="college"
              className="block text-sm font-medium text-gray-400 mb-2"
            >
              College
            </label>
            <input
              type="text"
              id="college"
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white mb-4"
              value={college}
              onChange={(e) => setCollege(e.target.value)}
              required
            />

            <label
              htmlFor="yearOfStudy"
              className="block text-sm font-medium text-gray-400 mb-2"
            >
              Year of Study
            </label>
            <input
              type="text"
              id="yearOfStudy"
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white mb-4"
              value={yearOfStudy}
              onChange={(e) => setYearOfStudy(e.target.value)}
              required
            />

            <label
              htmlFor="branchOfStudy"
              className="block text-sm font-medium text-gray-400 mb-2"
            >
              Branch of Study
            </label>
            <input
              type="text"
              id="branchOfStudy"
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white mb-4"
              value={branchOfStudy}
              onChange={(e) => setBranchOfStudy(e.target.value)}
              required
            />

            <button
              type="submit"
              className="bg-blue-500 w-full px-4 py-2 rounded-md"
            >
              Sign Up
            </button>
          </form>
        )}
      </div>

      <code className="text-white my-1">
        {logs.map((log) => (
          <>{log}</>
        ))}
      </code>
    </div>
  );
};

export default SignupPage;
