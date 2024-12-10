import React from "react";

const Login = () => {
  const handleGoogleLogin = () => {
    // Implement Google login logic
    console.log("Login with Google");
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Implement login logic with email and password
    console.log("Login submitted");
  };

  const handleSignupRedirect = () => {
    // Redirect to /signup
    window.location.href = "/signup";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className="bg-gray-900 p-8 rounded-md text-white w-96">
        <button
          className="bg-red-500 w-full px-4 py-2 rounded-md mb-4"
          onClick={handleGoogleLogin}
        >
          Login with Google
        </button>
        <div className="flex items-center mb-4">
          <hr className="flex-grow border-t border-gray-600" />
          <span className="mx-2 text-gray-400">or</span>
          <hr className="flex-grow border-t border-gray-600" />
        </div>
        <form onSubmit={handleLoginSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-400"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-400"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 w-full px-4 py-2 rounded-md"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-400 text-sm">
            Don't have an account?{" "}
            <button
              className="text-blue-500 underline"
              onClick={handleSignupRedirect}
            >
              Sign up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
