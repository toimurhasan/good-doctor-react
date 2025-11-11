import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import { LuFacebook } from "react-icons/lu";
import { SlSocialLinkedin } from "react-icons/sl";

export const FooterLogo = () => {
  return (
    <div className="max-w-xs space-y-4">
      <div className="text-2xl font-thin">
        <span className="text-blue-500 font-bold">GOOD</span>DOCTOR
      </div>
      <p className="text-lg">Book Doctors. Anytime. Anywhere.</p>
      <p className="text-sm">
        We’re a digital healthcare platform built to make quality medical care
        more accessible, affordable, and convenient — empowering you to consult
        with trusted doctors anytime, from anywhere, with complete privacy and
        care.
      </p>

      <div className="flex text-3xl gap-4 pt-4">
        {/* Facebook  */}
        <span className="bg-gray-900 rounded-full p-3 text-white hover:bg-gray-950 cursor-pointer">
          <LuFacebook />
        </span>

        {/* Instagram  */}
        <span className="bg-gray-900 rounded-full p-3 text-white hover:bg-gray-950 cursor-pointer">
          <FaInstagram />
        </span>

        {/* LinkedIn  */}
        <span className="bg-gray-900 rounded-full p-3 text-white hover:bg-gray-950 cursor-pointer">
          <SlSocialLinkedin />
        </span>

        {/* X   */}
        <span className="bg-gray-900 rounded-full p-3 text-white hover:bg-gray-950 cursor-pointer">
          <FaXTwitter />
        </span>

        {/* YouTube  */}
        <span className="bg-gray-900 rounded-full p-3 text-white hover:bg-gray-950 cursor-pointer">
          <FiYoutube />
        </span>
      </div>
    </div>
  );
};
