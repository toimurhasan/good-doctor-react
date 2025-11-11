import React from "react";
import { IoVideocamOutline } from "react-icons/io5";
import { LuAlarmClock } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";

export const VideoConsult = () => {
  return (
    <div className="text-sm bg-white p-4 rounded-xl space-y-1.5">
      <div className="flex items-center gap-2">
        <IoVideocamOutline />
        <p className="font-semibold">Schedule Video Consultation</p>
      </div>
      <div className="flex items-center gap-2.5">
        <SlCalender />
        <p>
          <span className="text-gray-500">Schedule Date :</span> 17-06-2025
        </p>
      </div>
      <div className="flex items-center gap-2">
        <LuAlarmClock />
        <p>
          <span className="text-gray-500">Schedule Time : </span> 10:30 AM
        </p>
      </div>
    </div>
  );
};
