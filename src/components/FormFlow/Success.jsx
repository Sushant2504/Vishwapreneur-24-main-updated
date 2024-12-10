// RegistrationSuccess.js
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RegistrationSuccess = () => {

  const navigate = useNavigate();
  useEffect(() => {
    // Redirect to the home page after 3 seconds
    const redirectTimer = setTimeout(() => {
      navigate("/");
    }, 3000);

    return () => clearTimeout(redirectTimer);
  }, []);

  return (
    <div className="w-screen mx-auto py-[16rem] p-6 bg-green-500 text-white rounded-md shadow-md text-center">
      <h2 className="text-2xl font-semibold mb-6">Registration Successful!</h2>
      <p className="text-lg">Thank you for registering for Vishwapreneur.</p>

    </div>
  );
};

export default RegistrationSuccess;
