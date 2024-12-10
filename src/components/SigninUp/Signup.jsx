import { list } from "postcss";
import React, { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [logs, setlogs] = useState([]);
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
      } else {
        const errorData = await response.json();
        addToLogs(errorData.message);
        console.error("Error sending OTP:", errorData.message);
      }
    } catch (error) {
      addToLogs(error.message);
      console.error("Error sending OTP:", error.message);
    }
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
      } else {
        const errorData = await response.json();
        addToLogs(errorData.message);
        console.error("Error verifying OTP:", errorData.message);
        // Optionally, update state or show an error message to the user
      }
    } catch (error) {
      addToLogs(error.message);
      console.error("Error verifying OTP:", error.message);
      // Optionally, update state or show an error message to the user
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-md w-full p-4">
        <label
          className="block mb-2 text-sm font-bold text-gray-700"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="w-full p-2 mb-4 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {!isOtpSent ? (
          <button
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
            onClick={sendOtp}
          >
            Send OTP
          </button>
        ) : (
          <>
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="otp"
            >
              OTP
            </label>
            <input
              className="w-full p-2 mb-4 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
              type="text"
              id="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />

            <button
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
              onClick={verifyOtp}
            >
              Verify OTP
            </button>
          </>
        )}
      </div>
      <br />
      <code>{logs.map(log=>(
        <>
        {log}
        </>
      ))}</code>
    </div>
  );
};

export default Signup;
