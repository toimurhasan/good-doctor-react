import React from "react";
import { FaArrowRight } from "react-icons/fa";
export const Services = () => {
  return (
    <div>
      <h2 className="text-2xl">Our Services</h2>

      <div className="mt-4 space-y-2 text-sm font-light">
        <div className="hover:translate-x-2 transition cursor-pointer hover:text-blue-500">
          <FaArrowRight className="inline mr-2" /> Online Video Consultation
        </div>
        <div className="hover:translate-x-2 transition cursor-pointer hover:text-blue-500">
          <FaArrowRight className="inline mr-2" /> In-Person Appointments
        </div>
        <div className="hover:translate-x-2 transition cursor-pointer hover:text-blue-500">
          <FaArrowRight className="inline mr-2" /> Prescription Management
        </div>
        <div className="hover:translate-x-2 transition cursor-pointer hover:text-blue-500">
          <FaArrowRight className="inline mr-2" /> Health Tips & Blogs
        </div>
        <div className="hover:translate-x-2 transition cursor-pointer hover:text-blue-500">
          <FaArrowRight className="inline mr-2" /> Specialist Booking
        </div>
        <div className="hover:translate-x-2 transition cursor-pointer hover:text-blue-500">
          <FaArrowRight className="inline mr-2" />
          Emergency Support
        </div>
      </div>
    </div>
  );
};
