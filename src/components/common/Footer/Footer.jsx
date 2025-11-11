import { FooterLogo } from "./FooterLogo";
import { QuickLinks } from "./QuickLinks";
import { Specialists } from "./Specialists";
import { Services } from "./Services";

import { FaCircle } from "react-icons/fa";
import { DownloadApp } from "./DownloadApp";

export const Footer = () => {
  return (
    <footer className="bg-black text-white ">
      <div className="max-w-7xl mx-auto flex gap-8 py-8 flex-col xl:flex-row sm px-6">
        {/* logo  */}
        <FooterLogo />

        {/* quick link  */}
        <QuickLinks />

        {/* popular specialist  */}
        <Specialists />

        {/* our services  */}
        <Services />

        {/* download app  */}
        <DownloadApp />
      </div>

      <div className="flex flex-col xl:flex-row text-center justify-between max-w-7xl mx-auto text-sm py-4 px-6 border-t border-gray-800 text-gray-300 gap-2 items-center">
        <div>Copyright © 2025 GoodDoctor. All Right Reserved </div>

        <div className="flex gap-2 flex-wrap items-center justify-center">
          <div>Terms & Conditions</div>
          <FaCircle size={8} />
          <div>Privacy Policy</div>
          <FaCircle size={8} />
          <div>Refund Policy</div>
        </div>
      </div>
    </footer>
  );
};
