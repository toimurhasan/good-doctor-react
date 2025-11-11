import React from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export const DownloadApp = () => {
  return (
    <div>
      <h2 className="text-2xl">Download App</h2>
      <div className="mt-4 space-y-2 text-sm">
        <img
          className="w-64 -m-4 pb-4"
          src="https://i.ibb.co.com/GQdGstT7/5a902dbf7f96951c82922875.png"
          alt="google play"
        ></img>

        <div className="flex items-end gap-2">
          <MdOutlineEmail />
          <p>support@gooddoctor.com</p>
        </div>
        <div className="flex items-end gap-2">
          <FaPhoneAlt />
          <p>09625252525</p>
        </div>
        <div className="flex items-end gap-2">
          <FaWhatsapp />
          <p>+8801700000000</p>
        </div>
      </div>
    </div>
  );
};
