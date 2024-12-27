"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { PiSpinner } from "react-icons/pi";
import { toast } from "sonner";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // Track whether to show the password
  const router = useRouter();
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.username.value;
    const email = form.email.value;
    const phoneNumber = form.number.value;
    const password = form.password.value;
    const gender = form.gender.gender;

    try {
      setLoading(true);

      const response = await axios.post("/api/auth/createUser", {
        email,
        password,
        name,
        phoneNumber,
        isAdmin: true,
        gender,
      });

      if (response.data.user) {
        toast.success("User created!");
        router.push("/");
      } else {
        toast.error("Could not create User.");
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div className="sm:p-20 p-8">
      <div className="mb-10">
        <h1 className="font-bold text-2xl text-center">Create Account</h1>
        <p className="text-sm text-center">to access customized content</p>
      </div>

      <div>
        <button className="flex items-center justify-between border gap-2 w-full   p-2 rounded-md">
          <img src="/google.png" alt="google logo" />
          Sign Up with Google
          <p></p>
        </button>
      </div>

      <form onSubmit={(e) => handleRegister(e)} className="mt-10">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="mt-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              name="username"
              placeholder="Enter Name"
              required
              id="name"
              className="mt-1 p-3 block w-full rounded-md outline-none border-gray-300 shadow-sm bg-[#f6f9f8]  sm:text-sm"
            />
          </div>
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
              required
              placeholder="Enter Email"
              id="email"
              className="mt-1 p-3 block w-full rounded-md outline-none border-gray-300 shadow-sm bg-[#f6f9f8]  sm:text-sm"
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="text"
              placeholder="Enter Phone"
              required
              name="number"
              id="number"
              className="mt-1 p-3 block w-full rounded-md outline-none border-gray-300 shadow-sm bg-[#f6f9f8]  sm:text-sm"
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Gender
            </label>
            <input
              type="text"
              name="gender"
              required
              placeholder="Select Gender"
              id="gender"
              className="mt-1 p-3 block w-full rounded-md outline-none border-gray-300 shadow-sm bg-[#f6f9f8]  sm:text-sm"
            />
          </div>
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
            Sign Up
          </button>
        </div>
        <div className="mt-3">
          <p className="text-right underline">Forgot Password?</p>
          <p className="font-bold">
            {`Already have an account? `}
            <Link href={`/auth/login`} className="text-[#E7C30C]">
              Login
            </Link>
          </p>
        </div>
      </form>

      <div></div>
    </div>
  );
};

export default Register;
