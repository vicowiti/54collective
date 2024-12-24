import Link from "next/link";
import { FaFacebookF, FaSquareInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="p-3 bg-[#2a2a27] text-[#F4F4D4] ">
      <div className="max-w-[1340px] mx-auto">
        <div className="my-3 flex justify-center items-center flex-col">
          <img src="/landing/logo.png" className="h-16 w-auto" />
          <div className="flex space-x-4 mt-6 justify-center items-center">
            <Link href="">
              <FaXTwitter size={16}/>
            </Link>
            <Link href="">
              <FaFacebookF size={16}/>
            </Link>
            <Link href="">
              <FaSquareInstagram size={16}/>
            </Link>
            <Link href="">
              <IoLogoLinkedin size={16}/>
            </Link>
            <Link href="">
              <FaYoutube size={16}/>
            </Link>
          </div>
        </div>
        <div className="w-full flex justify-center flex-col items-center">
          <hr className="w-full p-1 bg-[#f4f4f4 my-2" />
          <h6>&copy; 54 Collective {new Date().getFullYear()}</h6>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
