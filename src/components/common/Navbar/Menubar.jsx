import React from "react";

export const Menubar = () => {
  return (
    <div className="lg:flex gap-4 hidden">
      <div className="cursor-pointer text-blue-600">Home</div>
      <div className="cursor-pointer hover:text-blue-600">Find Doctor</div>
      <div className="cursor-pointer hover:text-blue-600">Order Medicine</div>
      <div className="cursor-pointer hover:text-blue-600">Specialties</div>
      <div className="cursor-pointer hover:text-blue-600">Health Articles</div>
      <div className="cursor-pointer hover:text-blue-600">About Us</div>
      <div className="cursor-pointer hover:text-blue-600">Contact</div>
    </div>
  );
};
