"use client";
import React from "react";
import { useRouter } from "next/navigation";
const CTA = () => {
  const router = useRouter();
  return (
    <div className="relative h-[50vh]">
      {/* Top Black Background */}
      <div className="h-1/2 bg-[#f6f6e8]"></div>

      {/* Bottom White Background */}
      <div className="h-1/2 bg-[#f6f6e8]"></div>

      {/* Center Section with Floating Image and Text */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        {/* Floating Image */}
        <div className="relative w-full max-w-lg sm:max-w-2xl lg:max-w-5xl">
          <img
            src="/landing/bg.png"
            alt="Floating"
            className="rounded-lg w-full h-[200px]  sm:h-auto object-cover"
          />
          {/* Text Overlay */}
          <div className="absolute inset-0 flex flex-col gap-2 sm:gap-4 items-center justify-center bg-black bg-opacity-50 text-white text-center px-4">
            <h2 className="text-sm sm:text-2xl lg:text-3xl font-bold">
              🚀Join the Community
            </h2>
            <p className="text-sm sm:text-lg">
              Join our community of entrepreneurs and gain the resources,
              insights and connections you need to succeed!
            </p>
            <button
              onClick={() => router.push("/auth/register")}
              className="sm:p-3 p-2 mt-2  border border-[#f4f4f4] rounded-sm hover:bg-white hover:text-black transition text-sm sm:text-base"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
