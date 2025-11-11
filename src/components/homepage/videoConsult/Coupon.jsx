import React from "react";

export const Coupon = () => {
  return (
    <div className="text-sm bg-white p-4 rounded-xl">
      <div className="flex items-center gap-2 pb-2">
        <i className="fas fa-video text-blue-500"></i>
        <p className="font-semibold">Coupon Code</p>
      </div>
      <div className="flex pb-2">
        <input
          className="w-full border border-gray-300 rounded-l focus:outline-none px-2"
          type="text"
        ></input>
        <button className="bg-blue-500 text-white py-2 px-6 rounded-r cursor-pointer hover:bg-blue-600">
          Apply
        </button>
      </div>
    </div>
  );
};
