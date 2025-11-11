import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { LuHouse } from "react-icons/lu";

export const Breadcrumb = () => {
  return (
    <div className="flex items-center gap-2 md:gap-4 py-4">
      <LuHouse />
      <div>Home</div>
      <FaChevronRight />
      <div>Doctor</div>
      <FaChevronRight />
      <div>Book Appointment</div>
    </div>
  );
};
