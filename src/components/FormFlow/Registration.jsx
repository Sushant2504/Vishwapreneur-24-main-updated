import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoadingButton from "./LoadingButton";
import { RocketAnimation } from "./RocketAnimation";
import Navbar from "../homepage/Navbar/Navbar";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    college: "",
    city: "",
  });
  const [errors, setErrors] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    college: "",
    city: "",
  });
  const [isloading, setIsLoading] = useState(false);
  const [rocketUdd, setRocketUdd] = useState(false);
  useEffect(() => {
    // window.scrollTo(0, 0);
  }, []);

  const validateAll = ({ name, value }) => {
    // console.log("reached at ", name, value);
    let error = "";
    if (name === "fullName" && value.trim() === "") {
      error = " is required";
    } else if (name === "phoneNumber") {
      if (!/^\d*$/.test(value)) {
        error = " must contain only digits";
      } else if (value.length > 10) {
        error = " cannot be more than 10 digits";
      } else if (value.trim() === "") error = " is required";
    } else if (name === "email" && !/^\S+@\S+\.\S+$/.test(value)) {
      error = " Invalid email address";
    } else if (name === "city" && value.trim() === "") {
      error = " is required";
    } else if (name === "college" && value.trim() === "") {
      error = " is required";
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
    if (error == "") return 0;
    else return 1;
  };
  const handleChange = (e) => {
    let { name, value } = e.target;

    // Validation logic
    let error = "";
    if (name === "fullName" && value.trim() === "") {
      error = "Full Name is required";
    } else if (name === "phoneNumber") {
      if (value.slice(0, 3) == "+91") {
        value = value.slice(3);
        console.log(value);
      } else if (!/^\d*$/.test(value)) {
        error = "Phone Number must contain only digits";
      } else if (value.length > 10) {
        error = "Phone Number cannot be more than 10 digits";
      }
    } else if (name === "email" && !/^\S+@\S+\.\S+$/.test(value)) {
      error = "Invalid email address";
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let errors = 0;
    for (const key in formData) {
      // console.log(key);
      errors += validateAll({ name: key, value: formData[key] });
    }
    if (errors != 0) return;
    try {
      setIsLoading(true);
      fetch();
      // const response = await fetch(
      //   "https://api.vishwapreneur.in/register",

      const response = await fetch(
        "https://vp-backend-production.up.railway.app/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
        { priority: "high" }
      );

      if (response.ok) {
        setRocketUdd(true);
        setTimeout(() => {
          console.log("Registration successful");
          navigate("/RegistrationSuccess");
        }, 2000);
      } else {
        console.error("Registration failed");
      }
    } catch (error) {
      console.error("Error submitting registration:", error);
    }
  };

  return (
    <>
      <Navbar></Navbar>
      <div className=" boxy-bg">
        <div className="h-24"></div>
        <div className="max-w-md mx-auto pt-[4rem] p-6 text-white rounded-lg shadow-md backdrop-blur-[1.5px]  ">
          <div className="flex justify-center">
            <h2 className="text-4xl font-semibold mb-6">Registration</h2>
          </div>
          <hr className="w-72 h-1 mx-auto my-4 bg-gray-500 border-0 rounded md:my-4 " />
          <form onSubmit={handleSubmit}>
            <div className="mb-4 text-xl md:text-3xl">
              <label htmlFor="fullName" className="inline  text-gray-300 mt-7">
                Full Name
              </label>{" "}
              <span className="text-xs" style={{ color: "red" }}>
                {errors.fullName}
              </span>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="mt-1 mb-4 p-2 w-full border rounded-md bg-gray-900 text-gray-300"
                placeholder="Dreamer Maverick"
                required
              />
              <label
                htmlFor="phoneNumber"
                className="inline  text-gray-300 mt-7"
              >
                Phone Number
              </label>{" "}
              <span className="text-xs" style={{ color: "red" }}>
                {errors.phoneNumber}
              </span>
              <br />
              <div className="relative mt-1 mb-4">
                <div className="absolute inset-y-0 start-0 top-0 flex justify-center items-center ps-3.5 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 19 18"
                  >
                    <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
                  </svg>
                </div>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="  p-2 w-full border rounded-md bg-gray-900 text-gray-300 ps-10   "
                  placeholder="8080808080"
                  required
                />
              </div>
              <label htmlFor="email" className="inline text-gray-300 mt-7">
                Email
              </label>
              <span className="text-xs" style={{ color: "red" }}>
                {errors.email}
              </span>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 mb-4 p-2 w-full border rounded-md bg-gray-900 text-gray-300"
                placeholder="dreamer.doer@vishwapreneur.in"
                required
              />
              <label htmlFor="college" className="inline  text-gray-300 mt-7">
                College
              </label>{" "}
              <span className="text-xs" style={{ color: "red" }}>
                {errors.college}
              </span>
              <input
                type="text"
                id="college"
                name="college"
                value={formData.college}
                onChange={handleChange}
                className="mt-1 mb-4 p-2 w-full border rounded-md bg-gray-900 text-gray-300"
                placeholder="Dreamer International College"
                required
              />
              <label htmlFor="city" className="inline  text-gray-300 mt-7">
                City
              </label>{" "}
              <span className="text-xs" style={{ color: "red" }}>
                {errors.city}
              </span>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="mt-1 mb-4 p-2 w-full border rounded-md bg-gray-900 text-gray-300"
                placeholder="Maverick City"
                required
              />
            </div>
            {/* <LoadingButton /> */}
            <div className="mt-7 text-3xl flex justify-center">
              {isloading ? (
                <>
                  <LoadingButton />
                  {/* <RocketAnimation /> */}
                </>
              ) : (
                <button
                  type="submit"
                  className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600"
                >
                  Register
                </button>
              )}
            </div>
          </form>
        </div>
        <div className="h-24"></div>
        {/* <RocketAnimation rocketUdd={rocketUdd} /> */}
      </div>
    </>
  );
};

export default RegistrationForm;
