import React from "react";
import { FaArrowRight } from "react-icons/fa";
export const QuickLinks = () => {
  return (
    <div>
      <h2 className="text-2xl">Quick Links</h2>

      <div className="mt-4 space-y-2 text-sm font-light">
        <div className="hover:translate-x-2 transition cursor-pointer hover:text-blue-500">
          <FaArrowRight className="inline mr-2" /> Home
        </div>
        <div className="hover:translate-x-2 transition cursor-pointer hover:text-blue-500">
          <FaArrowRight className="inline mr-2" /> Find Doctors
        </div>
        <div className="hover:translate-x-2 transition cursor-pointer hover:text-blue-500">
          <FaArrowRight className="inline mr-2" /> Book Appointment
        </div>
        <div className="hover:translate-x-2 transition cursor-pointer hover:text-blue-500">
          <FaArrowRight className="inline mr-2" /> Download App
        </div>
        <div className="hover:translate-x-2 transition cursor-pointer hover:text-blue-500">
          <FaArrowRight className="inline mr-2" /> Blog / Health Tips
        </div>
        <div className="hover:translate-x-2 transition cursor-pointer hover:text-blue-500">
          <FaArrowRight className="inline mr-2" /> Contact Us
        </div>
        <div className="hover:translate-x-2 transition cursor-pointer hover:text-blue-500">
          <FaArrowRight className="inline mr-2" /> Help / FAQs
        </div>
      </div>
    </div>
  );
};
