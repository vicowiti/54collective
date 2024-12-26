import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-full  bg-[#64B500] rounded-xl p-8 sm:p-20 mt-5 sm:mt-10">
      <div className="flex flex-col sm:flex-row  justify-between">
        <div className="flex-1 text-[#f4f4d4]">
          <h3 className="font-bold text-3xl sm:text-5xl mb-3">
            Empowering Entrepreneurs Across{" "}
            <span className="text-[#E5CF00]">Africa</span>
          </h3>
          <p className="text-lg sm:text-2xl ">
            Access funding, connect with support organizations, and grow your
            business through a thriving entrepreneurial community.
          </p>

          <Link href={`/auth/register`} className="bg-[#E5CF00] text-[#2A2A27] py-3 px-3 sm:px-5 mt-4 rounded-md font-semibold">
            Sign Up
          </Link>
        </div>
        <div className="flex-1">
          <Image
            src="/landing/hero.png"
            width={50}
            height={50}
            alt="Hero Image"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
