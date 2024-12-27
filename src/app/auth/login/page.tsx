"use client"
import Link from "next/link";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { PiSpinner } from "react-icons/pi";

const Login = () => {
  const [loading, setLoading] = useState(true)
  const [showPassword, setShowPassword] = useState(false); // Track whether to show the password
  
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

   const handleLogin = async(e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // const form = e.currentTarget
    
    // const email = form.email.value
    // const password = form.password.value
   
    
    try {
      setLoading(true)

      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }

    
    
  }
  return (
    <div className="sm:p-20 p-8">
      <div className="mb-10">
        <h1 className="font-bold text-2xl text-center">
          Login To Your Account
        </h1>
        <p className="text-sm text-center">
          Login to access customized content
        </p>
      </div>

      <div>
        <button className="flex items-center justify-between border gap-2 w-full   p-2 rounded-md">
            <img src="/google.png" alt="google logo" />
            Login with Google
            <p></p>
        </button>
      </div>

      <form onSubmit={handleLogin} className="mt-10">
        <div className="mt-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="mt-1 p-3 block w-full bg-[#f6f9f8] rounded-md outline-none border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mt-4">
      <label
        htmlFor="password"
        className="block text-sm font-medium text-gray-700"
      >
        Password
      </label>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"} // Toggle the type of input
          name="password"
          required
          placeholder="*********"
          id="password"
        
          className="mt-1 p-3 block w-full rounded-md outline-none border-gray-300 shadow-sm bg-[#f6f9f8] sm:text-sm"
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-3 top-1/2 transform -translate-y-1/2"
        >
          {showPassword ? (
            <FaEyeSlash className="text-gray-500" />
          ) : (
            <FaEye className="text-gray-500" />
          )}
        </button>
      </div>
    </div>

        <div className="mt-4">
          <button
                      disabled={loading}
                      type="submit"
                      className="w-full flex hover:scale-105 duration-300 justify-center items-center gap-3 disabled:bg-green-400 bg-[#64B500] text-white py-2 rounded-md "
                    >
                      {loading && <PiSpinner size={18} className="animate-spin" />}
                      Login
                    </button>
        </div>
        <div className="mt-3">
          <p className="text-right underline">Forgot Password?</p>
          <p className="font-bold">
            {`Don't have an account? `}
            <Link href={`/auth/register`} className="text-[#E7C30C]">
              Register
            </Link>
          </p>
        </div>
      </form>

      <div></div>
    </div>
  );
};

export default Login;
