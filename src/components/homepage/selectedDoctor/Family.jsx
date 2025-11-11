import React from "react";
import { FiPhoneCall } from "react-icons/fi";

export const Family = () => {
  return (
    <div className="mt-4">
      <div className="flex justify-between">
        <h3 className="font-semibold pb-2">Family Member</h3>
        <p className="text-blue-500 underline text-sm cursor-pointer">
          Change Family Member
        </p>
      </div>
      <div className="flex items-center gap-2 text-xs bg-white p-4 rounded-xl">
        {/* Family Member Picture --> */}
        <img
          src="https://i.ibb.co.com/pv9wWNHB/aa.jpg"
          alt="family-member"
          className="w-32 h-36 object-cover rounded-2xl shadow-lg p-1"
        />

        {/* Family Member Information --> */}
        <div className="space-y-2.5">
          <h3 className="text-2xl font-semibold">Nayem Uddin</h3>
          <p>
            <FiPhoneCall className="inline mr-2" />
            +8801322344858
          </p>
          <p>
            <i className="fa-solid fa-envelope text-gray-500 pr-2"></i>
            nayem.uddin@gmail.com
          </p>
          <p>
            <i className="fa-solid fa-person-walking text-gray-500 pr-3"></i>5
            ft 7 in
          </p>
          <p>
            <i className="fa-solid fa-dumbbell text-gray-500 pr-1"></i>70 kg
            <i className="fa-solid fa-cake-candles text-gray-500 pl-3 pr-1"></i>{" "}
            25 Years
          </p>
        </div>
      </div>
    </div>
  );
};
