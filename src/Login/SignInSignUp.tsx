import React, { useState } from "react";
import { FaFacebook, FaGoogle, FaLinkedin } from "react-icons/fa";

const SignInSignUp: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-500" >
      <div
        className="relative w-[850px] h-[500px] bg-gray-700 shadow-lg rounded-lg overflow-hidden transition-transform duration-500" >
        {/* Sign Up Form */}
        <div
          className={`absolute inset-y-0 left-0 w-[60%] flex flex-col items-center justify-center p-10 transition-opacity duration-500 ${
            isSignUp ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <form className="w-full max-w-sm space-y-4 placeholder:bg-white text-white ">
            <h1 className="text-2xl font-bold ">Create Account</h1>
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="button"
              className="w-full py-2 mt-3 text-blue-600 bg-white rounded-lg hover:bg-blue-600 hover:text-white transition"
            >
              Sign Up
            </button>
          </form>
        </div>

        {/* Sign In Form */}
        <div
          className={`absolute inset-y-0 left-0 w-[60%] flex flex-col items-center justify-center p-10 transition-opacity duration-500 ${
            isSignUp ? "opacity-0 z-0" : "opacity-100 z-10"
          }`}
        >
          <form className="w-full max-w-sm space-y-4">
            <h1 className="text-2xl font-bold text-white">Break</h1>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <a
              href="#"
              className="block text-sm text-white hover:underline"
            >
              Forgot your password?
            </a>
            <button
              type="button"
              className="w-full py-2 mt-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Sign In
            </button>
          </form>
        </div>

        {/* Overlay */}
        <div
          className="absolute top-0 right-0 w-[40%] h-full bg-black text-white transition-transform duration-500"
        >
          <div className="flex flex-col items-center justify-center h-full p-8 text-center">
            {isSignUp ? (
              <>
                <h1 className="text-2xl font-bold">Welcome Back!</h1>
                <p className="mt-4">
                  To keep connected, please sign in with your personal info.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSignUp(false)}
                  className="mt-6 px-6 py-2 bg-white text-blue-700 rounded-lg hover:bg-gray-100"
                >
                  Sign In
                </button>
              </>
            ) : (
              <>
                <h1 className="text-2xl font-bold">Hello, Friend!</h1>
                <p className="mt-4">
                  Enter your personal details to create your account.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSignUp(true)}
                  className="mt-6 px-6 py-2 bg-white text-blue-700 rounded-lg hover:bg-gray-100"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInSignUp;
