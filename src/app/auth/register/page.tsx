"use client";
import { useUserData } from "@/app/hooks/useUserData";
import SuccessModal from "@/components/SuccessModal";
import axios from "axios";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { PiSpinner } from "react-icons/pi";
import { toast } from "sonner";

const Register = () => {
  const { setUserData } = useUserData();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.username.value;
    const email = form.email.value;
    const phoneNumber = form.number.value;
    const password = "1234";
    const gender = form.gender.value;

    try {
      setLoading(true);

      const response = await axios.post("/api/auth/createUser", {
        email,
        password,
        name,
        phoneNumber,
        isAdmin: false,
        gender,
      });

      if (response.data.user) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        toast.success("User created!");
        router.push("/");
        setUserData(response.data.user);
        setOpen(true);
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
    <div className="sm:p-12 p-8 ">
      <SuccessModal open={open} setOpen={setOpen} />
      <div className="mb-10">
        <h1 className="font-bold text-2xl text-center">Join the Community</h1>
        <p className="text-sm text-center">
          Unlock the resources, insights and connections you need to succeed!
        </p>
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
            <select
              name="gender"
              required
              id="gender"
              className="mt-1 p-3 block w-full rounded-md outline-none border-gray-300 shadow-sm bg-[#f6f9f8]  sm:text-sm"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div className="mt-4">
          <button
            disabled={loading}
            type="submit"
            className="w-full flex hover:scale-105 duration-300 justify-center items-center gap-3 disabled:bg-green-400 bg-[#64B500] text-white py-2 rounded-md "
          >
            {loading && <PiSpinner size={18} className="animate-spin" />}
            Join
          </button>
        </div>
      </form>

      <div></div>
    </div>
  );
};

export default Register;
