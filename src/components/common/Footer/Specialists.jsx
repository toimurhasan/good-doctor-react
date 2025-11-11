import React from "react";
import { FaArrowRight } from "react-icons/fa";

export const Specialists = () => {
  return (
    <div>
      <h2 className="text-2xl">Popular Specialties</h2>

      <div className="mt-4 space-y-2 text-sm font-light">
        <div className="hover:translate-x-2 transition cursor-pointer hover:text-blue-500">
          <FaArrowRight className="inline mr-2" /> General Physician
        </div>
        <div className="hover:translate-x-2 transition cursor-pointer hover:text-blue-500">
          <FaArrowRight className="inline mr-2" /> Gynecology & Pregnancy
        </div>
        <div className="hover:translate-x-2 transition cursor-pointer hover:text-blue-500">
          <FaArrowRight className="inline mr-2" /> Pediatrics
        </div>
        <div className="hover:translate-x-2 transition cursor-pointer hover:text-blue-500">
          <FaArrowRight className="inline mr-2" /> Dermatology (Skin & Hair)
        </div>
        <div className="hover:translate-x-2 transition cursor-pointer hover:text-blue-500">
          <FaArrowRight className="inline mr-2" /> Psychiatry & Mental Health
        </div>
        <div className="hover:translate-x-2 transition cursor-pointer hover:text-blue-500">
          <FaArrowRight className="inline mr-2" />
          Nutrition & Diet
        </div>
        <div className="hover:translate-x-2 transition cursor-pointer hover:text-blue-500">
          <FaArrowRight className="inline mr-2" /> Cardiology
        </div>
        <div className="hover:translate-x-2 transition cursor-pointer hover:text-blue-500">
          <FaArrowRight className="inline mr-2" /> Dentistry
        </div>
      </div>
    </div>
  );
};
